import classNames from 'classnames'
import styles from './ButtonYellow.module.css'

export const ButtonYellow = ({children}) => {
    return (
        <button className={classNames(styles.button, styles.buttonYellow)}>{children}</button>
    )
}