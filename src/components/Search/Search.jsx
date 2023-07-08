import styles from "./Search.module.css";
import searchIcon from "../../icons/search.svg";

export const Search = () => {
  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        placeholder="Пошук по товарах"
        className={styles.inputSearch}
      />
      <img src={searchIcon} alt="searchIcon" />
    </div>
  );
};
