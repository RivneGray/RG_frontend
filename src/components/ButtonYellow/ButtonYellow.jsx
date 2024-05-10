import classNames from "classnames";
import styles from "./ButtonYellow.module.css";

export const ButtonYellow = ({ children, onClickHandler, type, disabled }) => {
  return (
    <button
      className={classNames(styles.button, styles.buttonYellow)}
      onClick={onClickHandler}
      type={type ? type : 'button'}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
