import { Image } from '../Image';
import FacebookLogo from '../../../assets/icons8-facebook-nuevo.svg';
import InstagramLogo from '../../../assets/icons8-instagram.svg';
import styles from '../../../styles/footerStyles.module.css';

export const SocialNetworks = () => {
    return (
        <article
            className={styles.socialContainer}
        >
            <a
                href="https://www.facebook.com/ieeeiti3"
                className={styles.socialLink}
                target="_blank"
            >
                <Image
                    src={FacebookLogo}
                    alt="facebok-logo"
                    styleClass={styles.socialImage} />
            </a>
            <a
                href="https://www.instagram.com/ieee_tecnm_iti3/"
                className={styles.socialLink}
                target="_blank"
            >
                <Image
                    src={InstagramLogo}
                    alt="instagram-logo"
                    styleClass={styles.socialImage}
                />
            </a>
        </article>
    )
}