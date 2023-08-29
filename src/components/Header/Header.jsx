import { ButtonYellow } from "../ButtonYellow/ButtonYellow";
import { Logo } from "../Logo/Logo";
import styles from "./Header.module.css";
import { ReactComponent as UserIcon } from "../../icons/user.svg";
import { ReactComponent as FavoritesIcon } from "../../icons/bookmark.svg";
import { ReactComponent as CartIcon } from "../../icons/shopping-cart.svg";
import { Search } from "../Search/Search";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as ListIcon } from "../../icons/list.svg";
import classNames from "classnames";

export const Header = function () {
  return (
    <header className={styles.header}>
      <div className={styles.up}>
        <Logo />
        <div className={styles.containerInfo}>
          <div className={styles.infoLeft}>
            <span>м. Рівне, вул. Чорновола, 10</span>
            <span>+38 (097) 000-00-00 </span>
          </div>

          <div className={styles.infoRight}>
            <span>Доставка та оплата</span>
            <span>Про нас</span>
            <span>Зворотний зв'язок</span>
          </div>
        </div>
      </div>
      <div className={styles.down}>
        <div className={styles.containerButton}>
          <Link to="/catalog">
            <ButtonYellow>
              <ListIcon className={styles.listIcon} />
              Каталог товарів
            </ButtonYellow>
          </Link>
        </div>

        <Search />

        <div className={styles.downRight}>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              classNames(styles.iconNav, {
                [styles.iconNavActive]: isActive,
              })
            }
          >
            <UserIcon />
            <span>Увійти</span>
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              classNames(styles.iconNav, {
                [styles.iconNavActive]: isActive,
              })
            }
          >
            <FavoritesIcon />
            <span>Обрані</span>
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              classNames(styles.iconNav, {
                [styles.iconNavActive]: isActive,
              })
            }
          >
            <CartIcon />
            <span>Кошик</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
};
