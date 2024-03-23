import classNames from "classnames";
import stylesCart from "../Cart/Cart.module.css";
import styles from "./Favorites.module.css";
import { FavoritesTotal } from "./FavoritesTotal/FavoritesTotal";
import { FavoritesList } from "./FavoritesList/FavoritesList";
import { useQuery } from "@tanstack/react-query";
import { getQueryKeyGetFavorites } from "../../../utils/helpers/getQueryKeys";
import { favoritesApi } from "../../../api/favoritesApi";
import { useDispatch, useSelector } from "react-redux";
import { getTokenSelector } from "../../../redux/slices/userSlice";
import {
  getFavoritesItemsSelector,
  setFavorites,
} from "../../../redux/slices/favoritesSlice";
import { useEffect } from "react";
import { Loader } from "../../Loader/Loader";
import { Link } from "react-router-dom";
import { ButtonWhite } from "../../ButtonWhite/ButtonWhite";
import { ButtonYellow } from "../../ButtonYellow/ButtonYellow";

export const Favorites = () => {
  const dispatch = useDispatch();
  const token = useSelector(getTokenSelector);
  const favItems = useSelector(getFavoritesItemsSelector);
  const { data, isLoading } = useQuery({
    queryKey: getQueryKeyGetFavorites(),
    queryFn:
      token !== "" ? () => favoritesApi.getFavoritesItems(token) : () => {},
  });

  useEffect(() => {
    if (data) {
      dispatch(setFavorites(data));
    }
  }, [data, dispatch]);
  if (isLoading) return <Loader />;
  if (!favItems.length)
    return (
      <div className={styles.emptyCartContainer}>
        <h2>Обрані порожні</h2>
        <p className={styles.bodyEmptyCart}>
          Перегляньте пропозиції на
          <Link to="/"> головній сторінці</Link>, скористайтесь
          <Link to="/catalog"> каталогом</Link> або пошуком
        </p>
        <div className={styles.btnContainer}>
          <Link to="/">
            <ButtonWhite>На головну</ButtonWhite>
          </Link>
          <Link to="/catalog">
            <ButtonYellow>До каталогу</ButtonYellow>
          </Link>
        </div>
      </div>
    );
  return (
    <section
      className={classNames(stylesCart.cartSection, styles.favoritesSection)}
    >
      <h1>ОБРАНI</h1>
      <FavoritesTotal />
      <FavoritesList productsList={favItems} />
    </section>
  );
};
