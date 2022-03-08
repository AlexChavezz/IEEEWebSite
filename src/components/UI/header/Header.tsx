import { Link } from 'react-router-dom';
import { Nav } from './Nav';
import { Image } from '../Image';
import IEEELogo from '../../../assets/ieeeTecnmIti3.jpg';
import styles from '../../../styles/headerStyles.module.css';


export const Header = () => {
    return (
        <header
            className={styles.header}
        >
            <section
                className={styles.headerContent}
            >
                <article
                // className={styles.headerLogos}
                >
                    <Link to="/">
                        <Image
                            src={IEEELogo}
                            alt="IEEE-TECNM-ITI3-LOGO"
                            styleClass={styles.headerImage}
                        />
                    </Link>
                </article>
                <Nav />
            </section>
        </header>
    );
}


