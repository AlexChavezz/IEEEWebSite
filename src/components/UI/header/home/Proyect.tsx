import { Image } from '../../Image';
import styles from '../../../../styles/homePageStyles.module.css';
interface ProyectProps {
    imageSrc: string,
    imageAlt: string,
    proyectTitle: string,
}

export const Proyect = ({ imageSrc, imageAlt, proyectTitle }: ProyectProps) => {
    return (
        <article
            className={styles.sectionProyectItem}
        >
            <div className={styles.imageContainer}>
                <Image src={imageSrc} alt={imageAlt} styleClass={styles.proyectImage} />
            </div>
            <div className={styles.proyectExplanetionContainer}>
                <h3>{proyectTitle}</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis nesciunt accusamus, tempora amet vero, ipsum necessitatibus iure delectus doloremque ratione id rem asperiores totam labore, quidem consequatur provident fugit maxime.</p>
            </div>
        </article>
    );
}