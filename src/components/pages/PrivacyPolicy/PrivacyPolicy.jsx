import styles from './PrivacyPolicy.module.css';

const displayedData = [
  {
    title: 'Яку інформацію ми збираємо?',
    body: [
      "Ми зберігаємо інформацію від вас, коли ви реєструєтеся на нашому сайті, розміщуєте замовлення, підписуєтеся на нашу розсилку або заповнюєте анкету. Під час розміщення замовлення або проходження процедури реєстрації на нашому сайті у відповідних випадках вас можуть попросити ввести ваше ім'я, адресу електронної пошти, поштову адресу або номер телефону. Однак ви можете відвідувати наш сайт анонімно. Як і більшість веб-сайтів ми використовуємо cookie-файли, щоб збирати загальну інформацію про відвідувачів, а також відстежувати відвідування нашого сайту.",
    ],
  },
  {
    title: 'Як ми використовуємо вашу інформацію?',
    body: [
      'Будь-яка інформація, яку ми отримуємо від вас, може бути використана одним із наступних способів:',
    ],
    sublist: [
      'Для визначення ваших потреб (ваша інформація допомагає нам ефективніше реагувати на ваші індивідуальні потреби)',
      "Для покращення нашого веб-сайту (ми постійно прагнемо покращити пропозиції нашого сайту, що базуються на зворотному зв'язку та інформації, отриманій від вас)",
      'Для підвищення якості обслуговування клієнтів (ваша інформація допомагає нам ефективніше відповідати на запити клієнтів та здійснювати технічну підтримку)',
      'Для обробки транзакцій (ми можемо передавати чи продавати інформацію третім сторонам у маркетингових чи інших цілях без вашої згоди)',
      'Для періодичного надсилання листів електронною поштою (адреса електронної пошти, яку ви надаєте для обробки замовлення, буде використана тільки для надсилання вам інформації та оновлень, що стосуються вашого замовлення)',
    ],
  },
  {
    title: 'Як ми захищаємо вашу інформацію?',
    body: [
      'Ми реалізуємо низку заходів безпеки для захисту вашої особистої інформації, коли ви розміщуєте замовлення або працюєте з вашою особистою інформацією. Ми пропонуємо використання безпечного сервера. Вся конфіденційна/кредитна інформація передається за допомогою протоколу захисту інформації "Secure Socket Layer" (SSL), а потім у закодованому вигляді надходить до бази даних нашої платіжної системи. Доступ до цієї інформації мають лише особи, які уповноважені спеціальними правами доступу до таких систем та зобов\'язуються зберігати цю інформацію в таємниці. Після проведення транзакції інформація про ваші кредитні картки, номери соціального страхування, фінансові документи та інша інформація не зберігатиметься на наших серверах.',
    ],
  },
  {
    title: 'Чи ми використовуємо cookie-файли?',
    body: [
      "Cookies - це невеликі файли, які сайт або його постачальник послуг з вашого дозволу надсилає через веб-браузер на жорсткий диск вашого комп'ютера, що дозволяє сайтам або постачальникам послуг пізнавати ваш браузер, збирати та запам'ятовувати певну інформацію.",
      "Так, ми використовуємо cookie-файли, що дозволяє нам запам'ятовувати та обробляти інформацію про товари у вашому кошику, розпізнавати та зберігати ваші налаштування для майбутніх відвідувань, стежити за рекламою та збирати загальні дані про трафік та взаємодії сайту, щоб покращити інструменти та роботу сайту. Ми маємо право укласти договір з незалежними (сторонніми) постачальниками послуг, щоб краще розуміти потреби відвідувачів нашого сайту.",
      'Дані постачальники послуг не мають права використовувати інформацію, зібрану від нашого імені, за винятком випадків, що стосуються ведення та покращення нашої комерційної діяльності.',
    ],
  },
  {
    title: 'Чи ми розголошуємо якусь інформацію третім особам?',
    body: [
      "Ми не продаємо, не обмінюємо або іншим чином передаємо вашу особисту інформацію третім особам, крім тих, хто користується довірою третіх осіб, які допомагають нам у роботі нашого веб-сайту, у веденні комерційної діяльності або обслуговуванні клієнтів, поки вищезазначені особи зобов'язуються зберігати конфіденційність цієї інформації.",
      "У разі участі в Бонусній програмі та надання Вами такої згоди, тобто. якщо ви відзначили чекбокс «Приймаю Правила участі у Бонусній програмі «Планета Ігор» при заповненні Анкети на Сайті, ми надаємо Партнерам лише ті дані, які необхідні для участі у Бонусній програмі та надання Вам інших послуг, пов'язаних із придбанням товарів у рамках Бонусної програми.",
      'Ми також маємо право розкрити вашу інформацію, якщо такі дії відповідають поточному законодавству України та політиці сайту, або провадяться з метою захисту прав, власності чи безпеки сайту чи третіх осіб. Однак, ваша інформація не особистого характеру може бути надана третім особам у маркетингових, рекламних чи інших цілях.',
    ],
  },
];

export const PrivacyPolicy = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Політика конфіденційності</h1>
      <div>
        {displayedData.map((item) => {
          return (
            <div key={item.body}>
              <h4>{item.title}</h4>
              <div>
                {item.body.map((paragraph) => {
                  return (
                    <div key={paragraph}>
                      <p>{paragraph}</p>
                      {Object.keys(item).includes('sublist') ? (
                        <ul>
                          {item.sublist.map((x) => (
                            <li key={x}>{x}</li>
                          ))}
                        </ul>
                      ) : (
                        ''
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
