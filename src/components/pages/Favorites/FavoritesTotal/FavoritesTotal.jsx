import { ButtonWhite } from "../../../ButtonWhite/ButtonWhite";
import { ButtonYellow } from "../../../ButtonYellow/ButtonYellow";
import styles from "./FavoritesTotal.module.css";

export const FavoritesTotal = () => {
  return (
    <aside className={styles.favoritesTotal}>
      <ButtonYellow>Перейти до оформлення</ButtonYellow>
      <ButtonWhite>Очистити кошик</ButtonWhite>
    </aside>
  );
};
