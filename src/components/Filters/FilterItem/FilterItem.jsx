import { useDispatch } from "react-redux"
import { deleteFilter, selectFilter } from "../../../redux/slices/filtersSlice";
import { useState } from 'react';
import styles from './FilterItem.module.css';

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
        <li>
            <input type="checkbox" className={styles.input} id={props.nameFilterUI} onChange={filterHandler}/>
            <label className={styles.label} htmlFor={props.nameFilterUI}>{props.nameFilterUI}</label>
        </li>
    )
}