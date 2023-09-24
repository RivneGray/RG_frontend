import { CartItem } from "../CartItem/CartItem";
import styles from "./CartList.module.css";

export const CartList = ({ products }) => {
  return (
    <ul className={styles.cartList}>
      {products.map((product) => (
        <CartItem product={product} key={product.id} />
      ))}
    </ul>
  );
};
