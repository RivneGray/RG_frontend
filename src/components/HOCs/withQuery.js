import { ButtonWhite } from "../ButtonWhite/ButtonWhite";
import { Loader } from "../Loader/Loader";
import styles from "./withQuery.module.css";

export const withQuery = (WrappedComponent) =>
  function ({ isLoading, isError, error, refetch, ...rest }) {
    if (isError) {
      return (
        <section className={styles.errorWrapped}>
          <p className={styles.error}>
            Помилка! {error.message}
            <ButtonWhite onClick={refetch} type="button">
              Спробувати ще
            </ButtonWhite>
          </p>
        </section>
      );
    }
    if (isLoading) {
      return <Loader />;
    }
    return <WrappedComponent {...rest} />;
  };
