import { useState } from 'react';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import styles from './ProductPayment.module.css';

export function ProductPayment() {
  const [isCashPayment, setIsCashPayment] = useState(true);
  return (
    <div>
      <CustomSelect
        boolStateParam={isCashPayment}
        onHandleChange={setIsCashPayment}
        leftSelect={'Готівкою або карткою при отриманні'}
        rightSelect={'Банківською картою онлайн'}
      />
      {!isCashPayment && (
        <div className={styles.payment_email}>
          <p>Получить чек по E-mail</p>
          <input type='email' placeholder='E-mail *' required />
        </div>
      )}
    </div>
  );
}
