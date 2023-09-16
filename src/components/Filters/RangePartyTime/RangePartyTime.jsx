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

export const RangePartyTime = () => {
  const dispatch = useDispatch();
  const minPartyTimeFromState = useSelector(getMinGameDurationSelector);
  const maxPartyTimeFromState = useSelector(getMaxGameDurationSelector);

  const minTime = 0;
  const maxTime = 1000;
  
  useEffect(() => {
    if (!minPartyTimeFromState) dispatch(setMinPartyTime(minTime));
    if (!maxPartyTimeFromState) dispatch(setMaxPartyTime(maxTime));
  }, [dispatch, maxPartyTimeFromState, minPartyTimeFromState])

  // const minPartyTimeHandler = (event) => {
  //   dispatch(setMinPartyTime(event.target.value));
  // };

  // const maxPartyTimeHandler = (event) => {
  //   dispatch(setMaxPartyTime(event.target.value));
  // };

  const sliderHandler = (arrValues) => {
    dispatch(setMinPartyTime(arrValues[0]));
    dispatch(setMaxPartyTime(arrValues[1]));
  };

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
        min={minTime}
        max={maxTime}
        step={15}
      />
    </div>
  );
};
