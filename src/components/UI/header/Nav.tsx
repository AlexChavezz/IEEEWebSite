import { useState } from 'react';
import styles from '../../../styles/headerStyles.module.css';
import arrowDown from '../../../assets/expand_more_black_24dp.svg';
import { NavItem } from './NavItem';

export const Nav = () => {

    const [list, setshowList] = useState(false);

    const handleToggleStateList = () => {
        setshowList(!list);
    }
    const hiddeList = () => {
        setshowList(false);
    }

    return (
        <nav>
            <ul className={styles.navList}>
                <NavItem
                    listStyles={styles.navListItem}
                    title="Inicio"
                    navigateTo="/"
                    onHiddeList={hiddeList}
                />
                <NavItem
                    listStyles={styles.navListItem}
                    title="Blog"
                    navigateTo="/blog"
                    onHiddeList={hiddeList}
                />
                <NavItem
                    listStyles={styles.navListItem}
                    title="Sobre IEEE"
                    navigateTo="/ieee"
                    onHiddeList={hiddeList}
                />
                <article>
                    <NavItem
                        listStyles={styles.navListItem}
                        title="Sobre Nosotros"
                        url={arrowDown}
                        onClick={handleToggleStateList}
                        onHiddeList={hiddeList}
                    />
                    {
                        list &&
                        <ul
                            className={styles.secoundListContainer}
                        >
                            <NavItem
                                listStyles={styles.listStylesList}
                                title="Quienes somos?"
                                navigateTo="/aboutus"
                                onHiddeList={hiddeList}
                            />
                            <NavItem
                                listStyles={styles.listStylesList}
                                title="Calendario de Actividades 2022"
                                navigateTo="/calendar"
                                onHiddeList={hiddeList}
                            />
                            <NavItem
                                listStyles={styles.listStylesList}
                                title="Galeria"
                                navigateTo="/galery"
                                onHiddeList={hiddeList}
                            />
                        </ul>
                    }
                </article>
            </ul>
        </nav>
    );
}
