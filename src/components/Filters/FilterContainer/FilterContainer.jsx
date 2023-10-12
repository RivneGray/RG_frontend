import classNames from "classnames";
import { FilterItem } from "../FilterItem/FilterItem";
import styles from "./FilterContainer.module.css";

export const FilterContainer = ({category, nameCategoryDev}) => {
    return (
        <div className={styles.overflowContainer}>
            <p className={styles.titleList}>{category.nameCategory}</p>
            <ul className={classNames({
                [styles.overflowList]: true,
                [styles.overflowListScroll]: category.isScrolled,
            })}>
                {category.nameFilters.map(nameFilter => (
                    <FilterItem 
                        key={nameFilter}
                        nameCategoryDev={nameCategoryDev}
                        nameFilterUI={nameFilter}
                    />
                ))}
            </ul>
        </div>
    )
}