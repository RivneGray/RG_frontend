import { ButtonYellow } from "../ButtonYellow/ButtonYellow";
import styles from "./ProductCard.module.css";
// import picture from "./productImage.png";
import bookmarcIcon from "../../icons/bookmark.svg";
import { FC } from "react";
import { Hr } from "../Hr/Hr";
import { useSelector } from "react-redux";
import {
  addProductToCart,
  getShoppingCartSelector,
  removeProductFromCart,
} from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { ButtonWhite } from "../ButtonWhite/ButtonWhite";

type Props = {
  productName: string;
  productPrice: number;
  productQuantityInStock: number;
  productImageURL: string;
  id: number;
};

type BoardgameFromCart = {
  id: number;
  count: number;
};

export const ProductCard: FC<Props> = ({
  productName,
  productPrice,
  productImageURL,
  id,
}) => {
  const dispatch = useDispatch();

  const cart = useSelector(getShoppingCartSelector);
  const productAddedToCart: BoardgameFromCart | undefined = cart.find(
    (product: BoardgameFromCart) => product.id === id
  );

  const addToCartHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (productAddedToCart) dispatch(removeProductFromCart(id));
    else dispatch(addProductToCart(id));
  };

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
          {productAddedToCart ? (
            <ButtonWhite onClickHandler={addToCartHandler} ownStyles={{}}>
              В кошику
            </ButtonWhite>
          ) : (
            <ButtonYellow onClickHandler={addToCartHandler} type='button'>
              В кошик
            </ButtonYellow>
          )}
        </div>
      </div>
    </div>
  );
};
