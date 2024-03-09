import classNames from "classnames";
import stylesCart from "../Cart/Cart.module.css";
import styles from "./Favorites.module.css";
import {FavoritesTotal} from "./FavoritesTotal/FavoritesTotal";
import {FavoritesList} from "./FavoritesList/FavoritesList";
import {useQuery} from "@tanstack/react-query";
import {getQueryKeyGetFavorites} from "../../../utils/helpers/getQueryKeys";
import {favoritesApi} from "../../../api/favoritesApi";
import {useDispatch, useSelector} from "react-redux";
import {getTokenSelector} from "../../../redux/slices/userSlice";
import {getFavoritesItemsSelector, setFavorites} from "../../../redux/slices/favoritesSlice";
import {useEffect} from "react";
import {Loader} from "../../Loader/Loader";

export const Favorites = () => {
    const dispatch = useDispatch()
    const token = useSelector(getTokenSelector)
    const favItems = useSelector(getFavoritesItemsSelector)
    const {
        data,
        isLoading,
        error,
    } = useQuery({
        queryKey: getQueryKeyGetFavorites(),
        queryFn: () => favoritesApi.getFavoritesItems(token)
    })

    useEffect(() => {
        if (data && data.length !== 0) {
            dispatch(setFavorites(data))
        } else {
            dispatch(setFavorites([]))
        }
    }, [data])
    if (isLoading) return <Loader/>;
    if (error) return 'Error: ' + error.message
    return (
        <section className={classNames(stylesCart.cartSection, styles.favoritesSection)}>
            <h1>ОБРАНI</h1>
            <FavoritesTotal/>
            <FavoritesList productsList={favItems}/>
        </section>

    )
}
