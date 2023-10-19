import { useOutletContext } from "react-router-dom";
import { Hr } from "../../../Hr/Hr";
import styles from "./UserContacts.module.css";
import { UserContactsItem } from "./UserContactsItem/UserContactsItem";
import { userApi } from "../../../../api/userAPI";
import { useMutation } from "@tanstack/react-query";

export const UserContacts = () => {
  const [data] = useOutletContext();

  const {
    mutate: mutateAsyncPhone,
    error: errorPhone,
    isError: isErrorPhone,
    isLoading: isLoadingPhone,
  } = useMutation({
    mutationFn: (token, value) => userApi.changePhone(token, value),
  });

  return (
    <article className={styles.leftSection}>
      <h3>Контактні дані</h3>
      <Hr />
      <div className={styles.content}>
        <UserContactsItem initValue={data.firstName} title={"Фамілія, Ім’я"} />
        <UserContactsItem
          initValue={data.phone}
          title={"Контактний телефон"}
          mutateAsyncPhone={mutateAsyncPhone}
          isLoadingPhone={isLoadingPhone}
        />
        {isErrorPhone && <p>{errorPhone.message}</p>}
        <UserContactsItem initValue={data.email} title={"E-mail"} />
      </div>
    </article>
  );
};
