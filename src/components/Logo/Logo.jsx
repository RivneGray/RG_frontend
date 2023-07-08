import { Link } from "react-router-dom";
import logo from "../../imgs/logo.png";
import styles from "./Logo.module.css";

export function Logo() {
  return (
    <Link to="/">
      <div className={styles.logoContainer}>
        <img className={styles.logoImg} src={logo} alt="logo" />
        <span className={styles.logoTitle}>RivneGray</span>
      </div>
    </Link>
  );
}
