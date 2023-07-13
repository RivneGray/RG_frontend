import { ButtonYellow } from "../ButtonYellow/ButtonYellow";
import styles from "./ProductCard.module.css";
import picture from "./productImage.png";
import bookmarc from "./bookmark.svg";
import { FC } from "react";

export const ProductCard: FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img src={picture} alt="" />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.containerName}>
          <p className={styles.name}>Колонизаторы</p>
          <p className={styles.nameEng}>Catan</p>
        </div>
        <hr className={styles.hr} />
        <div className={styles.containerPrice}>
          <h2>1400 ₴</h2>
          <img src={bookmarc} alt="" />
        </div>
        <div className={styles.containerButton}>
          <ButtonYellow>В кошик</ButtonYellow>
        </div>
      </div>
    </div>
  );
};
