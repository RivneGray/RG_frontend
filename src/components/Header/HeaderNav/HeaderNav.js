import { NavLink } from "react-router-dom";
import styles from "./HeaderNav.module.css";
import { useSelector } from "react-redux";
import { getShoppingCartSelector } from "../../../redux/slices/cartSlice";
import classNames from "classnames";
import { ReactComponent as UserIcon } from "../../../icons/user.svg";
import { ReactComponent as FavoritesIcon } from "../../../icons/bookmark.svg";
import { ReactComponent as CartIcon } from "../../../icons/cart.svg";
import { getTokenSelector } from "../../../redux/slices/userSlice";

export const HeaderNav = () => {
  const cart = useSelector(getShoppingCartSelector);
  const token = useSelector(getTokenSelector);

  return (
    <>
      {token ? (
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
      ) : (
        <div className={styles.iconNav}>
          <UserIcon />
          <span>Профіль</span>
        </div>
      )}

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
        <span>{cart.length ? cart.length : ""}</span>
      </NavLink>
    </>
  );
};
