import styles from "./RangePrice.module.css";
import stylesFilterContainer from "../FilterContainer/FilterContainer.module.css";
import { useDispatch } from "react-redux";
import {
  getMaxProductPriceSelector,
  // getFiltersSelector,
  getMinProductPriceSelector,
  setMaxPrice,
  setMinPrice,
} from "../../../redux/slices/filtersSlice";
import { useSelector } from "react-redux";
import ReactSlider from "react-slider";
import { useEffect } from "react";

export const RangePrice = () => {
  const dispatch = useDispatch();
  const minPriceFromState = useSelector(getMinProductPriceSelector);
  const maxPriceFromState = useSelector(getMaxProductPriceSelector);

  const minPrice = 0; // добавить сетевой запрос
  const maxPrice = 15000; // на получение minPrice и maxPrice

  useEffect(() => {
    if (!minPriceFromState) dispatch(setMinPrice(minPrice));
    if (!maxPriceFromState) dispatch(setMaxPrice(maxPrice));
  }, [dispatch, minPriceFromState, maxPriceFromState])

  // const minPriceHandler = (event) => {
  //   dispatch(setMinPrice(event.target.value));
  // };

  // const maxPriceHandler = (event) => {
  //   dispatch(setMaxPrice(event.target.value));
  // };

  const sliderHandler = (arrValues) => {
    dispatch(setMinPrice(arrValues[0]));
    dispatch(setMaxPrice(arrValues[1]));
  };

  return (
    <div className={stylesFilterContainer.overflowContainer}>
      <p className={stylesFilterContainer.titleList}>Ціна:</p>
      <div className={styles.inputsContainer}>
        <input
          type="text"
          value={minPriceFromState + ' ₴'}
          className={styles.inputs}
          // onChange={minPriceHandler}
          disabled
        />
        <span className={styles.delimiter} />
        <input
          type="text"
          value={maxPriceFromState + ' ₴'}
          className={styles.inputs}
          // onChange={maxPriceHandler}
          disabled
        />
      </div>
      <ReactSlider
        onChange={sliderHandler}
        value={[minPriceFromState, maxPriceFromState]}
        min={minPrice}
        max={maxPrice}
        step={100}
      />
    </div>
  );
};
