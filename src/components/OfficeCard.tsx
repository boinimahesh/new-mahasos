import type { ReactNode } from "react";
import { motion } from "framer-motion";
import LocationIcon from "./svg/LocationIcon";
import PhoneIcon from "./svg/PhoneIcon";
import MailIcon from "./svg/MailIcon";

type item = {
    title: string;
    icon?: string | ReactNode;
    address?: string;
    mail?: string;
    mobileNumber?: string;
}

type OfficeCardProps = {
    officeLists: item[];
}
const OfficeCard = ({ officeLists } : OfficeCardProps) => {
    return (
        <div className="office-grops">
            {officeLists.map((item, index) => (
                <motion.div 
                    initial={{ opacity: 0, translateY: index * 20 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 1}}
                    className="office-card" 
                    key={index}
                >
                    {item.icon && (
                        <div className="office-item-icon">
                            {item.icon}
                        </div>
                    )}
                    <div className="office-item-details">
                        <motion.h3 className="office-item-title">
                            {item.title}
                        </motion.h3>
                        <div className="office-item-address">
                            <motion.div className="office-item-address-item">
                                <span className="office-item-address-icon"><LocationIcon /></span>
                                {item.address}
                            </motion.div>
                            <motion.div className="office-item-address-item">
                                <span className="office-item-address-icon"><MailIcon /></span>
                                <a className=" hover:text-primary" href={`mailto:${item.mail}`}>{item.mail}</a>
                            </motion.div>
                            {item.mobileNumber && (
                                <motion.div className="office-item-address-item">
                                    <span className="office-item-address-icon"><PhoneIcon width="24" height="24" /></span>
                                    <a className=" hover:text-primary" href={`tel:${item.mobileNumber}`}>{item.mobileNumber}</a>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

export default OfficeCard