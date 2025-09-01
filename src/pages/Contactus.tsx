import ContactForm from '../components/ContactForm'
import Layout from '../components/layout/Layout'
import OfficeCard from '../components/OfficeCard'
import Section from '../components/Section'
import { motion } from 'framer-motion'
import { officeLists } from '../constants/officeLists'

const Contactus = () => {
    return (
        <Layout>
            <section className="bpo_section">
                <div className="container">
                    <div className="row">
                    <div className="w_full">
                        <h1 className="page_title textCenter">Contact us</h1>
                    </div>          
                    </div>
                    <div className="row mb5">
                    <div className="w_8 mx-auto">
                        <ContactForm />
                    </div>
                    </div>
                </div>
            </section>
            <Section>
                <div className="flex flex-col w-full gap-18">
                    <div className="flex flex-col items-center justify-center text-center gap-4">
                        <motion.h2
                            initial={{opacity: 0, translateY: 20}}
                            whileInView={{opacity: 1, translateY: 0}}
                            transition={{ duration: 1 }}
                        >
                            Our Offices
                        </motion.h2>
                        <motion.p 
                            initial={{opacity: 0, translateY: 30}}
                            whileInView={{opacity: 1, translateY: 0}}
                            transition={{ duration: 1 }} 
                            className="text-xl font-normal">
                            Connecting with clients worldwide through our local expertise.
                        </motion.p>
                    </div>
                    <OfficeCard officeLists={officeLists} />
                </div>
            </Section>
        </Layout>
    )
}

export default Contactus