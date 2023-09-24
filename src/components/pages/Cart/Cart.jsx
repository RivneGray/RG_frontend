import { useSelector } from "react-redux";
import { getTokenSelector } from "../../../redux/slices/userSlice";
import { useQuery } from "@tanstack/react-query";
import { boardgameApi } from "../../../api/boardgameAPI";
import { getQueryKeyBoardgamesCartByIds } from "../../../utils/helpers/getQueryKeys";
import { getShoppingCartSelector } from "../../../redux/slices/cartSlice";
import { CartInner } from "./CartInner";

export const Cart = function () {
  const cart = useSelector(getShoppingCartSelector);
  const ids = cart.map((product) => product.id);
  const token = useSelector(getTokenSelector);

  const {
    data: dataWithoutToken,
    isLoading: isLoadingWithoutToken,
    isFetching: isFetchingWithoutToken,
    isError: isErrorWithoutToken,
    error: errorWithoutToken,
    refetch: refetchWithoutToken,
  } = useQuery({
    queryKey: getQueryKeyBoardgamesCartByIds(ids),
    queryFn: () => boardgameApi.getBoardgamesByIds(ids),
    enabled: !token,
  });

  console.log(
    isFetchingWithoutToken,
  );

  return <CartInner
    data={!token ? dataWithoutToken : []}
    isLoading={isLoadingWithoutToken}
    isError={isErrorWithoutToken}
    error={errorWithoutToken}
    refetch={refetchWithoutToken}
  />;
};
