import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { useEffect } from "react";

export const Modal = ({ isOpen, closeHandler, children }) => {
  if (!isOpen) return null;

  const closeModalByClickWr = (e) => {
    if (e.target === e.currentTarget) {
        closeHandler()
        console.log(e);
    };
  };

  return ReactDOM.createPortal(
    <div onClick={closeModalByClickWr} className={styles.modalWr}>
      <ModalInner closeHandler={closeHandler}>{children}</ModalInner>
    </div>,
    document.getElementById("root-modal")
  );
};

function ModalInner({ closeHandler, children }) {
  useEffect(() => {
    const closeModalByEscape = (e) => {
      if (e.key === "Escape") closeHandler();
    };

    document.addEventListener("keydown", closeModalByEscape);

    return () => {
      document.removeEventListener("keydown", closeModalByEscape);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className={styles.modalInner}>{children}</div>;
}
