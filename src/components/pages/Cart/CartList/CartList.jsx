import { CartItem } from "../CartItem/CartItem";
import styles from "./CartList.module.css";

export const CartList = () => {
    return (
        <ul className={styles.cartList}>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />

        </ul>
    )
}