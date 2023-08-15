import { useDispatch } from "react-redux";
import {
  deleteFilter,
  getFiltersSelector,
  selectFilter,
} from "../../../redux/slices/filtersSlice";
import styles from "./FilterItem.module.css";
import { useSelector } from "react-redux";
import classNames from "classnames";
import checkIcon from "../../../icons/checkMark.svg";

export const FilterItem = (props) => {
  const dispatch = useDispatch();
  // const [searchParams, setSearchParams] = useSearchParams();

  const nameFilter = props.nameFilterUI;
  const nameCategoryDev = props.nameCategoryDev;

  // const currentValueFromParams = searchParams.get(nameCategoryDev);

  // const setQueryParametr = (newValue) => {
  //   const prevValue = currentValueFromParams;
  //   if (prevValue) return prevValue + "-" + newValue;
  //   return newValue;
  // };

  // const removeQueryParametr = (removedValue) => {
  //   const prevValue = currentValueFromParams;
  //   return prevValue
  //     .split("-")
  //     .filter((parametr) => parametr !== removedValue)
  //     .join("-");
  // };

  const filters = useSelector(getFiltersSelector);
  const arrayItemsCategory = filters[nameCategoryDev];
  const isConsistInFilters = arrayItemsCategory.includes(nameFilter);
  // const isConsistInParams = currentValueFromParams
  //   ? currentValueFromParams.includes(nameFilter)
  //   : false;

  const filterHandler = () => {
    if (!isConsistInFilters) {
      dispatch(selectFilter(props));
      // setSearchParams({
      //   ...Object.fromEntries(searchParams.entries()),
      //   [nameCategoryDev]: setQueryParametr(nameFilter),
      // });

      return;
    }

    dispatch(deleteFilter(props));
    // setSearchParams({
    //   ...Object.fromEntries(searchParams.entries()),
    //   [nameCategoryDev]: removeQueryParametr(nameFilter),
    // });
  };

  return (
    <li>
      <input
        type="checkbox"
        className={styles.input}
        id={nameCategoryDev + nameFilter}
        onChange={filterHandler}
      />

      <label className={styles.label} htmlFor={nameCategoryDev + nameFilter}>
        <div
          className={classNames([styles.checkbox], {
            [styles.chacked]: isConsistInFilters,
          })}
        >
          {isConsistInFilters && <img src={checkIcon} alt="checkIcon"/>}
        </div>

        {nameFilter}
      </label>
    </li>
  );
};
