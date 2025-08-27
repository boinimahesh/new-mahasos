import type { ReactNode } from "react"
import { motion } from "framer-motion"

type SectionProps = {
    children: ReactNode;
    className?: string;
}

const Section = ({children, className} : SectionProps) => {
    return (
        <motion.section
            animate={{ opacity: 0, translateY: -50 }}
            whileInView={{ opacity: 1, translateY: 0 }} 
            className={`section-wrapper ${className ? className : ''}`}
        >
            <div className="container">
                <div className="section-main">{children}</div>
            </div>
        </motion.section>
    )
}

export default Section