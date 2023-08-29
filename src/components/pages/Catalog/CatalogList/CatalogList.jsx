import { boardgameApi } from "../../../../api/boardgameAPI";
import { getQueryKeyBoardgames } from "../../../../utils/constants";
import { ProductCard } from "../../../ProductCard/ProductCard";
import styles from "./CatalogList.module.css";
import { useQuery } from "@tanstack/react-query";

const CatalogListInner = ({ data: boardgames }) => {
  // return (
  //   <section className={styles.catalogList}>
  //     {boardgames.map((boardgame) => (
  //       <ProductCard
  //         key={boardgame.id}
  //         productName={boardgame.productName}
  //         productPrice={boardgame.productPrice}
  //         productQuantityInStock={boardgame.productQuantityInStock}
  //         productImageURL={boardgame.productImageURL}
  //       />
  //     ))}
  //   </section>
  // );

  return (
    <article className={styles.catalogList}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </article>
  );
};

export function CatalogList() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: getQueryKeyBoardgames(),
    queryFn: () => boardgameApi.getAllBoardgames(),
  });

  console.log(data);

  return (
    <CatalogListInner
      data={data}
      isLoading={isLoading}
      isError={isError}
      error={error}
      refetch={refetch}
    />
  );
}
