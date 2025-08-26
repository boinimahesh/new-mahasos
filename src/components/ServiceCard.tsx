import { motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import Button from "./Button";
import HandWaveIcon from "./svg/HandWaveIcon";

type Item = {
    icon?: string | ReactNode;
    title: string;
    subtitle: string;
}

type ServiceCardProps = {
    items: Item[];
}

const ServiceCard = ({items} : ServiceCardProps ) => {
    const [hoverCard, setHoverCard]  = useState<number | null>(null);
    return (
        <div className="service-wrapper">
            {items.map((item, index) => (
                <motion.div
                    initial={{ opacity: 0, translateY: index * 10 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 1}}
                    key={index}
                    className="service-card"
                    onMouseEnter={() => setHoverCard(index)}
                    onMouseLeave={() => setHoverCard(null)}
                >
                    <div className="service-item-content">
                        <div className="service-item-icon">{item.icon}</div>
                        <div className="service-item-text">
                            <motion.h3
                                className="service-item-text-title"
                            >
                                {item.title}
                            </motion.h3>
                            <motion.p className="service-item-text-subtitle">{item.subtitle}</motion.p>
                        </div>
                    </div>
                        {hoverCard === index && (
                    <div className="service-item-action">
                            <Button 
                                type="button" 
                                text="Get a Free Quote" 
                                icon={<HandWaveIcon />}
                                small 
                            />
                    </div>
                        )}
                </motion.div>
            ))}
        </div>
    )
}

export default ServiceCard