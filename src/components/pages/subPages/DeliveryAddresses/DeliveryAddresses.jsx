// import { useOutletContext } from "react-router-dom";
import { Hr } from "../../../Hr/Hr";
import stylesUserContacts from "../UserContacts/UserContacts.module.css";

export const DeliveryAddresses = () => {
  // const [data] = useOutletContext();
  return (
    <article className={stylesUserContacts.leftSection}>
      <h3>Адреса доставки</h3>
      <Hr />
      <div className={stylesUserContacts.content}>
      </div>
    </article>
  );
};
