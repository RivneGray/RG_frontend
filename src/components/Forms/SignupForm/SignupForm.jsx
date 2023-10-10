import { ButtonYellow } from "../../ButtonYellow/ButtonYellow";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { CustomField } from "../CustomField/CustomField";
import emailFormIcon from "../../../icons/emailForm.svg";
import passwordFormIcon from "../../../icons/passwordForm.svg";
import phoneFormIcon from "../../../icons/phoneForm.svg";
import userFormIcon from "../../../icons/userForm.svg";
import styles from "../SigninForm/SigninForm.module.css";
import { CustomCheckbox } from "../CustomCheckbox/CustomCheckbox";

export const SignupForm = () => {
  const disableHandler = (values) => {
    return !values.confirmConsent;
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        fullName: "",
        confirmConsent: true,
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Неправильна адреса електронної пошти")
          .required("Введіть адресу електронної пошти"),
        password: Yup.string()
          .min(8, "Пароль може містити щонайменше 8 символів")
          .matches(/[a-zA-Z]/, "Пароль може містити лише латинські літери")
          .required("Введіть пароль"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password")], "Паролі не співпадають")
          .required("Введіть пароль"),
        phone: Yup.string().required("Введіть номер телефону"),
        fullName: Yup.string().required("Введіть прізвище, ім'я"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values }) => (
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
            type="password"
            placeholder="Пароль"
          />

          <CustomField
            icon={passwordFormIcon}
            name="confirmPassword"
            type="password"
            placeholder="Підтвердити пароль"
          />

          <CustomField
            icon={phoneFormIcon}
            name="phone"
            type="phone"
            placeholder="Номер телефону"
          />

          <CustomField
            icon={userFormIcon}
            name="fullName"
            type="text"
            placeholder="Фамілія, Ім’я"
          />

          <CustomCheckbox name="confirmConsent">
            Я згоден з політикою конфіденційності та умовами надання послуг
          </CustomCheckbox>

          <ButtonYellow
            onClickHandler={() => {}}
            type="submit"
            disabled={disableHandler(values)}
          >
            Зареєструватися
          </ButtonYellow>
        </Form>
      )}
    </Formik>
  );
};
