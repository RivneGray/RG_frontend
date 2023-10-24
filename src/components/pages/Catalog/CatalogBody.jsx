import { useSelector } from "react-redux";
import { Filters } from "../../Filters/Filters";
import { withQuery } from "../../HOCs/withQuery";
import { Pagination } from "../../Pagination/Pagination";
import { Sorting } from "../../Sorting/Sorting";
import styles from "./Catalog.module.css";
import { CatalogList } from "./CatalogList/CatalogList";
import { searchValueSelector } from "../../../redux/slices/searchSlice";
import { getSortValueSelector } from "../../../redux/slices/sortSlice";
import { getFiltersSelector } from "../../../redux/slices/filtersSlice";
import { getPaginationValueSelector } from "../../../redux/slices/paginationSlice";
import { getQueryKeyBoardgames, getQueryKeyGetCart } from "../../../utils/helpers/getQueryKeys";
import { boardgameApi } from "../../../api/boardgameAPI";
import { useQuery } from "@tanstack/react-query";
import { shoppingCartApi } from "../../../api/shoppingCartAPI";
import { getTokenSelector } from "../../../redux/slices/userSlice";

export const CatalogBody = withQuery(({ filters }) => {
  const token = useSelector(getTokenSelector);

  const searchValue = useSelector(searchValueSelector);
  const sortValue = useSelector(getSortValueSelector)[1];
  const filteredValues = useSelector(getFiltersSelector);
  const currentPage = useSelector(getPaginationValueSelector);

  const encodeFilters = encodeURIComponent(JSON.stringify(filteredValues));
  // console.log("JSON", JSON.stringify(filteredValues));
  // console.log("encodeURL", encodeFilters);

  const { isLoading, isError, error, refetch, data } = useQuery({
    queryKey: getQueryKeyBoardgames(
      searchValue,
      sortValue,
      encodeFilters,
      currentPage
    ),
    queryFn: () =>
      boardgameApi.getAllBoardgames(
        searchValue,
        sortValue,
        encodeFilters,
        currentPage
      ),
  });

  const {
    data: dataCart,
    isLoading: isLoadingCart,
    isError: isErrorCart,
    error: errorCart,
    refetch: refetchCart,
  } = useQuery({
    queryKey: getQueryKeyGetCart(),
    queryFn: () => shoppingCartApi.getCart(token),
    enabled: !!token
  });

  return (
    <div className={styles.catalogBody}>
      <Filters data={filters} />
      <article className={styles.sortCatalog}>
        <Sorting />
        <CatalogList
          data={data ? data.boardGames : []}
          cartServer={dataCart}
          isLoading={isLoading || isLoadingCart}
          isError={isError || isErrorCart}
          error={error || errorCart}
          refetch={isError ? refetch : refetchCart}
        />
        <Pagination totalPages={data ? data.totalPages : 0} />
      </article>
    </div>
  );
});
