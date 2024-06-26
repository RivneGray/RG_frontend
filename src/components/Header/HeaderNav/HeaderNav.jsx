import { NavLink } from "react-router-dom";
import styles from "./HeaderNav.module.css";
import { useSelector } from "react-redux";
import { getShoppingCartSelector } from "../../../redux/slices/cartSlice";
import classNames from "classnames";
import { ReactComponent as UserIcon } from "../../../icons/user.svg";
import { ReactComponent as FavoritesIcon } from "../../../icons/bookmark.svg";
import { ReactComponent as CartIcon } from "../../../icons/cart.svg";
import { getTokenSelector } from "../../../redux/slices/userSlice";
import { LoginModal } from "../../Modals/LoginModal/LoginModal";
import { useState } from "react";

export const HeaderNav = () => {
  const cart = useSelector(getShoppingCartSelector);
  const token = useSelector(getTokenSelector);

  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

  const closeLoginModalHandler = () => {
    setIsOpenLoginModal(false);
  };

  const openLoginModalHandler = () => {
    setIsOpenLoginModal(true);
  };

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
          <span>Профіль</span>
        </NavLink>
      ) : (
        <div className={styles.iconNav} onClick={openLoginModalHandler}>
          <UserIcon />
          <span>Увійти</span>
          <LoginModal
            isOpenLoginModal={isOpenLoginModal}
            closeLoginModalHandler={closeLoginModalHandler}
          />
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
