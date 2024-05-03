import { Link } from 'react-router-dom';
import styles from './ProductOrder.module.css';
import { useSelector } from 'react-redux';
import { getShoppingCartSelector } from '../../../redux/slices/cartSlice';
import { ProductObtaining } from './ProductObtaining/ProductObtaining';
import { ProductPayment } from './ProductPayment/ProductPayment';
import { OrderList } from './OrderList/OrderList';
import { useEffect, useState } from 'react';
import { shoppingCartApi } from '../../../api/shoppingCartAPI';
import { getTokenSelector } from '../../../redux/slices/userSlice';
import { boardgameApi } from '../../../api/boardgameAPI';
import { ButtonWhite } from '../../ButtonWhite/ButtonWhite';
import { ButtonYellow } from '../../ButtonYellow/ButtonYellow';
import { OrderTotalPrice } from './OrderTotalPrice/OrderTotalPrice';
import { Loader } from '../../Loader/Loader';

export const ProductOrder = () => {
  const [gameBoardsByCart, setGameBoardsByCart] = useState(null);
  const [serverCart, setServerCart] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const localCart = useSelector(getShoppingCartSelector);

  const token = useSelector(getTokenSelector);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      setGameBoardsByCart(
        await boardgameApi.getBoardgamesByIds(localCart.map((x) => x.id))
      );
      setServerCart(await shoppingCartApi.getCart(token));
      setIsLoading(false);
    }
    fetchData();
  }, [localCart, token]);

  return (
    <div className={styles.wrapper}>
      <form>
        <h1>Оформлення замовлення</h1>
        <div>
          <h2>1. Дані одержувача</h2>
          <div className={styles.user_data}>
            <input type='text' placeholder="Ім'я *" required />
            <input type='text' placeholder='Прізвище *' required />
            <input type='tel' placeholder='Телефон *' required />
            <input type='email' placeholder='Електронна пошта *' required />
          </div>
        </div>

        <div className='order-data'>
          <h2>2. Товар</h2>
          {isLoading ? (
            <Loader />
          ) : localCart.length && serverCart?.length ? (
            <OrderList
              gameBoardsByCart={gameBoardsByCart}
              localCart={localCart}
              serverCart={serverCart}
            />
          ) : (
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
          )}
        </div>

        <div className='obtain-method'>
          <h2>3. Спосіб отримання</h2>
          <ProductObtaining />
        </div>
        <div className='confirm-payment'>
          <h2>4. Підтвердження та оплата</h2>
          <ProductPayment />
        </div>
        <div className='total'>
          <OrderTotalPrice localCart={localCart} />
        </div>
        <div className={styles.submit_btn}>
          <ButtonYellow
            type={'submit'}
            disabled={!(localCart.length && serverCart?.length)}
          >
            Оформити замовлення
          </ButtonYellow>
        </div>
        <div className={styles.payment_info}>
          {/* TODO: после появления нужных страниц обновить ссылки (to param)*/}
          Натискаючи кнопку "Оформити замовлення" , Я даю свою згоду на збір і
          обробку моїх персональних даних відповідно до{' '}
          <Link to='/privacy-policy'> Політика конфіденційності</Link> і приймаю
          умови <Link to='/user-agreement'> Угоды користувача</Link>
        </div>
      </form>
    </div>
  );
};
