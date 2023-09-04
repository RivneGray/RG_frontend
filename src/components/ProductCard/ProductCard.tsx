import { ButtonYellow } from "../ButtonYellow/ButtonYellow";
import styles from "./ProductCard.module.css";
// import picture from "./productImage.png";
import bookmarcIcon from "../../icons/bookmark.svg";
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
  productImageURL,
}) => {

  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img src={productImageURL} alt="" />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.containerName}>
          <p className={styles.name}>{productName}</p>
          {/* <p className={styles.nameEng}>Catan</p> */}
        </div>
        <Hr />
        <div className={styles.containerPrice}>
          <h2>{productPrice} ₴</h2>
          <img src={bookmarcIcon} alt="" />
        </div>
        <div className={styles.containerButton}>
          <ButtonYellow>В кошик</ButtonYellow>
        </div>
      </div>
    </div>
  );
};
