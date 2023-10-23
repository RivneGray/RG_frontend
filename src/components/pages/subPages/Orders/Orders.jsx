import { useOutletContext } from "react-router-dom";
import { Hr } from "../../../Hr/Hr";
import stylesUserContacts from "../UserContacts/UserContacts.module.css";

export const Orders = () => {
  const [data] = useOutletContext();
  return (
    <article className={stylesUserContacts.leftSection}>
      <h3>Замовлення</h3>
      <Hr />
      <div className={stylesUserContacts.content}>
        {data.orders.length ? (
          <>{"Content"}</>
        ) : (
          <>{"Ви не зробили ще жодного замовлення"}</>
        )}
      </div>
    </article>
  );
};
