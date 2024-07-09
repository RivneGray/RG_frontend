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
        rightSelect={'Післяплатою'}
      />
      {!isCashPayment && (
        <div className={styles.payment_email}>
          <p>Номер поштового відділення</p>
          <input placeholder='Номер поштового відділення *' required />
        </div>
      )}
    </div>
  );
}
