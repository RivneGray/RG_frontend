import { Hr } from "../Hr/Hr";
import styles from "./Sorting.module.css";
import vectorIconDown from "../../icons/vectorDown.svg";
import vectorIconUp from "../../icons/vectorUp.svg"
import { useState, useRef } from "react";

export const Sorting = () => {
  const selectElement = useRef('');
  const [arrayDirection, setArrayDirection] = useState("down");

  const handlerSelect = (event) => {
    // const selectedIndex = event.target.selectedIndex;
    // const optionElement = event.target.options[selectedIndex];
    // Получаем объект со стилями:
    // setWidthSelect(window.getComputedStyle(optionElement).width); 
    console.log(event.target.value);
    setArrayDirection("down");
  };

  const blurSelect = () => {
    setArrayDirection("down");
    console.log('blur');
  };

  const focusSelect = () => {
    setArrayDirection("up");
    console.log('focus');
  };

  const returnIconArrayJSX = () => {
    if (arrayDirection === 'down') return (
        <img className={styles.vectorImg} src={vectorIconDown} alt="" />
    )
    if (arrayDirection === 'up') return (
        <img className={styles.vectorImg} src={vectorIconUp} alt="" />
    )
  }

  return (
    <aside className={styles.sortingContainer}>
      <Hr />
      <div className={styles.sorting}>
        <span>Сортувати за:</span>
        <div className={styles.selectWrapper}>
          <select
            className={styles.select}
            onChange={handlerSelect}
            onBlur={blurSelect}
            onFocus={focusSelect}
            ref={selectElement}
          >
            <option>за релевантністю</option>
            <option>нові надходження</option>
            <option>від дешевих до дорогих</option>
            <option>від дорогих до дешевих</option>
          </select>
          {returnIconArrayJSX()}
        </div>
      </div>
      <Hr />
    </aside>
  );
};
