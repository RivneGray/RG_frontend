/* eslint-disable indent */
import { useSelector } from 'react-redux';
import { ButtonWhite } from '../../../ButtonWhite/ButtonWhite';
import { ButtonYellow } from '../../../ButtonYellow/ButtonYellow';
import styles from './CartTotal.module.css';
import { getTokenSelector } from '../../../../redux/slices/userSlice';
import { useDispatch } from 'react-redux';
import {
  clearCart,
  getShoppingCartSelector,
} from '../../../../redux/slices/cartSlice';
import { shoppingCartApi } from '../../../../api/shoppingCartAPI';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getQueryKeyGetCart } from '../../../../utils/helpers/getQueryKeys';
import { useNavigate } from 'react-router-dom';

export const CartTotal = ({ products }) => {
  const client = useQueryClient();
  const dispatch = useDispatch();
  const token = useSelector(getTokenSelector);
  const navigate = useNavigate();

  let finalPriceCart = 0;
  let finalCountCart = 0;
  const Products = useSelector(getShoppingCartSelector);

  Products.forEach((product) => {
    finalPriceCart += product.productPrice * product.quantity;
    finalCountCart += product.quantity;
  });

  const {
    mutateAsync: clearCartWithToken,
    isError,
    error,
  } = useMutation({
    mutationFn: () => shoppingCartApi.clearCart(token),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: getQueryKeyGetCart() });
    },
  });

  const clearCartWithoutToken = () => {
    dispatch(clearCart());
  };

  return (
    <aside className={styles.cartTotal}>
      <section className={styles.orderingSection}>
        <h2 className={styles.countCartTitle}>
          В кошику <span>Товарів - {finalCountCart}</span>
        </h2>
        <h2 className={styles.priceCartTitle}>
          {finalPriceCart}
          <span>₴</span>
        </h2>
        <ButtonYellow onClickHandler={() => navigate('/product-order/')}>
          Перейти до оформлення
        </ButtonYellow>
      </section>
      <ButtonWhite
        onClickHandler={
          token
            ? async () => {
                await clearCartWithToken();
                dispatch(clearCart());
              }
            : clearCartWithoutToken
        }
      >
        Очистити кошик
      </ButtonWhite>

      {isError && <p className='error'>{error.message}</p>}
    </aside>
  );
};
