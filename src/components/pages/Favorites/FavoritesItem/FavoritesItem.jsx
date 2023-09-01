import stylesCartItem from "../../Cart/CartItem/CartItem.module.css";
import img from "./productImage.png";
import { ReactComponent as TrashIcon } from "../../../../icons/trash.svg";
import { ButtonWhite } from "../../../ButtonWhite/ButtonWhite";
import { ReactComponent as CartIcon } from "../../../../icons/cartLightStroke.svg";
import styles from "./FavoritesItem.module.css";
import classNames from "classnames";

export const FavoritesItem = () => {
  return (
    <li className={stylesCartItem.cartItemLi}>
      <div className={stylesCartItem.containerLeft}>
        <figure className={stylesCartItem.containerImg}>
          <img src={img} alt="" />
        </figure>
        <div className={stylesCartItem.title}>
          <h3>Catan. Колонизаторы</h3>
          <span>Код товара 141201</span>
        </div>
      </div>
      <div
        className={classNames(
          stylesCartItem.containerRight,
          styles.containerRight
        )}
      >
        <h3>
          {`1 400`} <span>₴</span>
        </h3>
        <div className={styles.button}>
          <ButtonWhite>
            <CartIcon /> В кошик
          </ButtonWhite>
        </div>
        <div>
          <TrashIcon className={stylesCartItem.icon} />
        </div>
      </div>
    </li>
  );
};
