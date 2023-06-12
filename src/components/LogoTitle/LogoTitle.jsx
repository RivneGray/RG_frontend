import styles from './LogoTitle.module.css';

export function LogoTitle() {
    return (
        <div>
            <h1 className={styles.logoTitle}>RivneGray</h1>
            <p className={styles.logoTitleBlue}>
                <span className={styles.lineBlue}/>
                Настольные игры
                <span className={styles.lineBlue}/>
            </p>
        </div>
    )
}