import { useState } from "react";
import styles from "./UserContactsItem.module.css";
import { ReactComponent as EditPenIcon } from "../../../../../icons/editPen.svg";

export const UserContactsItem = ({ title, initValue, ...props }) => {
  const [value, setValue] = useState(initValue);
  const [isDisabled, setIsDisabled] = useState(true);

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const clickPenHandler = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <div className={styles.contactsItemContainer}>
      <span className={styles.title}>{title}</span>
      <input
        value={value}
        onChange={changeHandler}
        disabled={isDisabled}
        className={styles.input}
      />
      <button onClick={clickPenHandler}>
        <EditPenIcon />
      </button>
    </div>
  );
};
