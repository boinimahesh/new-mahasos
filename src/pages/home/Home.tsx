import Button from "../../components/Button";
import Layout from "../../components/layout/Layout"
import Section from "../../components/Section"
import HandWaveIcon from "../../components/svg/HandWaveIcon";
import BirdIcon from "../../components/svg/BirdIcon";
import IdeasDigitalIcon from "../../components/svg/IdeasDigitalIcon";
import { motion } from "framer-motion";
import PortfolioCard from "../../components/PortfolioCard";
import ServiceCard from "../../components/ServiceCard";
import WebDevIcon from "../../components/svg/WebDevIcon";
import MobileAppDevIcon from "../../components/svg/MobileAppDevIcon";
import AIMLDevIcon from "../../components/svg/AIMLDevIcon";
import UIUXDesignIcon from "../../components/svg/UIUXDesignIcon";
import RecruitmentIcon from "../../components/svg/RecruitmentIcon";
import QualityAnalysisIcon from "../../components/svg/QualityAnalysisIcon";
import DevopsIcon from "../../components/svg/DevopsIcon";
import ECommerceSolutionsIcon from "../../components/svg/ECommerceSolutionsIcon";
import BPOIcon from "../../components/svg/BPOIcon";
import SAPConsultingIcon from "../../components/svg/SAPConsultingIcon";
import ClinicalSASIcon from "../../components/svg/ClinicalSASIcon";
import OracleOBRMIcon from "../../components/svg/OracleOBRMIcon";
import SalesforceDevIcon from "../../components/svg/SalesforceDevIcon";
import SupportMaintenanceIcon from "../../components/svg/SupportMaintenanceIcon";
import B2BLeadGenerationIcon from "../../components/svg/B2BLeadGenerationIcon";
import UnityGameDevIcon from "../../components/svg/UnityGameDevIcon";
import { useNavigate } from "react-router-dom";
import PartnersSlider from "../../components/PartnersSlider";

const serviceCardLists = [
    {
        icon: <WebDevIcon />,
        title: "Web Development",
        subtitle: "Smart, scalable, and engaging web platforms.",
    },
    {
        icon: <MobileAppDevIcon />,
        title: "Mobile App Development",
        subtitle: "Native, hybrid & cross-platform mobile experiences.",
    },
    {
        icon: <AIMLDevIcon />,
        title: "AI/ML Development",
        subtitle: "Intelligent automation & smarter decisions.",
    },
    {
        icon: <UIUXDesignIcon />,
        title: "UI/UX Design",
        subtitle: "Elegant, user-centered design for better engagement.",
    },
    {
        icon: <RecruitmentIcon />,
        title: "Recruitment",
        subtitle: "Precise hiring solutions for the right talent.",
    },
    {
        icon: <QualityAnalysisIcon />,
        title: "Quality Analysis",
        subtitle: "Ensuring flawless performance and usability.",
    },
    {
        icon: <DevopsIcon />,
        title: "Devops",
        subtitle: "Automating delivery, boosting efficiency.",
    },
    {
        icon: <ECommerceSolutionsIcon />,
        title: "E-commerce Solutions",
        subtitle: "Unified multi-vendor & marketplace management.",
    },
    {
        icon: <BPOIcon />,
        title: "BPO",
        subtitle: "Efficient outsourcing to streamline operations.",
    },
    {
        icon: <SAPConsultingIcon />,
        title: "SAP Consulting",
        subtitle: "Custom SAP solutions for seamless integration.",
    },
    {
        icon: <ClinicalSASIcon />,
        title: "Clinical SAS",
        subtitle: "Data-driven insights to grow healthcare efficiency.",
    },
    {
        icon: <OracleOBRMIcon />,
        title: "Oracle OBRM",
        subtitle: "Expert BRM customization & optimization.",
    },
    {
        icon: <SalesforceDevIcon />,
        title: "Salesforce Development",
        subtitle: "Tailored Salesforce solutions for better workflows.",
    },
    {
        icon: <SupportMaintenanceIcon />,
        title: "Support & Maintenance",
        subtitle: "Keeping your apps reliable and up-to-date.",
    },
    {
        icon: <B2BLeadGenerationIcon />,
        title: "B2B Lead Generation",
        subtitle: "Identify & connect with high-value prospects.",
    },
    {
        icon: <UnityGameDevIcon />,
        title: "Unity Game Development",
        subtitle: "Identify & connect with high-value prospects.",
    },
]

