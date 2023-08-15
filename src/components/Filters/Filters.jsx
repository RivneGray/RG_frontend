import { FilterContainer } from "./FilterContainer/FilterContainer";
import { categories } from "./categories";
import styles from "./Filters.module.css";
import { RangePrice } from "./RangePrice/RangePrice";
import { ButtonYellow } from "../ButtonYellow/ButtonYellow";
import { useDispatch } from "react-redux";
import { clearFilters } from "../../redux/slices/filtersSlice";
import { RangePartyTime } from "./RangePartyTime/RangePartyTime";
import { ButtonWhite } from "../ButtonWhite/ButtonWhite";

export const Filters = () => {
  const dispatch = useDispatch();

  const clearfiltersHandler = () => {
    dispatch(clearFilters());
  };

  const returnJSXListCategories = (stubCategories) => {
    const listCategories = [];

    for (let name in stubCategories) {
      listCategories.push(
        <FilterContainer
          key={name}
          category={stubCategories[name]}
          nameCategoryDev={name}
        />
      );
    }

    return listCategories;
  };

  return (
    <div className={styles.filtersContainer}>
      <RangePrice />
      <RangePartyTime />
      {returnJSXListCategories(categories)}
      <div className={styles.buttonContainer}>
        <ButtonYellow>Показати</ButtonYellow>
        <ButtonWhite onClickHandler={clearfiltersHandler}>
          Зняти виділення
        </ButtonWhite>
      </div>
    </div>
  );
};
