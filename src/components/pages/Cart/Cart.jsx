import styles from "./Cart.module.css";
import { CartList } from "./CartList/CartList";
import { CartTotal } from "./CartTotal/CartTotal";

export const Cart = function() {
    return (
        <section className={styles.cartSection}>
            <h1>КОШИК</h1>
            <CartList />
            <CartTotal />
        </section>
    )
}