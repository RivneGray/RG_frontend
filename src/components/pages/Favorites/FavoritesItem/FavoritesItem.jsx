import stylesCartItem from "../../Cart/CartItem/CartItem.module.css";
import {ReactComponent as TrashIcon} from "../../../../icons/trash.svg";
import {ButtonWhite} from "../../../ButtonWhite/ButtonWhite";
import styles from "./FavoritesItem.module.css";
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {removeItemFromFavorites} from "../../../../redux/slices/favoritesSlice";
import {favoritesApi} from "../../../../api/favoritesApi";
import {getTokenSelector} from "../../../../redux/slices/userSlice";
import {useState} from "react";
import {addProductToCart, removeProductFromCart} from "../../../../redux/slices/cartSlice";
import {ButtonYellow} from "../../../ButtonYellow/ButtonYellow";
import {shoppingCartApi} from "../../../../api/shoppingCartAPI";

export const FavoritesItem = ({product, prodIdFromRequest}) => {
    const dispatch = useDispatch()
    const token = useSelector(getTokenSelector);
    const [isProductInCart, setIsProductInCart] = useState(false)
    const removeItemOnClick = async () => {
        dispatch(removeItemFromFavorites(prodIdFromRequest))
        if (token !== '') await favoritesApi.deleteFavoritesItemById(prodIdFromRequest, token)
    }
    const addItemToCart = async () => {
        dispatch(addProductToCart(product.id))
        setIsProductInCart(true)
        if (token !== '') await shoppingCartApi.addProductToCart(product.id, token)
    }
    const removeItemFromCart = async () => {
        dispatch(removeProductFromCart(product.id))
        setIsProductInCart(false)
        if (token !== '') await shoppingCartApi.deleteProductFromCart(product.id, token)
    }
    return (
        <li className={stylesCartItem.cartItemLi}>
            <div className={stylesCartItem.containerLeft}>
                <figure className={stylesCartItem.containerImg}>
                    <img src={product.productImageURL} alt=""/>
                </figure>
                <div className={stylesCartItem.title}>
                    <h3>{product.productNameInEnglish ? `${product.productNameInEnglish}.` : ''}{product.productName}</h3>
                    <span>Код товара {product.id}</span>
                </div>
            </div>
            <div
                className={classNames(
                    stylesCartItem.containerRight,
                    styles.containerRight
                )}
            >
                <h3>
                    {product.productPrice} <span>₴</span>
                </h3>
                <div className={styles.button}>
                    {isProductInCart ?
                        <ButtonWhite onClickHandler={removeItemFromCart} ownStyles={{}}>
                            В кошику
                        </ButtonWhite>
                        :
                        <ButtonYellow
                            onClickHandler={addItemToCart}
                            type="button"
                            disabled={null}
                        >
                            В кошик
                        </ButtonYellow>}
                </div>
                <div onClick={removeItemOnClick}>
                    <TrashIcon className={stylesCartItem.icon}/>
                </div>
            </div>
        </li>
    );
};
