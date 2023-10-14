import { withQuery } from "../../../HOCs/withQuery";
import { ProductCard } from "../../../ProductCard/ProductCard";
import styles from "./CatalogList.module.css";

export const CatalogList = withQuery(({ data: boardgames }) => {
  return (
    <>
      {boardgames.length ? (
        <article className={styles.catalogList}>
          {boardgames
            ? boardgames.map((boardgame) => (
                <ProductCard
                  key={boardgame.id}
                  productName={boardgame.productName}
                  productPrice={boardgame.productPrice}
                  productQuantityInStock={boardgame.productQuantityInStock}
                  productImageURL={boardgame.productImageURL}
                  id={boardgame.id}
                />
              ))
            : []}
        </article>
      ) : (
        <article className={styles.emptyCatalog}>
          <p>За вашим запитом товари не знайдені</p>
        </article>
      )}
    </>
  );
});
