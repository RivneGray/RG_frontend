import styles from './ButtonYellow.module.css'

export const ButtonYellow = ({children}) => {
    return (
        <button className={styles.buttonYellow}>{children}</button>
    )
}