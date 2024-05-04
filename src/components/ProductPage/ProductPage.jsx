import styles from './ProductPage.module.css'
import {Link, useParams} from "react-router-dom";
import {Loader} from "../Loader/Loader";
import {useQuery} from "@tanstack/react-query";
import {boardgameApi} from "../../api/boardgameAPI";
import {ButtonYellow} from "../ButtonYellow/ButtonYellow";
import {ButtonWhite} from "../ButtonWhite/ButtonWhite";
import shop from '../../icons/circumShop.svg'
import car from '../../icons/car.svg'
import AddToFavoritesComponent from "../../utils/helpers/AddToFavoritesComponent";
import AddToCartComponent from "../../utils/helpers/AddToCartComponent";
import {getQueryKeyGetCart} from "../../utils/helpers/getQueryKeys";
import {shoppingCartApi} from "../../api/shoppingCartAPI";
import {useSelector} from "react-redux";
import {getTokenSelector} from "../../redux/slices/userSlice";

const ProductPage = () => {
    const token = useSelector(getTokenSelector)
    const {
        data: dataCart,
    } = useQuery({
        queryKey: getQueryKeyGetCart(),
        queryFn: () => shoppingCartApi.getCart(token),
        enabled: !!token
    });
    const params = useParams()
    const id = Number(params.id)
    const {
        data, isLoading
    } = useQuery({
        queryFn: () => boardgameApi.getBoardgameById(id)
    })
    const genresString = data ? data.gameGenres.map(el => el.genreName).join(', ') : null
    const mechanicsString = data ? data.gameMechanics.map(el => el.mechanicName).join(', ') : null
    const gameTypesString = data ? data.gameTypes.join(', ') : null
    if (isLoading) return <Loader/>
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.productImg}>
                <img src={data.productImageURLs}/>
            </div>

            <div className={styles.mainInfo}>
                <div>
                    <div className={styles.name}>
                        {data.productName}
                    </div>
                    <div className={styles.nameInEnglish}>
                        {data.productNameInEnglish}
                    </div>
                </div>
                <div className={styles.subButtonWrapper}>
                    <div className={styles.buttonsWrapper}>
                        <div className={styles.price}>
                            {data.productPrice} ₴
                        </div>
                        <AddToCartComponent id={id} cartServer={dataCart}/>
                        <AddToFavoritesComponent productName={data.productName}
                                                 productNameInEnglish={data.productNameInEnglish}
                                                 productPrice={data.productPrice}
                                                 productQuantityInStock={data.productQuantityInStock}
                                                 productImageURLs={data.productImageURLs}
                                                 id={id}
                                                 childrenWhenTrue={<ButtonWhite
                                                     children={'В обраному'}
                                                     ownStyles={`${styles.blueButton}`}/>}
                                                 childrenWhenFalse={<ButtonYellow
                                                     children={'У вибране'}
                                                     ownStyles={`${styles.blueButtonFill}`}/>}
                                                 styles={{width: '100%'}}/>

                        <div className={styles.row}>
                            <div className={styles.column}>
                                <div>
                                    Самовызов
                                </div>
                                <div>
                                    из магазина сегодня
                                </div>
                            </div>
                            <img src={shop}/>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.column}>
                                <div>
                                    Доставка
                                </div>
                                <div>
                                    от ₴50
                                </div>
                            </div>
                            <img src={car}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.description}>
                <div className={styles.textBox}>
                    <div className={styles.blueText}>Опис</div>
                    {data.productDescription}
                </div>
                <div className={styles.btnContainer}>
                    <Link to="/">
                        <ButtonWhite>На головну</ButtonWhite>
                    </Link>
                    <Link to="/catalog">
                        <ButtonYellow>До каталогу</ButtonYellow>
                    </Link>
                </div>
            </div>
            <div className={`${styles.characteristic} ${styles.textBox}`}>
                <div className={styles.blueText}>
                    Характеристики
                </div>
                <Characteristic title={'Вік'} message={data.minAge}/>
                <Characteristic title={'Кількість гравців'} message={`${data.minPlayers}-${data.maxPlayers}`}/>
                <Characteristic title={'Час партії'}
                                message={`${data.minGameDuration}-${data.maxGameDuration} хвилин`}/>
                <Characteristic title={'Мова'} message={`${data.gameLanguage}`.toLowerCase()}/>
                <Characteristic title={'Жанр'} message={genresString}/>
                <Characteristic title={'Тематика'} message={gameTypesString.toLowerCase()}/>
                <Characteristic title={'Механіка'} message={mechanicsString}/>
                <Characteristic title={'Категорія'} message={data.productCategory}/>
                <Characteristic title={'Автор'} message={data.author}/>
                <Characteristic title={'Художник'} message={data.illustrator}/>
                <Characteristic title={'Бренд'} message={data.manufacturer}/>
                <Characteristic title={'Склад'} message={data.gameSet}/>
            </div>
        </div>
    );
};

const Characteristic = ({title, message}) => {
    if (!message) return null
    return (
        <div className={styles.characteristicRow}>
            <div className={styles.greyText}>
                {title}
            </div>
            <div className={styles.column}>
                {message}
            </div>
        </div>
    )
}

export default ProductPage;
