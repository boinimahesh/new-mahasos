import { Link, NavLink, useLocation } from "react-router-dom"
import Button from "../Button"
import HandWaveIcon from "../svg/HandWaveIcon"
import Navbar from "./Navbar"
import { AnimatePresence, motion } from "framer-motion"
import LogoImage from "../../../public/logo.svg"
import LogoIcon from "../../../public/logo-icon.svg"
import { useState } from "react"
import useSticky from "../../hooks/sticky.hook"
import CloseIcon from "../svg/CloseIcon"
import useResponsive from "../../hooks/responsive.hook"
import MenuBarIcon from "../svg/MenuBarIcon"

const navLists = [
    {
        text: "Home",
        link: "/",
    },
    {
        text: "About",
        link: "/about",
    },
    {
        text: "Our Team",
        link: "/team",
    },
    {
        text: "Portfolio",
        link: "/portfolio"
    },
    {
        text: "Services",
        link: "/services"
    },
    {
        text: "AI/ML",
        link: "/artificialIntelligence"
    },
    {
        text: "BPO",
        link: "/bpo"
    },
    {
        text: "b2bleadgeneration",
        link: "/b2bleadgeneration"
    },
    {
        text: "Jobs",
        link: "/jobs"
    },
    {
        text: "Contact",
        link: "/contactus"
    }
    


    // {
    //     text: "Showcase",
    //     link: "/showcase",
    // },
    // {
    //     text: "Offerings",
    //     link: "/offerings",
    // },
    // {
    //     text: "BPO",
    //     link: "/bpo",
    // },
    // {
    //     text: "Products",
    //     link: "/products",
    // },
    // {
    //     text: "Opportunities",
    //     link: "/opportunities",
    // },
    // {
    //     text: "Contact",
    //     link: "/contact",
    // },
]
const menuVariants = {
    hidden: {
        x: '100%',
        // opacity: 0,
        transition: { duration: 0.3 },
    },
    visible: {
        x: 0,
        // opacity: 1,
        transition: { duration: 0.1 },
    },
};
const Header = () => {
    const { isSticky } = useSticky();
    const { isMobile } = useResponsive();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    return (
        <>
            <motion.header 
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`header-wrapper ${location.pathname === "/" ? 'header-home' : ''} ${isSticky ? 'header-sticky' : ''}`}
            >
                <div className="container">
                    <div className="header-main-wrp">
                        <div className="header-left">
                            <Link to="/">
                                <img src={LogoIcon} alt="Logo" />
                            </Link>
                        </div>
                        <div className="header-right">
                            {isMobile ? (
                                <Button
                                    type="button" 
                                    link 
                                    text="" 
                                    className=""
                                    icon={<MenuBarIcon />}
                                    onClick={()=>setIsMenuOpen(state => !state)}
                                />
                            ) : (
                                <>
                                    <Navbar navLists={navLists} />
                                    <Button type="button" text="Let’s Talk" className="btn-top-lettalk" icon={<HandWaveIcon />} />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </motion.header>
            <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={menuVariants}
                            className="navbar-slide-wrp"
                        >
                            <div className="navbar-slide-main">
                                <div className="flex items-center justify-between w-full">
                                    <Link to="/home" onClick={() => setIsMenuOpen(false)}>
                                        <img src={LogoImage} alt="Mahasos" />
                                    </Link>
                                    <Button
                                        type="button" 
                                        link
                                        text="" 
                                        icon={<CloseIcon />}
                                        onClick={()=>setIsMenuOpen(state => !state)}
                                    />
                                </div>
                                <Navbar navLists={navLists} onMenuCloseClick={() => setIsMenuOpen(false)} />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </>
    )
}

export default Header