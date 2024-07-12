import { ProductCard } from '../ProductCard/ProductCard';
import styles from './Novelty.module.css';
import { useQuery } from '@tanstack/react-query';
import { boardgameApi } from '../../api/boardgameAPI';
import { Loader } from '../Loader/Loader';

export const Novelty = () => {
  const { data, isLoading } = useQuery({
    queryFn: () => boardgameApi.getNewestList(),
  });
  if (isLoading || !Array.isArray(data)) return <Loader />;

  return (
    <section className={styles.noveltyWrapper}>
      <h1>НОВИНКА</h1>
      <div className={styles.listNew}>
        {data.map((prod) => (
          <ProductCard
            productName={prod.productName}
            productNameInEnglish={prod.productNameInEnglish}
            productPrice={prod.productPrice}
            productQuantityInStock={prod.productQuantityInStock}
            productImageURL={prod.productImageURL}
            id={prod.id}
            key={prod.id}
          />
        ))}
      </div>
    </section>
  );
};
