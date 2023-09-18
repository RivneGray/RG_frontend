import styles from "./RangePrice.module.css";
import stylesFilterContainer from "../FilterContainer/FilterContainer.module.css";
import { useDispatch } from "react-redux";
import {
  getMaxProductPriceSelector,
  getMinProductPriceSelector,
  setMaxPrice,
  setMinPrice,
} from "../../../redux/slices/filtersSlice";
import { useSelector } from "react-redux";
import ReactSlider from "react-slider";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getQueryKeyPriceBounds } from "../../../utils/helpers/getQueryKeys";
import { boardgameApi } from "../../../api/boardgameAPI";
import { withQuery } from "../../HOCs/withQuery";

const RangePriceInner = withQuery(({ data }) => {
  const dispatch = useDispatch();

  const minPriceBound = Math.floor(data.absoluteMinValue);
  const maxPriceBound = Math.ceil(data.absoluteMaxValue);

  useEffect(() => {
    dispatch(setMinPrice(minPriceBound));
    dispatch(setMaxPrice(maxPriceBound));
  }, [dispatch, minPriceBound, maxPriceBound]);

  const minPriceFromState = useSelector(getMinProductPriceSelector);
  const maxPriceFromState = useSelector(getMaxProductPriceSelector);

  const sliderHandler = (arrValues) => {
    dispatch(setMinPrice(arrValues[0]));
    dispatch(setMaxPrice(arrValues[1]));
  };

  return (
    <>
      <div className={styles.inputsContainer}>
        <input
          type="text"
          value={minPriceFromState + " ₴"}
          className={styles.inputs}
          // onChange={minPriceHandler}
          disabled
        />
        <span className={styles.delimiter} />
        <input
          type="text"
          value={maxPriceFromState + " ₴"}
          className={styles.inputs}
          // onChange={maxPriceHandler}
          disabled
        />
      </div>
      <ReactSlider
        onChange={sliderHandler}
        value={[minPriceFromState, maxPriceFromState]}
        min={minPriceBound}
        max={maxPriceBound}
        // step={100}
      />
    </>
  );
});

export const RangePrice = () => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: getQueryKeyPriceBounds(),
    queryFn: () => boardgameApi.getPriceBounds(),
  });

  return (
    <div className={stylesFilterContainer.overflowContainer}>
      <p className={stylesFilterContainer.titleList}>Ціна:</p>
      <RangePriceInner
        data={data}
        isLoading={isLoading}
        isError={isError}
        error={error}
        refetch={refetch}
      />
    </div>
  );
};
