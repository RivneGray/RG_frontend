import { ButtonYellow } from "../../ButtonYellow/ButtonYellow";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { CustomField } from "../CustomField/CustomField";
import emailFormIcon from "../../../icons/emailForm.svg";
import passwordFormIcon from "../../../icons/passwordForm.svg"
import styles from "./SigninForm.module.css";

export const SigninForm = () => {
  return (
    <Formik
      initialValues={{
          email: "",
          password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .required("No password provided.")
          .min(8, "Password is too short - should be 8 chars minimum.")
          .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className={styles.form}>
        <CustomField icon={emailFormIcon} name="email" type="email" placeholder="Електронна пошта" />

        <CustomField icon={passwordFormIcon} name="password" type="password" placeholder="Пароль" />

        {/* <MyCheckbox name="acceptedTerms">
              I accept the terms and conditions
            </MyCheckbox> */}

        <ButtonYellow onClickHandler={() => {}} type="submit">
          Вхід
        </ButtonYellow>
      </Form>
    </Formik>
  );
};
