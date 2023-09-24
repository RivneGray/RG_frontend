import { withQuery } from "../../HOCs/withQuery";
import styles from "./Cart.module.css";
import { CartList } from "./CartList/CartList";
import { CartTotal } from "./CartTotal/CartTotal";

export const CartInner = withQuery(({data: products}) => {
  return (
    <section className={styles.cartSection}>
      <h1>КОШИК</h1>
      <CartList products={products}/>
      <CartTotal />
    </section>
  );
});
