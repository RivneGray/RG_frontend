import React, {FC} from "react";
import {favoritesApi} from "../../api/favoritesApi";
import {
    addItemToFavorites,
    getFavoriteItemIdById,
    isProductInFavorites,
    removeItemFromFavorites
} from "../../redux/slices/favoritesSlice";
import {useDispatch, useSelector} from "react-redux";
import {getTokenSelector} from "../../redux/slices/userSlice";

type PropsType = {
    productName: string;
    productNameInEnglish: string;
    productPrice: number;
    productQuantityInStock: number;
    productImageURLs: string [];
    id: number;
    childrenWhenTrue: JSX.Element;
    childrenWhenFalse: JSX.Element;
    styles?: React.CSSProperties;
}

const AddToFavoritesComponent: FC<PropsType> = ({
                                                    childrenWhenTrue,
                                                    childrenWhenFalse,
                                                    id,
                                                    productImageURLs,
                                                    productQuantityInStock,
                                                    productPrice,
                                                    productName,
                                                    productNameInEnglish,
                                                    styles
                                                }) => {
    const dispatch = useDispatch()
    const token: string = useSelector(getTokenSelector)
    const isProdInFavorites: boolean = useSelector(isProductInFavorites(id))
    const productInFavoritesId: number = useSelector(getFavoriteItemIdById(id))
    const toggleProductToFavorite = async () => {
        if (!isProdInFavorites) {
            if (token !== '') {
                const res = await favoritesApi.addFavoritesItemById(id, token)
                dispatch(addItemToFavorites({
                    id: res.id,
                    boardGame: {
                        productPrice: productPrice,
                        productName: productName,
                        productImageURL: productImageURLs[0],
                        id: id,
                        productNameInEnglish: productNameInEnglish,
                        productQuantityInStock: productQuantityInStock
                    }
                }))
            } else {
                dispatch(addItemToFavorites({
                    boardGame: {
                        productPrice: productPrice,
                        productName: productName,
                        productImageURL: productImageURLs[0],
                        id: id,
                        productNameInEnglish: productNameInEnglish,
                        productQuantityInStock: productQuantityInStock
                    }
                }))
            }
        } else {
            if (token !== '') await favoritesApi.deleteFavoritesItemById(productInFavoritesId, token)
            dispatch(removeItemFromFavorites(productInFavoritesId))
        }
    }
    return (
        <div style={styles} onClick={toggleProductToFavorite}>
            {isProdInFavorites ? childrenWhenTrue : childrenWhenFalse}
        </div>
    );
};

export default AddToFavoritesComponent;
