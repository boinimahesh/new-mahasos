import { NavLink, useLocation } from 'react-router-dom'
import useResponsive from '../../hooks/responsive.hook';
import { useState } from 'react';
import NavArrowIcon from '../svg/NavArrowIcon';
import { AnimatePresence, motion } from 'framer-motion';

type SubmenuItem = {
    link: string;
    text: string;   
}

type Item = {
    link?: string;
    text: string;
    submenu?: SubmenuItem[];
}

type NavbarProps = {
    navLists: Item[];
    onMenuCloseClick?: () => void;
}

const Navbar = ({navLists, onMenuCloseClick} : NavbarProps) => {
    const { isMobile } = useResponsive();
    const location = useLocation();
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const toggleSubMenu = (menu: string) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };
    const isActive = (link?: string) => link && location.pathname === link;

    const isDropdownActive = (submenu?: { text: string; link: string }[]) => {
        if (!submenu) return false;
        return submenu?.some(sub => location.pathname === sub.link) ?? false;
    };
    return (
        <nav className="nav-wrapper">
            <ul className="nav-items">
                {navLists.map((item, index) => {
                    const active = isActive(item.link) || isDropdownActive(item.submenu);
                    return(
                        <li 
                            className={`nav-item ${item.submenu ? 'nav-item-dropdown' : ''}`} 
                            key={index} 
                            onMouseEnter={()=>setOpenMenu(item.text)}
                            onMouseLeave={()=>setOpenMenu(null)}
                        >
                            {item.submenu ? (
                                    <>
                                        <button 
                                            type="button"
                                            className={`nav-item-link ${active ? 'active' : ''}`}
                                            onClick={() => toggleSubMenu(item.text)}
                                            aria-expanded={openMenu === item.text}
                                            aria-controls={`submenu-${item.text}`}
                                        >
                                            {item.text}
                                            <motion.span 
                                                animate={{ rotate: openMenu === item.text ? 180 : 0}}
                                                transition={{ duration: 0.2 }}
                                                className="nav-item-arrow"
                                            ><NavArrowIcon /></motion.span>
                                        </button>
                                        <AnimatePresence>
                                            {openMenu === item.text && (
                                                <ul className="nav-item-dropdown-menu">
                                                    {item.submenu.map((sub) => (
                                                        <li key={sub.text}>
                                                            <NavLink 
                                                                to={sub.link} 
                                                                className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}
                                                                onClick={ isMobile ? onMenuCloseClick : undefined}
                                                            >
                                                                {sub.text}
                                                            </NavLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </AnimatePresence>
                                    </>
                                ) : (
                                <>
                                    <NavLink 
                                        to={item.link ?? "#"} 
                                        className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}
                                        onClick={ isMobile ? onMenuCloseClick : undefined}
                                    >
                                        {item.text}
                                    </NavLink>
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