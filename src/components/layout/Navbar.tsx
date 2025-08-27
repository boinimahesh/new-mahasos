import { NavLink } from 'react-router-dom'
import useResponsive from '../../hooks/responsive.hook';
import { useState } from 'react';

type SubmenuItem = {
    link: string;
    text: string;   
}

type Item = {
    link: string;
    text: string;
    submenu?: SubmenuItem[];
}

type NavbarProps = {
    navLists: Item[];
    onMenuCloseClick?: () => void;
}

const Navbar = ({navLists, onMenuCloseClick} : NavbarProps) => {
    const { isMobile } = useResponsive();

    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const toggleSubMenu = (menu: string) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };
    const isActive = (link?: string) => location.pathname === link;

    const isDropdownActive = (submenu?: { text: string; link: string }[]) => {
        if (!submenu) return false;
        return submenu.some((sub) => location.pathname === sub.link);
    };
    return (
        <nav className="nav-wrapper">
            <ul className="nav-items">
                {navLists.map((item, index) => {
                    const active = isActive(item.link) || isDropdownActive(item.submenu);
                    return(
                        <li className={`nav-item ${item.submenu ? 'nav-item-dropdown' : ''}`} key={index}>
                            {item.submenu ? (
                                    <>
                                        <button 
                                            type="button"
                                            className={`nav-item-link ${active ? 'active' : ''}`}
                                            onClick={() => toggleSubMenu(item.text)}
                                        >
                                            {item.text}
                                        </button>
                                        {openMenu === item.text && (
                                            <ul className="nav-item-dropdown-menu">
                                                {item.submenu.map((sub) => (
                                                    <li key={sub.text}>
                                                        {isMobile ? (
                                                            <NavLink 
                                                                to={sub.link} 
                                                                className={({ isActive}) => `nav-item-link ${isActive ? 'active' : ''}`}
                                                                onClick={onMenuCloseClick}
                                                            >
                                                                {sub.text}
                                                            </NavLink>
                                                        ) : (
                                                            <NavLink 
                                                                to={sub.link} 
                                                                className={({ isActive}) => `nav-item-link ${isActive ? 'active' : ''}`}
                                                            >
                                                                {sub.text}
                                                            </NavLink>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                ) : (
                                <>
                                    {isMobile ?
                                        <NavLink 
                                            to={item.link} 
                                            className={({ isActive}) => `nav-item-link ${isActive ? 'active' : ''}`}
                                            onClick={onMenuCloseClick}
                                        >
                                            {item.text}
                                        </NavLink>
                                        :
                                        
                                        <NavLink 
                                            to={item.link} 
                                            className={({ isActive}) => `nav-item-link ${isActive ? 'active' : ''}`}
                                        >
                                            {item.text}
                                        </NavLink>
                                    }
                                </>
                            )}
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar;