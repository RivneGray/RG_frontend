import { Hr } from "../../../Hr/Hr";
import stylesUserContacts from "../UserContacts/UserContacts.module.css";

export const Promotions = () => {
  return (
    <article className={stylesUserContacts.leftSection}>
      <h3>Доступнi акцii</h3>
      <Hr />
      <div className={stylesUserContacts.content}></div>
    </article>
  );
};