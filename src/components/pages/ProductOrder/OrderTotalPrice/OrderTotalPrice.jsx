import { useEffect, useState } from 'react';
import styles from './OrderTotalPrice.module.css';

export function OrderTotalPrice({ localCart }) {
  const [commonQuantity, setCommonQuantity] = useState(0);
  const [commonPrice, setCommonPrice] = useState(0);

  console.log(localCart);

  useEffect(() => {
    setCommonQuantity(
      localCart.length
        ? localCart.reduce((accumulator, x) => accumulator + x.quantity, 0)
        : 0
    );

    setCommonPrice(
      localCart.reduce((total, product) => {
        return (total += product.quantity * product.productPrice);
      }, 0)
    );
  }, [localCart]);

  function getWordForm(count) {
    let remainder10 = count % 10;
    let remainder100 = count % 100;

    if (remainder10 === 1 && remainder100 !== 11) {
      return 'товар';
    } else if (
      remainder10 >= 2 &&
      remainder10 <= 4 &&
      (remainder100 < 10 || remainder100 >= 20)
    ) {
      return 'товари';
    } else {
      return 'товарів';
    }
  }

  return (
    <div className={styles.total_price_container}>
      <div className={styles.total_quantity}>
        {commonQuantity} {getWordForm(commonQuantity)}
      </div>
      <div className={styles.total_price}>
        ИТОГО: {commonPrice} <span>₴</span>{' '}
      </div>
    </div>
  );
}
