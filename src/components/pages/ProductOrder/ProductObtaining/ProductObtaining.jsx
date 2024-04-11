import styles from './ProductObtaining.module.css';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import { useState } from 'react';

export function ProductObtaining() {
  const [isSelfDelivery, setIsSelfDelivery] = useState(true);
  return (
    <>
      <CustomSelect
        boolStateParam={isSelfDelivery}
        onHandleChange={setIsSelfDelivery}
        leftSelect={'Самовивіз'}
        rightSelect={'Доставка'}
      />
      <div className={styles.obtaining_method}>
        {isSelfDelivery ? (
          <div className={styles.self_delivery}>
            <h3>м. Рівне, вул. Чорновола, 10 (біля ТЦ "Вікторія")</h3>
          </div>
        ) : (
          <div className={styles.delivery}>
            <div className={styles.city_info}>
              <input type='text' placeholder='Город *' required />
              <input type='text' placeholder='Улица *' required />
            </div>
            <div className={styles.home_info}>
              <div className={styles.house_info}>
                <input type='text' placeholder='Будинок *' required />
                <input type='text' placeholder='Будова' />
                <input type='text' placeholder='Корпус' />
              </div>
              <div className={styles.flat_info}>
                <input type='text' placeholder="Під'їзд *" required />
                <input type='text' placeholder='Поверх *' required />
                <input type='text' placeholder='Квартира' />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
