import type { ReactNode } from "react";

type CoreCardProps = {
    icon?: string | ReactNode;
    title: string;
}
const CoreCard = ({icon, title} : CoreCardProps) => {
    return (
        <div className="core-card">
            <div className="core-icon">
                {icon}
            </div>
            <h3 className="core-title">{title}</h3>
        </div>
    )
}

export default CoreCard