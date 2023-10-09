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
    return !values.confirmConsent
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
      {({values}) => (
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
