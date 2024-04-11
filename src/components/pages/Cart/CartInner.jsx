import { Link } from 'react-router-dom';
import { withQuery } from '../../HOCs/withQuery';
import styles from './Cart.module.css';
import { CartList } from './CartList/CartList';
import { CartTotal } from './CartTotal/CartTotal';
import { ButtonWhite } from '../../ButtonWhite/ButtonWhite';
import { ButtonYellow } from '../../ButtonYellow/ButtonYellow';
import { useSelector } from 'react-redux';
import { getShoppingCartSelector } from '../../../redux/slices/cartSlice';

export const CartInner = withQuery(({ data: products }) => {
  const productsFromLocalCart = useSelector(getShoppingCartSelector);

  const addedProducts = productsFromLocalCart.map((item, index) => ({
    productInCartId: products[index].productInCartId,
    productCode: products[index].productCode,
    productNameInEnglish: products[index].productNameInEnglish,
    productQuantityInStock: products[index].productQuantityInStock,
    ...item,
  }));

  const jsxCart = () => {
    if (productsFromLocalCart.length)
      return (
        <>
          <CartList products={addedProducts} />
          <CartTotal products={addedProducts} />
        </>
      );
    return (
      <div className={styles.emptyCartContainer}>
        <h2>Кошик порожній</h2>
        <p className={styles.bodyEmptyCart}>
          Перегляньте пропозиції на
          <Link to='/'> головній сторінці</Link>, скористайтесь{' '}
          <Link to='/catalog'>каталогом</Link> або пошуком
        </p>
        <div className={styles.btnContainer}>
          <Link to='/'>
            <ButtonWhite>На головну</ButtonWhite>
          </Link>
          <Link to='/catalog'>
            <ButtonYellow>До каталогу</ButtonYellow>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <section className={styles.cartSection}>
      <h1>КОШИК</h1>
      {jsxCart()}
    </section>
  );
});