const portfolioLists = [
    {
        image: "/portfolio/creditsesame.svg",
        title: "Credit Sesame",
        lists: ["React Js", "Laravel"]
    },
    {
        image: "/portfolio/i-love-kickboxing-img.svg",
        title: "ILKB",
        lists: ["Laravel", "Vuejs", "My sql"]
    },
    {
        image: "/portfolio/sitesync-img.svg",
        title: "Sitesync",
        lists: ["Python", "Reactjs", "Mysql"]
    },
    {
        image: "/portfolio/dtr-img.svg",
        title: "DTR",
        lists: ["Nodejs", "Reactjs", "Google Flutter"]
    },
    {
        image: "/portfolio/bpo-solutions-group-img.png",
        title: "BPO Solutions group",
        lists: ["Reactjs"]
    },
    {
        image: "/portfolio/scylex-labs-img.svg",
        title: "Scylex",
        lists: ["Python", "Vuejs"]
    },
    {
        image: "/portfolio/stability-healthcare-img.svg",
        title: "Stability Health Care",
        lists: ["Laravel", "Vuejs", "Open AI"]
    },
    {
        image: "/portfolio/rutahveda-img.svg",
        title: "Rutahveda",
        lists: ["Python", "Reactjs", "Mysql"]
    },
]
const Home = () => {
    const navigate = useNavigate();
    return (
        <Layout>
            <Section className="section-home-banner">
                <div className="flex flex-col items-center h-full md:flex-row w-full gap-8">
                    <div className="flex flex-col w-full md:w-8/12">
                        <div className="flex flex-col w-full gap-7">
                            <motion.h1 
                                initial={{opacity: 0, translateY: 20}}
                                whileInView={{opacity: 1, translateY: 0}}
                                transition={{ duration: 1 }}
                                className="text-52 leading-[3.75rem] md:text-68 md:leading-[5rem] font-heading font-bold"
                            >Transforming Ideas into Digital Reality</motion.h1>
                            <motion.p 
                                initial={{opacity: 0, translateY: 30}}
                                whileInView={{opacity: 1, translateY: 0}}
                                transition={{ duration: 1 }}
                                className="text-28 font-semibold leading-9"
                            >
                                We turn your vision into <br /> powerful, scalable software solutions.
                            </motion.p>
                            <motion.div
                                initial={{opacity: 0, translateY: 40}}
                                whileInView={{opacity: 1, translateY: 0}}
                                transition={{ duration: 1 }} 
                                className="flex items-center mt-3">
                                <Button 
                                    type="button" 
                                    text="Schedule a Call" 
                                    icon={<HandWaveIcon />}
                                    onClick={()=>navigate('/lettalks')}
                                />
                            </motion.div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-end w-full md:w-4/12 h-full">
                        <motion.div
                            initial={{opacity: 0, translateY: 50}}
                            whileInView={{opacity: 1, translateY: 0}}
                            transition={{ duration: 1 }} 
                            className="flex items-center md:pt-20">
                            <IdeasDigitalIcon />
                        </motion.div>
                    </div>
                </div>
            </Section>
            <Section className="section-our-services">
                <div className="ourservices-wrp">
                    <div className="ourservices-left">
                        <div className="flex flex-col gap-4">
                            <motion.h2
                                initial={{opacity: 0, translateY: 20}}
                                whileInView={{opacity: 1, translateY: 0}}
                                transition={{ duration: 1 }}  
                            >Our Services</motion.h2>
                            <div className="flex flex-col gap-4">
                                <motion.p 
                                    initial={{opacity: 0, translateY: 30}}
                                    whileInView={{opacity: 1, translateY: 0}}
                                    transition={{ duration: 1 }} 
                                    className="text-xl font-normal w-full">
                                    We deliver a diverse range of solutions designed to ensure quality, reliability, and timely results.
                                </motion.p>
                                <motion.p 
                                    initial={{opacity: 0, translateY: 40}}
                                    whileInView={{opacity: 1, translateY: 0}}
                                    transition={{ duration: 1 }} 
                                    className="text-xl font-normal w-full">
                                    At Mahasos, we empower businesses worldwide with services that drive growth and efficiency.
                                </motion.p>
                            </div>
                            <motion.div
                                initial={{opacity: 0, translateY: 40}}
                                whileInView={{opacity: 1, translateY: 0}}
                                transition={{ duration: 1 }} 
                                className="flex items-center mt-3">
                                <Button 
                                    type="button" 
                                    text="Get a Free Quote" 
                                    icon={<HandWaveIcon />}
                                    onClick={()=>navigate('/lettalks')}
                                />
                            </motion.div>
                        </div>
                    </div>
                    <div className="ourservices-right">
                        <ServiceCard
                             items={serviceCardLists}
                        />
                    </div>
                </div>
            </Section>
            <Section className="section-our-partners">
                <div className="flex flex-col md:flex-row w-full gap-12 md:gap-8">
                    <div className="flex flex-col gap-4 w-full md:w-[26rem]">
                        <motion.h2
                            initial={{opacity: 0, translateY: 20}}
                            whileInView={{opacity: 1, translateY: 0}}
                            transition={{ duration: 1 }}
                        >Our Valued Partners</motion.h2>
                        <motion.p
                            initial={{opacity: 0, translateY: 30}}
                            whileInView={{opacity: 1, translateY: 0}}
                            transition={{ duration: 1 }} 
                            className="text-xl font-normal w-full">Proudly collaborating with leading companies to deliver exceptional digital solutions.</motion.p>
                    </div>
                    <motion.div
                        initial={{opacity: 0, translateY: 40}}
                        whileInView={{opacity: 1, translateY: 0}}
                        transition={{ duration: 1 }} 
                        className="flex flex-col md:flex-row items-start md:items-center w-full flex-1">
                        <PartnersSlider />
                    </motion.div>
                </div>
            </Section>
            <Section className="section-our-portfolio">
                <div className="our-portfolio-wrapper">
                    <div className="ourportfolio-left">
                        <div className="flex flex-col gap-4">
                            <motion.h2
                                initial={{opacity: 0, translateY: 20}}
                                whileInView={{opacity: 1, translateY: 0}}
                                transition={{ duration: 1 }}  
                            >Our Portfolio</motion.h2>
                            <div className="flex flex-col gap-4">
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
                            <motion.div
                                initial={{opacity: 0, translateY: 40}}
                                whileInView={{opacity: 1, translateY: 0}}
                                transition={{ duration: 1 }} 
                                className="flex items-center mt-3">
                                <Button 
                                    type="button" 
                                    text="schedule a demo" 
                                    icon={<HandWaveIcon />}
                                    onClick={()=>navigate('/lettalks')}
                                />
                            </motion.div>
                        </div>
                    </div>
                    <div className="ourportfolio-right">
                        <PortfolioCard
                             items={portfolioLists}
                        />
                    </div>
                </div>
            </Section>
            <Section
                className="section-ready-to-transform"
            >
                <div className="flex flex-col items-center md:flex-row w-full">
                    <div className="flex flex-col w-full md:w-8/12">
                        <div className="flex flex-col w-full gap-7">
                            <motion.h1
                                initial={{opacity: 0, translateY: 20}}
                                whileInView={{opacity: 1, translateY: 0}}
                                transition={{ duration: 1 }}
                                className="text-52 leading-[3.75rem] md:text-68 md:leading-[5rem] font-heading font-bold"
                            >Ready to Transform Your Idea?</motion.h1>
                            <motion.p
                                initial={{opacity: 0, translateY: 30}}
                                whileInView={{opacity: 1, translateY: 0}}
                                transition={{ duration: 1 }} 
                                className="text-28 font-semibold leading-9">Let’s build powerful, scalable, <br /> and future-ready solutions together.</motion.p>
                            <motion.div
                                initial={{opacity: 0, translateY: 40}}
                                whileInView={{opacity: 1, translateY: 0}}
                                transition={{ duration: 1 }} 
                                className="flex items-center mt-3">
                                <Button 
                                    type="button" 
                                    text="Start your project" 
                                    icon={<HandWaveIcon />}
                                    onClick={()=>navigate('/lettalks')}
                                />
                            </motion.div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full md:w-4/12">
                        <motion.div
                            initial={{opacity: 0, translateY: 50}}
                            whileInView={{opacity: 1, translateY: 0}}
                            transition={{ duration: 1 }} 
                            className="flex items-center md:-ml-20"
                        >
                            <BirdIcon />
                        </motion.div>
                    </div>
                </div>
            </Section>
        </Layout>
    )
}

export default Home