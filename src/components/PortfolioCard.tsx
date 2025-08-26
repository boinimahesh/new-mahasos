import { motion } from "framer-motion";
type Item = {
    image: string;
    title: string;
    lists: string[];
}

type PortfolioCardProps = {
    items: Item[];
}

const PortfolioCard = ({ items } : PortfolioCardProps) => {
    return (
        <div className="portfolio-wrapper">
            {items.map((item, index) => (
                <motion.div 
                    initial={{ opacity: 0, translateY: index * 5}}
                    whileInView={{ opacity: 1, translateY: 0}}
                    transition={{ duration: 1}}
                    className="portfolio-card" 
                    key={index}
                >
                    <motion.div
                        className="portfolio-item-image">
                        <motion.img 
                            initial={{ opacity: 0, translateY: 20}}
                            animate={{ opacity: 1, translateY: 0}}
                            src={item.image} alt={item.title} 
                        />
                    </motion.div>
                    <div className="portfolio-item-details">
                        <motion.h3
                            initial={{ opacity: 0, translateY: 20}}
                            animate={{ opacity: 1, translateY: 0}} 
                            className="portfolio-item-detail-title">{item.title}</motion.h3>
                        <motion.ul
                            initial={{ opacity: 0, translateY: 30}}
                            animate={{ opacity: 1, translateY: 0}} 
                            className="portfolio-item-detail-lists">
                            {item.lists.map((item, index) => (
                                <motion.li 
                                    initial={{ opacity: 0, translateY: index * 10}}
                                    whileInView={{ opacity: 1, translateY: 0}}
                                    className="portfolio-item-detail-list-item" 
                                    key={index}
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

export default PortfolioCard