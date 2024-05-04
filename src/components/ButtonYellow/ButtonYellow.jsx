import classNames from "classnames";
import styles from "./ButtonYellow.module.css";

export const ButtonYellow = ({ children, onClickHandler, type, disabled, ownStyles={} }) => {
  return (
    <button
      className={classNames(styles.button, styles.buttonYellow, ownStyles)}
      onClick={onClickHandler}
      type={type ? type : 'button'}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
