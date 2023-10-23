import { useRef, useState } from "react";
import styles from "./UserContactsItem.module.css";
import { ReactComponent as EditPenIcon } from "../../../../../icons/editPen.svg";
import { ButtonYellow } from "../../../../ButtonYellow/ButtonYellow";
import { useSelector } from "react-redux";
import { getTokenSelector } from "../../../../../redux/slices/userSlice";
import { InputMask } from "primereact/inputmask";

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
    const fetchValues = {
      token,
      value: {
        [props.name]:
          props.name === "phone" ? value.match(/[+\d]/g).join("") : value,
      }
    };
    await props.mutateAsync(fetchValues);
    if (props.isError) setIsFetchBtnHidden(false);
    else setIsFetchBtnHidden(true);
  };

  return (
    <div className={styles.contactsItemContainer}>
      <span className={styles.title}>{title}</span>
      {props.name === "phone" ? (
        <InputMask
          mask="+380 (99) 999-99-99"
          ref={inputRef}
          value={value}
          onChange={changeHandler}
          className={styles.input}
          placeholder="+380 (99) 999-99-99"
        />
      ) : (
        <input
          ref={inputRef}
          value={value}
          onChange={changeHandler}
          className={styles.input}
        />
      )}
      <button onClick={clickPenHandler} className={styles.button}>
        <EditPenIcon />
      </button>
      {!isFetchBtnHidden && (
        <ButtonYellow onClickHandler={clickFetchBtn} disabled={props.isLoading}>
          Застосувати
        </ButtonYellow>
      )}
    </div>
  );
};
