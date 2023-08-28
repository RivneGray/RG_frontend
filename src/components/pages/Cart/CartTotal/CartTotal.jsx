import { ButtonWhite } from "../../../ButtonWhite/ButtonWhite";
import { ButtonYellow } from "../../../ButtonYellow/ButtonYellow";
import styles from "./CartTotal.module.css";

export const CartTotal = () => {
    return (
        <aside className={styles.cartTotal}>
            <section className={styles.orderingSection}>
                <h2 className={styles.countCartTitle}>В кошику <span>2 товара</span></h2 >
                <h2 className={styles.priceCartTitle}>3 500<span>₴</span></h2>
                <ButtonYellow>Перейти до оформлення</ButtonYellow>
            </section>
            <ButtonWhite>Очистити кошик</ButtonWhite>
        </aside>
    )
}