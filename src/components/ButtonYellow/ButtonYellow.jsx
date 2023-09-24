import classNames from "classnames";
import styles from "./ButtonYellow.module.css";

export const ButtonYellow = ({ children, onClickHandler }) => {
  return (
    <button
      className={classNames(styles.button, styles.buttonYellow)}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};
