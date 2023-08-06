import { ProductCard } from "../ProductCard/ProductCard";
import styles from './Novelty.module.css';

export const Novelty = () => {
  return (
    <div>
      <h1>НОВИНКА</h1>
      <div className={styles.listNew}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};
