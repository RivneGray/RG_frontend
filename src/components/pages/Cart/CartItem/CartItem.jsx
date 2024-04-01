import styles from './CartItem.module.css';
import { ReactComponent as TrashIcon } from '../../../../icons/trash.svg';
//import { ReactComponent as FavoritesIcon } from '../../../../icons/bookmark.svg';
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
import {
  addItemToFavorites,
  getFavoriteItemIdById,
  isProductInFavorites,
  removeItemFromFavorites,
} from '../../../../redux/slices/favoritesSlice';
import { favoritesApi } from '../../../../api/favoritesApi';

import bookmarkIcon from '../../../../icons/bookmark.svg';
import bookmarkIconFill from '../../../../icons/bookmarkFill.svg';

export const CartItem = ({ product }) => {
  const {
    productPrice,
    productName,
    productImageURL,
    id,
    productNameInEnglish,
    productQuantityInStock,
  } = product;

  const dispatch = useDispatch();
  const token = useSelector(getTokenSelector);

  const isProdInFavorites = useSelector(isProductInFavorites(id));
  const productInFavoritesId = useSelector(getFavoriteItemIdById(id));

  const handleIncrementQuantity = useCallback(async () => {
    if (
      product.quantity < 999 &&
      (
        await shoppingCartApi.changeProductQuantity(
          product?.productInCartId,
          product.quantity + 1,
          token
        )
      ).status === 200
    ) {
      dispatch(counterIncrementProduct(product?.id));
    }
  }, [dispatch, product?.productInCartId, product.quantity, token, product.id]);

  const handleDecrementQuantity = useCallback(async () => {
    if (product.quantity > 1) {
      await shoppingCartApi.changeProductQuantity(
        product?.productInCartId,
        product.quantity - 1,
        token
      );
      dispatch(counterDecrementProduct(product?.id));
    }
  }, [dispatch, product?.productInCartId, product.quantity, token, product.id]);

  const handleDeleteItem = useCallback(async () => {
    if (
      (
        await shoppingCartApi.deleteProductFromCart(
          product?.productInCartId,
          token
        )
      ).status === 200
    ) {
      dispatch(removeProductFromCart(product?.id));
    }
  }, [dispatch, product.productInCartId, product.id, token]);

  const toggleProductToFavorite = async () => {
    if (!isProdInFavorites) {
      if (token !== '') {
        const res = await favoritesApi.addFavoritesItemById(id, token);
        dispatch(
          addItemToFavorites({
            id: res.id,
            boardGame: {
              productPrice,
              productName,
              productImageURL,
              id,
              productNameInEnglish,
              productQuantityInStock,
            },
          })
        );
      } else {
        dispatch(
          addItemToFavorites({
            boardGame: {
              productPrice,
              productName,
              productImageURL,
              id,
              productNameInEnglish,
              productQuantityInStock,
            },
          })
        );
      }
    } else {
      if (token !== '')
        await favoritesApi.deleteFavoritesItemById(productInFavoritesId, token);
      dispatch(removeItemFromFavorites(productInFavoritesId));
    }
  };

  return (
    <li className={styles.cartItemLi}>
      <div className={styles.containerLeft}>
        <figure className={styles.containerImg}>
          <img src={product.productImageURL} alt='' />
        </figure>
        <div className={styles.title}>
          <h3>{product.productName}</h3>
          <span>{`Код товара ${product.productCode}`}</span>
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
          <div
            onClick={toggleProductToFavorite}
            className={styles.icon}
            title='додати в обране'
          >
            {isProdInFavorites ? (
              <img src={bookmarkIconFill} alt='' />
            ) : (
              <img src={bookmarkIcon} alt='' />
            )}
          </div>

          {/* <FavoritesIcon
            className={styles.icon}
            title='додати в обране'
            onClick={toggleProductToFavorite}
          /> */}
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
