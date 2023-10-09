import { ButtonYellow } from "../../ButtonYellow/ButtonYellow";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { CustomField } from "../CustomField/CustomField";
import emailFormIcon from "../../../icons/emailForm.svg";
import passwordFormIcon from "../../../icons/passwordForm.svg";
import phoneFormIcon from "../../../icons/phoneForm.svg";
import userFormIcon from "../../../icons/userForm.svg";
import styles from "../SigninForm/SigninForm.module.css";
import ownStyles from "./SignupForm.module.css";

export const SignupForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        fullName: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
        .required("No password provided."),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password")], "Пароли не совпадают")
          .required("No password provided."),
        phone: Yup.string().required("A phone number is required"),
        fullName: Yup.string().required("required"),
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

        <p className={ownStyles.agreement}>
          Натискаючи кнопку «Зареєструватися», ви даєте свою згоду на обробку
          персональних даних відповідно до «Політики конфіденційності» та
          погоджуєтесь з «Умовами надання послуг».
        </p>

        <ButtonYellow onClickHandler={() => {}} type="submit">
          Зареєструватися
        </ButtonYellow>
      </Form>
    </Formik>
  );
};
