import styles from './CustomSelect.module.css';

export function CustomSelect({
  boolStateParam,
  onHandleChange,
  leftSelect,
  rightSelect,
}) {
  const handleChangeSelectItem = (e) => {
    if (!e.target.classList.contains(styles.active)) {
      onHandleChange(!boolStateParam);
    }
  };

  return (
    <div className={styles.custom_select}>
      {console.log('render')}
      <div
        className={`${styles.left_item} ${boolStateParam ? styles.active : ''}`}
        onClick={handleChangeSelectItem}
      >
        {leftSelect}
      </div>
      <div
        className={`${styles.right_item} ${
          !boolStateParam ? styles.active : ''
        }`}
        onClick={handleChangeSelectItem}
      >
        {rightSelect}
      </div>
    </div>
  );
}
