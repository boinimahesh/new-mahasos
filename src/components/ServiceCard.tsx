import { AnimatePresence, motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import Button from "./Button";
import HandWaveIcon from "./svg/HandWaveIcon";
import { useNavigate } from "react-router-dom";

type Item = {
    icon?: string | ReactNode;
    title: string;
    subtitle: string;
}

type ServiceCardProps = {
    items: Item[];
}

const hoverVariants = {
    hidden: {
        x: 20,
        transition: { duration: 0.3 },
    },
    visible: {
        x: 0,
        transition: { duration: 0.1 },
    },
};

const ServiceCard = ({items} : ServiceCardProps ) => {
    const [hoverCard, setHoverCard]  = useState<number | null>(null);
    const navigate = useNavigate();
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
                    <AnimatePresence>
                        {hoverCard === index && (
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="hidden" 
                                variants={hoverVariants}
                                className="service-item-action"
                            >
                                <Button 
                                    type="button" 
                                    text="Get a Free Quote" 
                                    icon={<HandWaveIcon />}
                                    small 
                                    onClick={() => navigate('/lettalks')}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
        </div>
    )
}

export default ServiceCard