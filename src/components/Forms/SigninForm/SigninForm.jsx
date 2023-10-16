import { ButtonYellow } from "../../ButtonYellow/ButtonYellow";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { CustomField } from "../CustomField/CustomField";
import emailFormIcon from "../../../icons/emailForm.svg";
import passwordFormIcon from "../../../icons/passwordForm.svg";
import styles from "./SigninForm.module.css";
import { useState } from "react";

export const SigninForm = ({ setIsOpenRememberer }) => {
  const openRemembererPasswordModalHandler = () => {
    setIsOpenRememberer(true);
  };

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Неправильна адреса електронної пошти")
          .required("Введіть адресу електронної пошти"),
        password: Yup.string().required("Введіть пароль"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className={styles.form}>
        <CustomField
          icon={emailFormIcon}
          name="email"
          type="email"
          placeholder="Електронна пошта"
        />
        <CustomField
          icon={passwordFormIcon}
          name="password"
          type={isPasswordHidden ? "password" : "text"}
          placeholder="Пароль"
          isPasswordHidden={isPasswordHidden}
          setIsPasswordHidden={setIsPasswordHidden}
        />
        <ButtonYellow onClickHandler={() => {}} type="submit">
          Вхід
        </ButtonYellow>
        <button
          className={styles.rememberPasswordBtn}
          type="button"
          onMouseUp={openRemembererPasswordModalHandler}
        >
          Забули пароль?
        </button>
      </Form>
    </Formik>
  );
};
