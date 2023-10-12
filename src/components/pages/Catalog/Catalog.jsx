import { useQuery } from "@tanstack/react-query";
import styles from "./Catalog.module.css";
import {getQueryKeyFilters} from "../../../utils/helpers/getQueryKeys";
import { boardgameApi } from "../../../api/boardgameAPI";
import { CatalogBody } from "./CatalogBody";

export const Catalog = () => {

  const { isFetching, isError, error, refetch, data } = useQuery({
    queryKey: getQueryKeyFilters(),
    queryFn: () => boardgameApi.getFilters(),
  });

  return (
    <section className={styles.catalog}>
      <h1>КАТАЛОГ</h1>
      <CatalogBody
        filters={data}
        isLoading={isFetching}
        isError={isError}
        error={error}
        refetch={refetch}
      />
    </section>
  );
};
