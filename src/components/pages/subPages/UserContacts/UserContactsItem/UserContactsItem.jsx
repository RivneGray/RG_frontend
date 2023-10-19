import { useRef, useState } from "react";
import styles from "./UserContactsItem.module.css";
import { ReactComponent as EditPenIcon } from "../../../../../icons/editPen.svg";
import { ButtonYellow } from "../../../../ButtonYellow/ButtonYellow";
import { useSelector } from "react-redux";
import { getTokenSelector } from "../../../../../redux/slices/userSlice";

export const UserContactsItem = ({ title, initValue, ...props }) => {
  const token = useSelector(getTokenSelector);
  const [value, setValue] = useState(initValue);
  const [isFetchBtnHidden, setIsFetchBtnHidden] = useState(true);
  const inputRef = useRef();

  const changeHandler = (e) => {
    setValue(e.target.value);
    setIsFetchBtnHidden(false);
  };

  const clickPenHandler = () => {
    inputRef.current.focus();
  };

  const clickFetchBtn = async () => {
    const fetchValue = { phone: value };
    console.log(fetchValue);
    const res = await props.mutateAsyncPhone(token, fetchValue);
    setIsFetchBtnHidden(true);
    console.log(res);
  };

  return (
    <div className={styles.contactsItemContainer}>
      <span className={styles.title}>{title}</span>
      <input
        ref={inputRef}
        value={value}
        onChange={changeHandler}
        className={styles.input}
      />
      <button onClick={clickPenHandler} className={styles.button}>
        <EditPenIcon />
      </button>
      {!isFetchBtnHidden && (
        <ButtonYellow onClickHandler={clickFetchBtn}>Застосувати</ButtonYellow>
      )}
    </div>
  );
};
