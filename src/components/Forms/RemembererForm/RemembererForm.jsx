import { ButtonYellow } from "../../ButtonYellow/ButtonYellow";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { CustomField } from "../CustomField/CustomField";
import emailFormIcon from "../../../icons/emailForm.svg";
import styles from "..//SigninForm/SigninForm.module.css";

export const RemembererForm = () => {

  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
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
        <ButtonYellow onClickHandler={() => {}} type="submit">
            Надіслати новий пароль
        </ButtonYellow>
      </Form>
    </Formik>
  );
};
