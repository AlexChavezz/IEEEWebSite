import { NavLink } from "react-router-dom";
import styles from '../../../styles/headerStyles.module.css';

interface NavItemProps {
    title: string,
    navigateTo?: string,
    url?: string,
    listStyles: string, 
    onClick?: () => void,
    onHiddeList: () => void 

}

export const NavItem = ({ title, navigateTo, url, onClick, listStyles , onHiddeList}: NavItemProps) =>
    <li
        className={ listStyles }
        onClick={onClick}
    >
        {
            navigateTo ?
                <NavLink
                    to={navigateTo}
                    className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}
                    onClick={ onHiddeList }
                > {title} </NavLink>
                :
                    title
        }
        {
            url &&
            <img src={url} alt="name " />
        }
    </li>