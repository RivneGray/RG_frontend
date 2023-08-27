import styles from "./Cart.module.css";
import { CartList } from "./CartList/CartList";

export const Cart = function() {
    return (
        <section className={styles.cartSection}>
            <h1>КОШИК</h1>
            <CartList />
        </section>
    )
}