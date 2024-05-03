import styles from './UserAgreement.module.css';
import { tableOfContents, tableOfContentItems, terms } from './constants';

export const UserAgreement = () => {
  return (
    <div className={styles.wrapper}>
      <h1>
        <span>Угода користувача</span>
      </h1>
      <h2>
        <span>
          Положення про обробку і захист персональних даних у базах персональних
          даних, володільцем яких є продавець
        </span>
      </h2>

      <div className={styles.table_of_products}>
        <h3>Зміст</h3>
        <ol>
          {tableOfContents.map((row) => (
            <li key={row}>
              <a href={Object.values(row)[0]}>{Object.keys(row)[0]}</a>
            </li>
          ))}
        </ol>
      </div>

      <main>
        <ol>
          {tableOfContentItems.map((listItem) => {
            return (
              <li key={listItem.header} id={listItem.anchor_id}>
                <span>{listItem.header}</span>

                <ol>
                  {listItem.sublist.map((subListItem, index) => {
                    return (
                      <li>
                        {subListItem.sublistHeader}
                        {listItem.anchor_id === 'general_concepts' &&
                        index === 0
                          ? terms.map((term) => {
                              return (
                                <p>
                                  <span>{Object.keys(term)[0]}</span> —{' '}
                                  {Object.values(term)[0]}
                                </p>
                              );
                            })
                          : ''}
                        {Object.keys(subListItem).includes('sublist') ? (
                          <ul>
                            {subListItem.sublist.map((x) => (
                              <li>{x}</li>
                            ))}
                          </ul>
                        ) : (
                          ''
                        )}
                      </li>
                    );
                  })}
                </ol>
              </li>
            );
          })}
        </ol>
      </main>
    </div>
  );
};
