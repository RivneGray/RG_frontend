import { useField } from "formik";
import styles from "./CustomField.module.css";
import classNames from "classnames";

export const CustomField = ({ icon, placeholder, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={props.name} className={styles.containerField}>
        <img src={icon} alt="" className={styles.icon}/>
        <div className={styles.vertical} />
        <div className={styles.wrapperField}>
          <input {...field} {...props} className={styles.input} id={props.name}/>
          <span className={classNames(styles.placeholder, {
            [styles.isSetValue]: !!field.value
          })}>{placeholder}</span>
        </div>
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};
