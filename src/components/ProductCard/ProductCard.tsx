import {ButtonYellow} from "../ButtonYellow/ButtonYellow";
import styles from "./ProductCard.module.css";
import {useState, useEffect} from "react";
import bookmarcIcon from "../../icons/bookmark.svg";
import bookmarcIconFill from "../../icons/bookmarkFill.svg";
import {FC} from "react";
import {Hr} from "../Hr/Hr";
import {useSelector} from "react-redux";
import {
    addProductToCart,
    getShoppingCartSelector,
    removeProductFromCart,
} from "../../redux/slices/cartSlice";
import {useDispatch} from "react-redux";
import {ButtonWhite} from "../ButtonWhite/ButtonWhite";
import {getTokenSelector} from "../../redux/slices/userSlice";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {shoppingCartApi} from "../../api/shoppingCartAPI";
import {getQueryKeyGetCart} from "../../utils/helpers/getQueryKeys";
import {
    addItemToFavorites, getFavoriteItemIdById,
    getFavoritesItemsSelector,
    removeItemFromFavorites
} from "../../redux/slices/favoritesSlice";
import {favoritesApi} from "../../api/favoritesApi";

type ItemCartServer = {
    productInCartId: number;
    productId: number;
    quantity: number;
};

type ItemCartClient = {
    id: number;
    count: number;
};

type ProductType = {
    productName: string;
    productNameInEnglish: string;
    productPrice: number;
    productQuantityInStock: number;
    productImageURL: string;
    id: number;
}

type Props = ProductType & {
    cartServer: Array<ItemCartServer>;
};

export const ProductCard: FC<Props> = ({
                                           productName,
                                           productNameInEnglish,
                                           productPrice,
                                           productImageURL,
                                           productQuantityInStock,
                                           id,
                                           cartServer,
                                       }) => {
    const dispatch = useDispatch();
    const client = useQueryClient();
    const token = useSelector(getTokenSelector);
    const cart = useSelector(getShoppingCartSelector);
    const favoritesList = useSelector(getFavoritesItemsSelector)
    const productInFavoritesId = useSelector(getFavoriteItemIdById(id))
    const productAddedToCartClient: ItemCartClient | undefined = cart.find(
        (product: ItemCartClient) => product.id === id
    );
    const productAddedToCartServer: ItemCartServer | undefined = cartServer?.find(
        (product: ItemCartServer) => product.productId === id
    );
    const [isAddedToCart, setIsAddedToCart] = useState(() =>
        token ? !!productAddedToCartServer : !!productAddedToCartClient
    );
    const [isAddedToFavorites, setIsAddedToFavorites] = useState(!!productInFavoritesId)
    const {mutate: mutateAddToCart, isError: isErrorAddToCart} = useMutation({
        mutationFn: () => shoppingCartApi.addProductToCart(id, token),
        onSuccess: () => {
            client.invalidateQueries({queryKey: getQueryKeyGetCart()});
        },
    });

    const {mutate: mutateRemoveFromCart, isError: isErrorRemoveFromCart} =
        useMutation({
            mutationFn: () =>
                shoppingCartApi.deleteProductFromCart(
                    productAddedToCartServer?.productInCartId,
                    token
                ),
            onSuccess: () => {
                client.invalidateQueries({queryKey: getQueryKeyGetCart()});
            },
        });

    const addToCartHandler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (token) {
            setIsAddedToCart(true);
            await mutateAddToCart();
        } else {
            dispatch(addProductToCart(id));
        }
    };

    const removeFromCartHandler = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        if (token) {
            setIsAddedToCart(false);
            await mutateRemoveFromCart();
        } else {
            dispatch(removeProductFromCart(id));
        }
    };

    useEffect(() => {
        if (isErrorAddToCart) setIsAddedToCart(false);
        if (isErrorRemoveFromCart) setIsAddedToCart(true);
    }, [isErrorAddToCart, isErrorRemoveFromCart]);

    const toggleProductToFavorite = async () => {
        const listWithoutItem = favoritesList.filter((item: any) => item.boardGame.id === id)
        if (listWithoutItem.length === 0) {
            setIsAddedToFavorites(true)
            dispatch(addItemToFavorites({
                productPrice,
                productName,
                productImageURL,
                id,
                productNameInEnglish,
                productQuantityInStock
            }))
            await favoritesApi.addFavoritesItemById(id, token)
        } else {
            setIsAddedToFavorites(false)
            dispatch(removeItemFromFavorites(id))
            await favoritesApi.deleteFavoritesItemById(productInFavoritesId, token)
        }
    }

    return (
        <div className={styles.card}>
            <div className={styles.cardImg}>
                <img src={productImageURL} alt=""/>
            </div>
            <div className={styles.cardBody}>
                <div className={styles.containerName}>
                    <p className={styles.name}>{productName}</p>
                    {/* <p className={styles.nameEng}>Catan</p> */}
                </div>
                <Hr/>
                <div className={styles.containerPrice}>
                    <h2>{productPrice} ₴</h2>
                    <div onClick={toggleProductToFavorite}>
                        {isAddedToFavorites ?
                            <img src={bookmarcIconFill} alt=""/>
                            :
                            <img src={bookmarcIcon} alt=""/>
                        }
                    </div>
                </div>
                <div className={styles.containerButton}>
                    {isAddedToCart ? (
                        <ButtonWhite onClickHandler={removeFromCartHandler} ownStyles={{}}>
                            В кошику
                        </ButtonWhite>
                    ) : (
                        <ButtonYellow
                            onClickHandler={addToCartHandler}
                            type="button"
                            disabled={null}
                        >
                            В кошик
                        </ButtonYellow>
                    )}
                </div>
            </div>
        </div>
    );
};
