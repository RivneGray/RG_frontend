import { Filters } from "../../Filters/Filters";
import { Sorting } from "../../Sorting/Sorting";
import styles from "./Catalog.module.css";
import { CatalogList } from "./CatalogList/CatalogList";

export const Catalog = () => {
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
                    <CatalogList />
                </section>
            </div>
        </section>
    )
}