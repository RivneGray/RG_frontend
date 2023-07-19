import { FilterItem } from "./FilterItem/FilterItem"
import { categories } from "./categories"

export const Filters = () => {

    const returnJSXListCategories = (stubCategories) => {
        const listCategories = []
        
        for (let name in stubCategories) {
            listCategories.push(
            <div key={name}>
                {stubCategories[name].nameCategory}
                {stubCategories[name].namesFilters.map(nameFilter => (
                    <FilterItem 
                        key={nameFilter}
                        nameCategory={name}
                        nameFilter={nameFilter}
                    />
                ))}
            </div>
            )
        }

        return listCategories
    }

    return (
        <div>
            <h1>Фильтры</h1>
            {returnJSXListCategories(categories)}
        </div>
    )
}