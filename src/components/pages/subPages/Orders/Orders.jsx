import { Hr } from "../../../Hr/Hr";
import stylesUserContacts from "../UserContacts/UserContacts.module.css";

export const Orders = () => {
  return (
    <article className={stylesUserContacts.leftSection}>
      <h3>Замовлення</h3>
      <Hr />
      <div className={stylesUserContacts.content}></div>
    </article>
  );
};