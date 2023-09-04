import { ButtonWhite } from "../ButtonWhite/ButtonWhite";
import { Loader } from "../Loader/Loader";

export const withQuery = (WrappedComponent) =>
  function ({ isLoading, isError, error, refetch, ...rest }) {
    if (isError) {
      return (
        <p>
          Произошла ошибка: {error.message}
          <ButtonWhite onClick={refetch} type="button">
            Попробовать еще
          </ButtonWhite>
        </p>
      );
    }
    if (isLoading) {
      return <Loader />;
    }

    return <WrappedComponent {...rest} />;
  };
