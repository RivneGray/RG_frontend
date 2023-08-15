import classNames from "classnames";
import stylesButtonYellow from "../ButtonYellow/ButtonYellow.module.css";
import styles from "./ButtonWhite.module.css";

export const ButtonWhite = ({ children, onClickHandler }) => {
  return (
    <button
      className={classNames(stylesButtonYellow.button, styles.buttonWhite)}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};
