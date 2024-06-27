import styles from './Footer.module.css';
import logo from '../../imgs/logo-black.png';
import facebookIcon from '../../icons/iconfacebook.svg';
import instagramIcon from '../../icons/iconinstagram.svg';
import telegramIcon from '../../icons/icontelegram.svg';
import tiktokIcon from '../../icons/icontiktok.svg';
import { Link } from 'react-router-dom';

export const Footer = function () {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <span>м. Рівне, вул. Чорновола, 10</span>
        <span>(біля ТЦ "Вікторія")</span>
        <span>Ми працюємо:</span>
        <span>Вт-Пт: 11:00 - 22:00</span>
        <span>Сб-Нд: 11:00 23:00</span>
      </div>
      <div className={styles.middle}>
        <b>Інформація:</b>
        <Link to='/delivery-payment'>Доставка та оплата</Link>
        <Link to='/refund'>Обмін і повернення</Link>
        <Link to='/discount-programme'>Система знижок</Link>
        <Link to='/user-agreement'>Політика конфіденційності</Link>
      </div>
      <div className={styles.right}>
        <img src={logo} alt='logo' />
        <div className={styles.containerSocNet}>
          <Link
            to='https://www.facebook.com/profile.php?id=100088223896658'
            target='_blank'
          >
            <img src={facebookIcon} alt='facebook' />
          </Link>
          <Link
            to='https://www.instagram.com/rivnegray?igsh=M2FraTN4YWJtZGs2'
            target='_blank'
          >
            <img src={instagramIcon} alt='instagram' />
          </Link>
          <Link to='https://t.me/rivnegray' target='_blank'>
            <img src={telegramIcon} alt='telegram' />
          </Link>
          <Link
            to='https://www.tiktok.com/@rivnegray?_t=8nADBvSLBdm&_r=1
'
            target='_blank'
          >
            <img src={tiktokIcon} alt='tiktok' />
          </Link>
        </div>
      </div>
    </footer>
  );
};
