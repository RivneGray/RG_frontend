import { Link } from 'react-router-dom';
import styles from './ProductOrder.module.css';
import { useSelector } from 'react-redux';
import { getShoppingCartSelector } from '../../../redux/slices/cartSlice';

export const ProductOrder = () => {
  const cart = useSelector(getShoppingCartSelector);

  return (
    <div className={styles.wrapper}>
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
        <div className='order-item'>Item 1</div>
        <div className='order-item'>Item 2</div>
      </div>
      <div className='obtain-method'>
        <h2>3. Спосіб отримання</h2>
        <div>Самовивіз</div>
        <div>Доставка</div>
        <div className='field'>Address</div>
      </div>
      <div className='confirm-payment'>
        <h2>4. Підтвердження та оплата</h2>
        <div>Готівкою або карткою при отриманні</div>
        <div>Банківською картою онлайн</div>
      </div>
      <div className='total'>
        <div>quantity: 2</div>
        <div className='result-sum'>ИТОГО: 3 500 ₴</div>
      </div>
      <div className='order-btn'>
        <button>Оформити замовлення</button>
      </div>
      <div>
        {/* TODO: после появления нужных страниц обновить ссылки (to param)*/}
        Натискаючи кнопку "Оформити замовлення" , Я даю свою згоду на збір і
        обробку моїх персональних даних відповідно до{' '}
        <Link to='/'> Політики</Link> і приймаю умови{' '}
        <Link to='/'> Публічної</Link> оферти
      </div>
    </div>
  );
};
