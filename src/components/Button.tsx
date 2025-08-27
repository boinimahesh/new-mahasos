import type { ReactNode } from "react";

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
        <button 
            type={type}
            className={`btn ${link ? 'btn-link' : danger ? 'btn-danger' : white ? 'btn-white' : dark ? 'btn-dark' : secondary ? 'btn-secondary' : 'btn-primary'} ${outline ? 'btn-outline' : ''} ${small ? 'btn-small' : ''} ${className ? className : ''}`}
            disabled={disabled}
            onClick={onClick}
        >
            {icon && (
                <span className="btn-icon">{icon}</span>
            )}
            <span className="btn-text">{text}</span>
        </button>
    )
}

export default Button