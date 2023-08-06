import { FilterContainer } from "./FilterContainer/FilterContainer";
import { categories } from "./categories";
import styles from "./Filters.module.css";

export const Filters = () => {

    const returnJSXListCategories = (stubCategories) => {
        const listCategories = []
        
        for (let name in stubCategories) {
            listCategories.push(
                <FilterContainer key={name} category={stubCategories[name]} nameCategoryDev={name} />
            )
        }

        return listCategories
    }

    return (
        <div className={styles.filtersContainer}>
            {returnJSXListCategories(categories)}
        </div>
    )
}