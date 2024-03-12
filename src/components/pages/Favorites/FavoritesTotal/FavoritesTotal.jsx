import { ButtonWhite } from "../../../ButtonWhite/ButtonWhite";
import { ButtonYellow } from "../../../ButtonYellow/ButtonYellow";
import styles from "./FavoritesTotal.module.css";
import { useDispatch } from "react-redux";
import { removeAllItemsFromFavorites } from "../../../../redux/slices/favoritesSlice";

export const FavoritesTotal = () => {
    const dispatch = useDispatch()
    const removeAllFavorites = () => dispatch(removeAllItemsFromFavorites())
    return (
        <aside className={styles.favoritesTotal}>
            <ButtonYellow>Купить все товары</ButtonYellow>
            <ButtonWhite onClickHandler={removeAllFavorites}>Очистити обрані</ButtonWhite>
        </aside>
    );
};
