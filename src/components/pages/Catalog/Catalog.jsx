import { useQuery } from "@tanstack/react-query";
import { Filters } from "../../Filters/Filters";
import { Sorting } from "../../Sorting/Sorting";
import styles from "./Catalog.module.css";
import { CatalogList } from "./CatalogList/CatalogList";
import { getQueryKeyBoardgames, getQueryKeyFilters } from "../../../utils/helpers/getQueryKeys";
import { boardgameApi } from "../../../api/boardgameAPI";
import { useSelector } from "react-redux";
import { searchValueSelector } from "../../../redux/slices/searchSlice";
import { getSortValueSelector } from "../../../redux/slices/sortSlice";
import { getFiltersSelector } from "../../../redux/slices/filtersSlice";
import { Pagination } from "../../Pagination/Pagination";
import { getPaginationValueSelector } from "../../../redux/slices/paginationSlice";

export const Catalog = () => {
  const searchValue = useSelector(searchValueSelector);
  const sortValue = useSelector(getSortValueSelector)[1];
  const filteredValues = useSelector(getFiltersSelector);
  const currentPage = useSelector(getPaginationValueSelector);

  const encodeFilters = encodeURIComponent(JSON.stringify(filteredValues));
  // console.log("JSON", JSON.stringify(filteredValues));
  // console.log("encodeURL", encodeFilters);

  const { data, isLoading, isError, error, refetch } = useQuery({
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
    data: filters,
    isLoading: isLoadingFilters,
    isError: isErrorFilters,
    error: errorFilters,
    refetch: refetchFilters,
  } = useQuery({
    queryKey: getQueryKeyFilters(),
    queryFn: () => boardgameApi.getFilters(),
  });

  console.log(filters, isLoadingFilters, isErrorFilters, errorFilters, refetchFilters);

  return (
    <section className={styles.catalog}>
      <div className={styles.catalogLeft}>
        <h1>КАТАЛОГ</h1>
        <Filters />
      </div>
      <div className={styles.catalogRight}>
        {/* <h2>Стратегічні настільні ігри</h2> */}
        <section className={styles.sortCatalog}>
          <Sorting />
          <CatalogList
            data={data ? data.boardGames : []}
            isLoading={isLoading}
            isError={isError}
            error={error}
            refetch={refetch}
          />
          <Pagination totalPages={data ? data.totalPages : 0} />
        </section>
      </div>
    </section>
  );
};
