import styles from "./SortingItem.module.css";

export const SortingItem = ({ value, selectValueHandler }) => {

  return (
    <div
      className={styles.dropdownItem}
      onClick={() => selectValueHandler(value)}
    >
      {value}
    </div>
  );
};
