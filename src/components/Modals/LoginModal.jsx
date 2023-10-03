import { useState } from "react";
import { Modal } from "../ModalRoot/Modal";
import style from "./LoginModal.module.css";
import classNames from "classnames";
import { SigninForm } from "../Forms/SigninForm/SigninForm";
import { Hr } from "../Hr/Hr";

export const LoginModal = ({ isOpenLoginModal, closeLoginModalHandler }) => {
  const [isNotActive, setIsNotActive] = useState(true);

  return (
    <Modal isOpen={isOpenLoginModal} closeHandler={closeLoginModalHandler}>
      <article className={style.loginModal}>
        <div className={style.containerBtn}>
          <button
            className={classNames(style.btn, { [style.notActive]: !isNotActive })}
            onClick={() => setIsNotActive(true)}
          >
            Авторизувати
          </button>
          <button
            className={classNames(style.btn, { [style.notActive]: isNotActive })}
            onClick={() => setIsNotActive(false)}
          >
            Зареєструватися
          </button>
        </div>
        <Hr />
        {
            isNotActive ? <SigninForm /> : null
        }
        <Hr />
      </article>
    </Modal>
  );
};
