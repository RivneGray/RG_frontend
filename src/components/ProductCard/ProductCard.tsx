import { ButtonYellow } from "../ButtonYellow/ButtonYellow";
import styles from "./ProductCard.module.css";
import picture from "./productImage.png";
import bookmarc from "../../icons/bookmark.svg";
import { FC } from "react";
import { Hr } from "../Hr/Hr";

type Props = {
  productName: string;
  productPrice: number;
  productQuantityInStock: number;
  productImageURL: string;
}

export const ProductCard: FC<Props> = ({
  productName,
  productPrice,
  productQuantityInStock,
  productImageURL,
}) => {
  console.log(
    productName,
    productPrice,
    productQuantityInStock,
    productImageURL
  );

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
        <Hr />
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
