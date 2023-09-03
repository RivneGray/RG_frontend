import { Hr } from "../../../Hr/Hr";
import stylesUserContacts from "../UserContacts/UserContacts.module.css";

export const DeliveryAddresses = () => {
  return (
    <article className={stylesUserContacts.leftSection}>
      <h3>Адреса доставки</h3>
      <Hr />
      <div className={stylesUserContacts.content}></div>
    </article>
  );
};
