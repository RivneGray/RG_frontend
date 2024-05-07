import {useState, useEffect} from "react";
import {FC} from "react";
import {useSelector} from "react-redux";
import {
    addProductToCart,
    getShoppingCartSelector,
    removeProductFromCart,
} from "../../redux/slices/cartSlice";
import {useDispatch} from "react-redux";
import {getTokenSelector} from "../../redux/slices/userSlice";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {shoppingCartApi} from "../../api/shoppingCartAPI";
import {getQueryKeyGetCart} from "./getQueryKeys";
import {ButtonWhite} from "../../components/ButtonWhite/ButtonWhite";
import {ButtonYellow} from "../../components/ButtonYellow/ButtonYellow";

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
    id: number;
    productName: string;
    productPrice: number;
    productImageURL: string;
}

type Props = ProductType & {
    cartServer: Array<ItemCartServer>;
};

export const AddToCartComponent: FC<Props> = ({
                                                  id,
                                                  cartServer,
                                                  productName,
                                                  productPrice,
                                                  productImageURL
                                              }) => {
    const dispatch = useDispatch();
    const client = useQueryClient();
    const token = useSelector(getTokenSelector);
    const cart = useSelector(getShoppingCartSelector);
    const productAddedToCartClient: ItemCartClient | undefined = cart.find(
        (product: ItemCartClient) => product.id === id
    );
    const productAddedToCartServer: ItemCartServer | undefined = cartServer?.find(
        (product: ItemCartServer) => product.productId === id
    );
    const [isAddedToCart, setIsAddedToCart] = useState(() =>
        token ? !!productAddedToCartServer : !!productAddedToCartClient
    );
    const {mutate: mutateAddToCart, isError: isErrorAddToCart} = useMutation({
        mutationFn: () => shoppingCartApi.addProductToCart(id, token),
        onSuccess: () =>
            client.invalidateQueries({queryKey: getQueryKeyGetCart()}),
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

    const addToCartHandler = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        if (token) {
            await mutateAddToCart();
        }
        setIsAddedToCart(true);
        dispatch(
            addProductToCart({
                productName,
                productPrice,
                productImageURL,
                id,
            })
        );
    };

    const removeFromCartHandler = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        if (token) {
            await mutateRemoveFromCart();
        }
        setIsAddedToCart(false);
        dispatch(removeProductFromCart(id));
    };

    useEffect(() => {
        if (isErrorAddToCart) setIsAddedToCart(false);
        if (isErrorRemoveFromCart) setIsAddedToCart(true);
    }, [isErrorAddToCart, isErrorRemoveFromCart]);

    return (
        <>
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
        </>
    );
};

export default AddToCartComponent
