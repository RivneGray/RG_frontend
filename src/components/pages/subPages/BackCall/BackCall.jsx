import { Hr } from "../../../Hr/Hr";
import stylesUserContacts from "../UserContacts/UserContacts.module.css";

export const BackCall = () => {
  return (
    <article className={stylesUserContacts.leftSection}>
      <h3>Зворотний зв'язок</h3>
      <Hr />
      <div className={stylesUserContacts.content}></div>
    </article>
  );
};