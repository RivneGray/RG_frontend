import styles from './OrderItem.module.css';
import { ReactComponent as TrashIcon } from '../../../../icons/trash.svg';
import { Hr } from '../../../Hr/Hr';
import { useCallback } from 'react';
import { shoppingCartApi } from '../../../../api/shoppingCartAPI';
import { useDispatch } from 'react-redux';
import {
  counterDecrementProduct,
  counterIncrementProduct,
  removeProductFromCart,
} from '../../../../redux/slices/cartSlice';
import { useSelector } from 'react-redux';
import { getTokenSelector } from '../../../../redux/slices/userSlice';

export const OrderItem = ({ product, productInCartId, productCode }) => {
  const token = useSelector(getTokenSelector);
  const dispatch = useDispatch();

  const handleIncrementQuantity = useCallback(
    async (ev) => {
      ev.preventDefault();
      if (product.quantity < 999) {
        if (token) {
          await shoppingCartApi.changeProductQuantity(
            productInCartId,
            product.quantity + 1,
            token
          );
        }
        dispatch(counterIncrementProduct(product?.id));
      }
    },
    [dispatch, productInCartId, product.quantity, token, product.id]
  );

  const handleDecrementQuantity = useCallback(
    async (ev) => {
      ev.preventDefault();
      if (product.quantity > 1) {
        if (token !== '') {
          await shoppingCartApi.changeProductQuantity(
            productInCartId,
            product.quantity - 1,
            token
          );
        }
        dispatch(counterDecrementProduct(product?.id));
      }
    },
    [dispatch, productInCartId, product.quantity, token, product.id]
  );

  const handleDeleteItem = useCallback(
    async (ev) => {
      ev.preventDefault();
      if (token !== '') {
        await shoppingCartApi.deleteProductFromCart(productInCartId, token);
      }

      dispatch(removeProductFromCart(product?.id));
    },
    [dispatch, productInCartId, product.id, token]
  );

  return (
    <li className={styles.cartItemLi}>
      <div className={styles.containerLeft}>
        <figure className={styles.containerImg}>
          <img src={product.productImageURL} alt='' />
        </figure>
        <div className={styles.title}>
          <h3>{product.productName}</h3>
          <span>{`Код товара ${productCode}`}</span>
        </div>
      </div>
      <div className={styles.containerRight}>
        <div className={styles.containerCounter}>
          <button onClick={handleDecrementQuantity}>-</button>
          <div className={styles.containerCounterNumber}>
            <span>{product?.quantity} шт</span>
            <Hr color='#333333' />
          </div>
          <button onClick={handleIncrementQuantity}>+</button>
        </div>
        <h3>
          {product.productPrice} <span>₴</span>
        </h3>
        <div className={styles.containerButtons}>
          <TrashIcon
            className={styles.icon}
            title='видалити з кошика'
            onClick={handleDeleteItem}
          />
        </div>
      </div>
    </li>
  );
};
