import { ButtonYellow } from "../ButtonYellow/ButtonYellow";
import { Logo } from "../Logo/Logo";
import styles from "./Header.module.css";
import classNames from "classnames";
import listIcon from "../../icons/list.svg";
import userIcon from "../../icons/user.svg";
import favoritesIcon from "../../icons/bookmark.svg";
import cartIcon from "../../icons/shopping-cart.svg";
import { Search } from "../Search/Search";
import { Link } from "react-router-dom";

export const Header = function () {
  return (
    <header
      className={classNames({
        [styles.header]: true,
      })}
    >
      <div className={styles.up}>
        <div className={styles.upLeft}>
          <Logo />
          <div className={styles.contacts}>
            м. Рівне, вул. Чорновола, 10 (біля ТЦ "Вікторія")
          </div>
          <div className={styles.contacts}>+38 (097) 000-00-00 </div>
        </div>
        <div className={styles.upRight}>
          <div className={styles.upRightInfo}>Доставка та оплата</div>
          <div className={styles.upRightInfo}>Про нас</div>
          <div className={styles.upRightInfo}>Зворотний зв'язок</div>
        </div>
      </div>
      <div className={styles.down}>
        <div className={styles.downLeft}>
          <ButtonYellow>
            <img src={listIcon} alt="listIcon" />
            {/* <object type="image/svg+xml" data={listIcon}>test text</object> */}
            Каталог товарів
          </ButtonYellow>
          <Search />
        </div>
        <div className={styles.downRight}>
          <Link to="/profile">
            <div className={styles.iconNav}>
              <img src={userIcon} alt="user" />
              <span>Увійти</span>
            </div>
          </Link>
          <Link to="/favorites">
            <div className={styles.iconNav}>
              <img src={favoritesIcon} alt="favorites" />
              <span>Обрані</span>
            </div>
          </Link>
          <Link to="/cart">
            <div className={styles.iconNav}>
              <img src={cartIcon} alt="cart" />
              <span>Кошик</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};
