import Layout from "../components/layout/Layout"
import PortfolioCard from "../components/PortfolioCard"
// import PortfolioSection from "../components/PortfolioSection"
import Section from "../components/Section"
import { motion } from "framer-motion"
import { portfolioLists } from "../constants/portfolioLists"

const Portfolio = () => {
    return (
        <Layout>
            {/* <section className="portfolio_section">
                <div className="container">
                    <div className="row">
                        <div className="w_full">
                            <h1 className="page_title textCenter">Portfolio</h1>
                        </div>
                        <PortfolioSection />
                    </div>
                </div>
            </section> */}
            <Section className="section-our-portfolio">
                <div className="our-portfolio-wrapper">
                    <div className="ourportfolio-left">
                        <div className="flex flex-col gap-4">
                            <motion.h2
                                initial={{opacity: 0, translateY: 20}}
                                whileInView={{opacity: 1, translateY: 0}}
                                transition={{ duration: 1 }}  
                            >Our Portfolio</motion.h2>
                            <div className="flex flex-col w-full gap-4">
                                <motion.p 
                                    initial={{opacity: 0, translateY: 30}}
                                    whileInView={{opacity: 1, translateY: 0}}
                                    transition={{ duration: 1 }} 
                                    className="text-xl font-normal w-full">
                                    A showcase of our work across industries, delivering innovative web, mobile, and enterprise solutions that drive real results.
                                </motion.p>
                                <motion.p 
                                    initial={{opacity: 0, translateY: 40}}
                                    whileInView={{opacity: 1, translateY: 0}}
                                    transition={{ duration: 1 }} 
                                    className="text-xl font-normal w-full">
                                    Each project reflects our commitment to quality, innovation, and client success from concept to launch, At Mahasos we ensure every solution is tailored to achieve real business growth.
                                </motion.p>
                            </div>
                        </div>
                    </div>
                    <div className="ourportfolio-right">
                        <PortfolioCard
                            items={portfolioLists}
                        />
                    </div>
                </div>
            </Section>
        </Layout>
    )
}

export default Portfolio