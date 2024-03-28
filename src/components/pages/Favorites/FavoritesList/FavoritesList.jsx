import stylesCartList from "../../Cart/CartList/CartList.module.css";
import {FavoritesItem} from "../FavoritesItem/FavoritesItem";

export const FavoritesList = ({productsList}) => {
    const productsListToComponent = productsList.map(prod => <FavoritesItem product={prod.boardGame} prodIdFromRequest={prod.id} key={prod.id}/>)
    return (
        <ul className={stylesCartList.cartList}>
            {productsListToComponent}
        </ul>
    )
}
