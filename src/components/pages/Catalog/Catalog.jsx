import { useQuery } from "@tanstack/react-query";
import { Filters } from "../../Filters/Filters";
import { Sorting } from "../../Sorting/Sorting";
import styles from "./Catalog.module.css";
import { CatalogList } from "./CatalogList/CatalogList";
import { getQueryKeyBoardgames } from "../../../utils/constants";
import { boardgameApi } from "../../../api/boardgameAPI";
import { useSelector } from "react-redux";
import { searchValueSelector } from "../../../redux/slices/searchSlice";
import { getSortValueSelector } from "../../../redux/slices/sortSlice";

export const Catalog = () => {
  const searchValue = useSelector(searchValueSelector);
  const sortValue = useSelector(getSortValueSelector)[1];

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: getQueryKeyBoardgames(searchValue, sortValue),
    queryFn: () => boardgameApi.getAllBoardgames(searchValue, sortValue),
  });

  console.log(data, isLoading, isError);

  return (
    <section className={styles.catalog}>
      <div className={styles.catalogLeft}>
        <h1>КАТАЛОГ</h1>
        <Filters />
      </div>
      <div className={styles.catalogRight}>
        <h2>Стратегічні настільні ігри</h2>
        <section className={styles.sortCatalog}>
          <Sorting />
          <CatalogList
            data={data ? data.boardGames : []}
            isLoading={isLoading}
            isError={isError}
            error={error}
            refetch={refetch}
          />
        </section>
      </div>
    </section>
  );
};
