import { useSelector } from "react-redux";
import { getTokenSelector } from "../../../redux/slices/userSlice";
import { useQuery } from "@tanstack/react-query";
import { boardgameApi } from "../../../api/boardgameAPI";
import {
  getQueryKeyBoardgamesCartByIds,
  getQueryKeySetBoardgamesCartByIds,
} from "../../../utils/helpers/getQueryKeys";
import { getShoppingCartSelector } from "../../../redux/slices/cartSlice";
import { CartInner } from "./CartInner";
import { shoppingCartApi } from "../../../api/shoppingCartAPI";

export const Cart = function () {
  const cart = useSelector(getShoppingCartSelector);
  const ids = cart.map((product) => product.id);
  const token = useSelector(getTokenSelector);

  // token does not exist
  const {
    data: dataWithoutToken,
    isFetching: isFetchingWithoutToken,
    isError: isErrorWithoutToken,
    error: errorWithoutToken,
    refetch: refetchWithoutToken,
  } = useQuery({
    queryKey: getQueryKeyBoardgamesCartByIds(ids),
    queryFn: () => boardgameApi.getBoardgamesByIds(ids),
    enabled: !token,
  });

  // token exist
  const {
    data: preDataWithToken,
    isFetching: preIsFetchingWithToken,
    isError: preIsErrorWithToken,
    error: preErrorWithToken,
    refetch: preRefetchWithToken,
  } = useQuery({
    queryKey: getQueryKeySetBoardgamesCartByIds(ids),
    queryFn: () => shoppingCartApi.addProductsToCart(ids, token),
    enabled: !!token,
  });

  let idsCartFromFetch;
  if (preDataWithToken) {
    idsCartFromFetch = ids.length
      ? preDataWithToken
          .at(-1)
          .productsInShoppingCartDto.map((productCart) => productCart.productId)
      : preDataWithToken.map((productCart) => productCart.productId);
  }

  const {
    data: dataWithToken,
    isFetching: isFetchingWithToken,
    isError: isErrorWithToken,
    error: errorWithToken,
    refetch: refetchWithToken,
  } = useQuery({
    queryKey: getQueryKeyBoardgamesCartByIds(idsCartFromFetch),
    queryFn: () => boardgameApi.getBoardgamesByIds(idsCartFromFetch),
    enabled: !!token && !!idsCartFromFetch,
  });

  return (
    <CartInner
      data={!token ? dataWithoutToken || [] : dataWithToken || []}
      isLoading={
        isFetchingWithoutToken || preIsFetchingWithToken || isFetchingWithToken
      }
      isError={isErrorWithoutToken || preIsErrorWithToken || isErrorWithToken}
      error={errorWithoutToken || preErrorWithToken || errorWithToken}
      refetch={refetchWithoutToken || preRefetchWithToken || refetchWithToken}
    />
  );
};
