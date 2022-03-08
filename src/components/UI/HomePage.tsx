import { Image } from '../UI/Image';
import { Section } from '../Section';
import { Proyect } from './header/home/Proyect';
import styles
    from '../../styles/homePageStyles.module.css';
import HomeImage from '../../assets/261447094_102851552257054_3774041928406001459_n.jpg';

export const HomePage = () => {
    return (
        <main
            className={styles.homeMainContentContainer}
        >
            <Image
                src={HomeImage}
                alt="ieee-branch"
                styleClass={styles.homeBannerImage}
            />
            <Section
                className={styles.sectionContainer}
            >
                <h2
                    className={styles.sectionContainerTitle}
                >Nuestros Proyectos</h2>
                {/* Proyect Tagets */}
                <Proyect
                    imageSrc="https://cleventy.com/wp-content/uploads/2020/08/realidad-aumentada-1100x440-1-645x300.jpg"
                    imageAlt="aumented-reality-image"
                    proyectTitle='Realidad Aumentada'
                />

                {/* End Proyect Targets */}
            </Section>
        </main>
    );
}