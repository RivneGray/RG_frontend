import bannerImage from '../../imgs/banner.png';
import styles from "./Banner.module.css";

export const Banner = () => {
    return (
        <div className={styles.banner}>
            <img src={bannerImage} alt='banner'/>
        </div>
    )
}