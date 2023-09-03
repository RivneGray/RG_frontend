import { ButtonWhite } from "../../../ButtonWhite/ButtonWhite";
import { ButtonYellow } from "../../../ButtonYellow/ButtonYellow";
import styles from "./FavoritesTotal.module.css";

export const FavoritesTotal = () => {
  return (
    <aside className={styles.favoritesTotal}>
      <ButtonYellow>Купить все товары</ButtonYellow>
      <ButtonWhite>Очистити обрані</ButtonWhite>
    </aside>
  );
};
