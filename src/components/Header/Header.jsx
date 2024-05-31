import { ButtonYellow } from '../ButtonYellow/ButtonYellow';
import { Logo } from '../Logo/Logo';
import styles from './Header.module.css';
import { Search } from '../Search/Search';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as ListIcon } from '../../icons/list.svg';
import { HeaderNav } from './HeaderNav/HeaderNav';

export const Header = function () {
  return (
    <header className={styles.header}>
      <div className={styles.up}>
        <Logo />
        <div className={styles.containerInfo}>
          <div className={styles.infoLeft}>
            <span>м. Рівне, вул. Чорновола, 10</span>
            <span>+38 (097) 000-00-00 </span>
          </div>

          <div className={styles.infoRight}>
            <NavLink to='/delivery-payment'>Доставка та оплата</NavLink>
            <span>Про нас</span>
            <span>Зворотний зв'язок</span>
          </div>
        </div>
      </div>
      <div className={styles.down}>
        <div className={styles.containerButton}>
          <Link to='/catalog'>
            <ButtonYellow>
              <ListIcon />
              Каталог товарів
            </ButtonYellow>
          </Link>
        </div>

        <Search />

        <div className={styles.downRight}>
          <HeaderNav />
        </div>
      </div>
    </header>
  );
};
