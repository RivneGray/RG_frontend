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
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        passwordRepeat: "",
        phone: "",
        fullName: "",
        check: true,
      }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .required("No password provided.")
          .min(8, "Password is too short - should be 8 chars minimum.")
          .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
        passwordRepeat: Yup.string()
          .required("No password provided.")
          .min(8, "Password is too short - should be 8 chars minimum.")
          .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
        phone: Yup.string()
          .required("A phone number is required")
          .matches(phoneRegExp, "Phone number is not valid"),
        fullName: Yup.string().required("required"),
        check: Yup.boolean().required("required"),
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
          name="passwordRepeat"
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
        
        <CustomCheckbox name={"check"}>
          Я згоден з політикою конфіденційності та умовами надання послуг
        </CustomCheckbox>

        <ButtonYellow onClickHandler={() => {}} type="submit">
          Зареєструватися
        </ButtonYellow>
      </Form>
    </Formik>
  );
};
