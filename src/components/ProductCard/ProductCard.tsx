import styles from './ProductCard.module.css';
import bookmarcIcon from '../../icons/bookmark.svg';
import bookmarcIconFill from '../../icons/bookmarkFill.svg';
import { FC } from 'react';
import { Hr } from '../Hr/Hr';
import {NavLink} from "react-router-dom";
import AddToFavoritesComponent from "../../utils/helpers/AddToFavoritesComponent";
import AddToCartComponent from "../../utils/helpers/AddToCartComponent";

type ItemCartServer = {
  productInCartId: number;
  productId: number;
  quantity: number;
};

type ItemCartClient = {
  id: number;
  count: number;
};

type ProductType = {
  productName: string;
  productNameInEnglish: string;
  productPrice: number;
  productQuantityInStock: number;
  productImageURL: string;
  id: number;
};

type Props = ProductType & {
  cartServer: Array<ItemCartServer>;
};

export const ProductCard: FC<Props> = ({
  productName,
  productNameInEnglish,
  productPrice,
  productImageURL,
  productQuantityInStock,
  id,
  cartServer,
}) => {
  return (
      <div className={styles.card}>
        <NavLink to={`/product-page/${id}`} className={styles.cardImg}>
          <img src={productImageURL} alt=""/>
        </NavLink>
        <div className={styles.cardBody}>
          <div className={styles.containerName}>
            <p className={styles.name}>{productName}</p>
            {/* <p className={styles.nameEng}>Catan</p> */}
          </div>
          <Hr/>
          <div className={styles.containerPrice}>
            <h2>{productPrice} ₴</h2>
            <AddToFavoritesComponent
                productName={productName}
                productNameInEnglish={productNameInEnglish}
                productPrice={productPrice}
                productQuantityInStock={productQuantityInStock}
                productImageURLs={[productImageURL]}
                id={id}
                childrenWhenTrue={<img src={bookmarcIconFill} alt=""/>}
                childrenWhenFalse={<img src={bookmarcIcon} alt=""/>}/>
          </div>
          <div className={styles.containerButton}>
            <AddToCartComponent id={id} cartServer={cartServer} productImageURL={productImageURL} productName={productName} productPrice={productPrice}/>
          </div>
        </div>
      </div>
  );
};
