import { ButtonYellow } from "../../ButtonYellow/ButtonYellow";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { CustomField } from "../CustomField/CustomField";
import emailFormIcon from "../../../icons/emailForm.svg";
import passwordFormIcon from "../../../icons/passwordForm.svg";
import styles from "./SigninForm.module.css";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { userApi } from "../../../api/userAPI";
import { useDispatch } from "react-redux";
import { setTokenUser } from "../../../redux/slices/userSlice";

export const SigninForm = ({ setIsOpenRememberer, closeLoginModalHandler }) => {
  const dispatch = useDispatch();

  const openRemembererPasswordModalHandler = () => {
    setIsOpenRememberer(true);
  };

  const { mutateAsync, error, isError, isLoading } = useMutation({
    mutationFn: (values) => userApi.signin(values),
  });

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
      onSubmit={async (values, { setSubmitting }) => {
        const result = await mutateAsync(values);
        dispatch(setTokenUser(result.tokenValue));
        closeLoginModalHandler();
        setSubmitting(false);
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
        <ButtonYellow disabled={isLoading} type="submit">
          Вхід
        </ButtonYellow>
        {isError && <p className={styles.error}>{error.message}</p>}
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
