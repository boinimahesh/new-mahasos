import type { ReactNode } from "react";
import { motion } from "framer-motion";

type ButtonProps = {
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    text: string;
    icon?: string | ReactNode;
    outline?: boolean;
    secondary?: boolean;
    white?: boolean;
    dark?: boolean;
    danger?: boolean;
    link?: boolean;
    small?: boolean;
}

const Button = ({type, text, className, disabled, onClick, link, dark, white, secondary, danger, icon, outline, small} : ButtonProps) => {
    return (
        <motion.button 
            whileHover={{ scale: 1.01, boxShadow: "0px 5px 8px rgba(0,0,0,0.3)"}}
            whileTap={{ scale: 0.95}}
            transition={{ type: 'spring', stiffness: 300}}
            type={type}
            className={`btn ${link ? 'btn-link' : danger ? 'btn-danger' : white ? 'btn-white' : dark ? 'btn-dark' : secondary ? 'btn-secondary' : 'btn-primary'} ${outline ? 'btn-outline' : ''} ${small ? 'btn-small' : ''} ${className ? className : ''}`}
            disabled={disabled}
            onClick={onClick}
        >
            {icon && (
                <span className="btn-icon">{icon}</span>
            )}
            <span className="btn-text">{text}</span>
        </motion.button>
    )
}

export default Button