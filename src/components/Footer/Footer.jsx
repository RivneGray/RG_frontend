import styles from "./Footer.module.css";
import logo from "../../imgs/logo-black.png";
import facebookIcon from "../../icons/iconfacebook.svg";
import instagramIcon from "../../icons/iconinstagram.svg";
import telegramIcon from "../../icons/icontelegram.svg";
import tiktokIcon from "../../icons/icontiktok.svg";

export const Footer = function () {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        м. Рівне, вул. Чорновола, 10 <br />
        (біля ТЦ "Вікторія") <br />
        Ми працюємо: <br />
        Вт-Пт: 11:00 - 22:00 <br />
        Сб-Нд: 11:00 23:00
      </div>
      <div className={styles.middle}>
        <b>Інформація:</b>
        <div>Доставка та оплата</div>
        <div>Обмін і повернення</div>
        <div>Система знижок</div>
        <div>Політика конфіденційності</div>
      </div>
      <div className={styles.right}>
        <img src={logo} alt="logo"/>
        <div className={styles.containerSocNet}>
            <img src={facebookIcon} alt="facebook"/>
            <img src={instagramIcon} alt="instagram"/>
            <img src={telegramIcon} alt="telegram"/>
            <img src={tiktokIcon} alt="tiktok"/>
        </div>
      </div>
    </footer>
  );
};
