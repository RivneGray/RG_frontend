import stylesRangePrice from "../RangePrice/RangePrice.module.css";
import stylesFilterContainer from "../FilterContainer/FilterContainer.module.css";
import { useDispatch } from "react-redux";
import {
  getMaxGameDurationSelector,
  getMinGameDurationSelector,
  setMaxPartyTime,
  setMinPartyTime,
} from "../../../redux/slices/filtersSlice";
import { useSelector } from "react-redux";
import ReactSlider from "react-slider";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getQueryKeyGameDurationBounds } from "../../../utils/helpers/getQueryKeys";
import { boardgameApi } from "../../../api/boardgameAPI";
import { withQuery } from "../../HOCs/withQuery";

const RangePartyTimeInner = withQuery(({data}) => {
  const dispatch = useDispatch();

  const minTimeBound = Math.floor(data.absoluteMinValue);
  const maxTimeBound = Math.ceil(data.absoluteMaxValue);

  const minPartyTimeFromState = useSelector(getMinGameDurationSelector);
  const maxPartyTimeFromState = useSelector(getMaxGameDurationSelector);

  useEffect(() => {
    if (!minPartyTimeFromState || !maxPartyTimeFromState) {
      dispatch(setMinPartyTime(minTimeBound));
      dispatch(setMaxPartyTime(maxTimeBound));
    }
  }, [dispatch, minTimeBound, maxTimeBound, minPartyTimeFromState, maxPartyTimeFromState]);

  const sliderHandler = (arrValues) => {
    dispatch(setMinPartyTime(arrValues[0]));
    dispatch(setMaxPartyTime(arrValues[1]));
  };

  return (
    <>
      <div className={stylesRangePrice.inputsContainer}>
        <input
          type="text"
          value={minPartyTimeFromState + " хв"}
          className={stylesRangePrice.inputs}
          // onChange={minPartyTimeHandler}
          disabled
        />
        <span className={stylesRangePrice.delimiter} />
        <input
          type="text"
          value={maxPartyTimeFromState + " хв"}
          className={stylesRangePrice.inputs}
          // onChange={maxPartyTimeHandler}
          disabled
        />
      </div>
      <ReactSlider
        onChange={sliderHandler}
        value={[minPartyTimeFromState, maxPartyTimeFromState]}
        min={minTimeBound}
        max={maxTimeBound}
        step={15}
      />
    </>
  )
})

export const RangePartyTime = () => {
  
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: getQueryKeyGameDurationBounds(),
    queryFn: () => boardgameApi.getGameDurationBounds(),
  });

  // const minPartyTimeHandler = (event) => {
  //   dispatch(setMinPartyTime(event.target.value));
  // };

  // const maxPartyTimeHandler = (event) => {
  //   dispatch(setMaxPartyTime(event.target.value));
  // };

  return (
    <div className={stylesFilterContainer.overflowContainer}>
      <p className={stylesFilterContainer.titleList}>Час партії:</p>
        <RangePartyTimeInner
          data={data}
          isLoading={isLoading}
          isError={isError}
          error={error}
          refetch={refetch}
        />
    </div>
  );
};
