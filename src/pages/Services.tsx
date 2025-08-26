import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Layout from '../components/layout/Layout'
import ServiceCardOld from '../components/ServiceCardOld'
import WddpCard from '../components/WddpCard'
import IconWebDev from '../assets/images/services/web_development.png'
import IconUIUXDesign from '../assets/images/services/ui_ux_design.png'
import IconSupportMaintenance from '../assets/images/services/support_maintenance.png'
import IconRecruitment from '../assets/images/services/recruitment.png'
import IconSalesForce from '../assets/images/services/salesForce.png'
import IconOracleOBRM from '../assets/images/services/oracle.png'
import IconClinicalSAS from '../assets/images/services/sas.png'
import IconSAPConsultants from '../assets/images/services/sap.png'
import IconQualityAnalysis from '../assets/images/services/quality.png'
import IconBPO from '../assets/images/services/bpo.png'
import IconECommercestores from '../assets/images/services/e-commerce.png'
import IconMobileApplications from '../assets/images/services/mobile_app.png'
import IconB2B from '../assets/images/services/b2b_icon.png'
import IconAIML from '../assets/images/services/ai-ml-icon.png'

export const Services = () => {
  const navigate = useNavigate();
    return (
        <Layout>
            <section className="service_section">
                <div className="container">
                    <div className="row">
                    <div className="w_full">
                        <h1 className="page_title textCenter">Services</h1>
                    </div>          
                    <div className="service_group">
                        <ServiceCardOld
                            title="Web Development"
                            desc="Productive & engaging web solutions for smarter work and improved customer service."
                            src={IconWebDev}
                        />
                        <ServiceCardOld
                            title="UI/UX Design"
                            desc="Sophisticated enterprise Designs with a Professional touch"
                            src={IconUIUXDesign}
                        />
                        <ServiceCardOld
                            title="Mobile Applications"
                            desc="Native, hybrid, and cross-platform mobile apps for consumer-facing and corporate environments."
                            src={IconMobileApplications}
                        />
                        <ServiceCardOld
                            title="E-commerce Stores"
                            desc="integrate and manage relationships with multiple eCommerce market places, and vendors from a single system"
                            src={IconECommercestores}
                        />
                        <ServiceCardOld
                            title="BPO"
                            desc="leading companies symbolizes our commitment toward upholding and maintaining industry leading performance standards."
                            src={IconBPO}
                        />
                        <ServiceCardOld
                            title="Quality Analysis"
                            desc="Quality and performance of a website or any other digital product."
                            src={IconQualityAnalysis}
                        />
                        <ServiceCardOld
                            title="SAP Consultants"
                            desc="We determine clients' business needs, create customized SAP solutions, and smoothly integrate SAP applications with existing IT infrastructure."
                            src={IconSAPConsultants}
                        />
                        <ServiceCardOld
                            title="Clinical SAS"
                            desc="We can help healthcare professionals to meet their business goals, generate great revenue, enhance strategic performance management, and most importantly control costs."
                            src={IconClinicalSAS}
                        />
                        <ServiceCardOld
                            title="Oracle OBRM"
                            desc="Experts in Oracle Communications Billing and Revenue Management (BRM) customization tools, BRM SDK and Developer Center."
                            src={IconOracleOBRM}
                        />
                        <ServiceCardOld
                            title="SalesForce"
                            desc="Highly seasoned and accomplished Salesforce Developers with a strong record of client satisfaction. Adept at explaining highly complex data systems to a wide variety of audiences."
                            src={IconSalesForce}
                        />
                        <ServiceCardOld
                            title="Recruitment"
                            desc="We Analyze job orders to fully understanding client's specific needs and requirements; update job descriptions to meet client's explicit requirements."
                            src={IconRecruitment}
                        />
                        <ServiceCardOld
                            title="Support & Maintenance"
                            desc="Application support and maintenance services are aimed at ensuring that applications are highly available, reliable and stay relevant to current business needs"
                            src={IconSupportMaintenance}
                        />
                        <ServiceCardOld
                            title="B2B Lead Generation"
                            desc="The B2B data refers to anything that can qualify a good sales lead and provides the information you can use to get in touch with them."
                            src={IconB2B}
                        />
                        <ServiceCardOld
                            title="AI/ML Development"
                            desc="Our custom AI/ML development services enable your system to exhibit intelligent thinking, auditory perception, and decision-making capabilities."
                            src={IconAIML}
                        />
                    </div>
                    <div className="hcenter">
                        <Button
                            type="button"
                            text="Contact us"
                            onClick={() => navigate('/contactus')}
                        />
                    </div>
                    </div>
                </div>
                </section>
                <section className="wrapper">
                <div className="area">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div className="container">
                    <div className="welcome_text">
                    <h1 className="head_h1">Web Design & Development Process</h1>
                    </div>
                    <div className="wdp_group">
                    <WddpCard 
                        count="01"
                        title="Meeting"
                        desc="Client Meeting, Client Requirements, Analysis, Collect Data"
                    />
                    <WddpCard 
                        count="02"
                        title="Planning"
                        desc="Project Analysis, Consultation & Research"
                    />
                    <WddpCard 
                        count="03"
                        title="Designing"
                        desc="Wireframes, Design Concepts, Revisions & Finalisation"
                    />
                    <WddpCard 
                        count="04"
                        title="Developing"
                        desc="HTML/CSS, Programming code for custom requirements"
                    />
                    <WddpCard 
                        count="05"
                        title="Testing"
                        desc="Usability Testing verification design quality check approval"
                    />
                    <WddpCard
                        count="06"
                        title="Delivery"
                        desc="We deliver a finished project that meet high standards & exceeds client expectations"
                    />
                    </div>
                </div>
                </div>
            </section>
        </Layout>
    )
}
