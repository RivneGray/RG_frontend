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

export const RangePartyTime = ({ minTimeData, maxTimeData }) => {
  const dispatch = useDispatch();

  const minTimeBound = Math.floor(minTimeData);
  const maxTimeBound = Math.ceil(maxTimeData);

  const minPartyTimeFromState = useSelector(getMinGameDurationSelector);
  const maxPartyTimeFromState = useSelector(getMaxGameDurationSelector);

  useEffect(() => {
    if (!minPartyTimeFromState || !maxPartyTimeFromState) {
      dispatch(setMinPartyTime(minTimeBound));
      dispatch(setMaxPartyTime(maxTimeBound));
    }
  }, [
    dispatch,
    minTimeBound,
    maxTimeBound,
    minPartyTimeFromState,
    maxPartyTimeFromState,
  ]);

  const sliderHandler = (arrValues) => {
    dispatch(setMinPartyTime(arrValues[0]));
    dispatch(setMaxPartyTime(arrValues[1]));
  };

  // const minPartyTimeHandler = (event) => {
  //   dispatch(setMinPartyTime(event.target.value));
  // };
  // const maxPartyTimeHandler = (event) => {
  //   dispatch(setMaxPartyTime(event.target.value));
  // };

  return (
    <div className={stylesFilterContainer.overflowContainer}>
      <p className={stylesFilterContainer.titleList}>Час партії:</p>
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
    </div>
  );
};
