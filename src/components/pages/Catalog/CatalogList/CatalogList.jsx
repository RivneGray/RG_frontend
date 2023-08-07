import { ProductCard } from "../../../ProductCard/ProductCard";
import styles from "./CatalogList.module.css";

export function CatalogList() {
    return (
        <section className={styles.catalogList}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </section>
    )
}