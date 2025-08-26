import { NavLink } from 'react-router-dom'
import useResponsive from '../../hooks/responsive.hook';

type Item = {
    link: string;
    text: string;
}

type NavbarProps = {
    navLists: Item[];
    onMenuCloseClick?: () => void;
}

const Navbar = ({navLists, onMenuCloseClick} : NavbarProps) => {
    const { isMobile } = useResponsive();
    return (
        <nav className="nav-wrapper">
            <ul className="nav-items">
                {navLists.map((item, index) => (
                    <li className="nav-item" key={index}>
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
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;