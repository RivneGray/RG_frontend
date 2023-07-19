import { useDispatch } from "react-redux"
import { deleteFilter, selectFilter } from "../../../redux/slices/filtersSlice";
import { useState } from 'react';

export const FilterItem = (props) => {
    const [isChecked, setIsChecked] = useState(false);

    const dispatch = useDispatch();

    const filterHandler = () => {
        if (isChecked) {
            dispatch(deleteFilter(props));
            setIsChecked(false);
            return
        }

        dispatch(selectFilter(props));
        setIsChecked(true);
    }

    return (
        <div>
            <input type="checkbox" onChange={filterHandler}/>
            <span>{props.nameFilter}</span>
        </div>
    )
}