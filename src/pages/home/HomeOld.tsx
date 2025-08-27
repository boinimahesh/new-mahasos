import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import ContactForm from '../../components/ContactForm'
import JoinOurTeamSection from '../../components/joinOurTeamSection'
import Layout from '../../components/layout/Layout'
import PlaceSection from '../../components/PlaceSection'
import WddpCard from '../../components/WddpCard'
import useResponsive from '../../hooks/responsive.hook'
import SixJulyLogoImg from '/6july-logo.svg?url';
import UnityGameDevImg from '../../assets/images/game-svg.svg?url';
import UnityGameLogoImg from '../../assets/images/unity-game-logo.jpg';
import CoreCard from '../../components/CoreCard'
import ThingsDoneIcon from '../../components/svg/ThingsDoneIcon'
import MoveFastIcon from '../../components/svg/MoveFastIcon'
import TogetherIcon from '../../components/svg/TogetherIcon'
import WorkSmartIcon from '../../components/svg/WorkSmartIcon'
import SimplifyIcon from '../../components/svg/SimplifyIcon'
import HumbleIcon from '../../components/svg/HumbleIcon'
import HaveFunIcon from '../../components/svg/HaveFunIcon'
import ServiceHomeCard from '../../components/ServiceHomeCard'
import ProductsSlider from '../../components/ProductsSlider'
import HomeBanner from '../../components/HomeBanner'

const HomeOld = () => {
    const navigate = useNavigate();
    const {isMobile} = useResponsive();
    return (
        <Layout>
            <HomeBanner />
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
                    <h1 className="head_h1">Welcome to MahaSOS</h1>
                    <p>In a rapidly evolving digital landscape, your business needs a technology partner that can deliver across multiple domains. Our team is equipped with the expertise to handle all your web and mobile development needs, as well as advanced AI and ML applications, ensuring that you stay ahead of the competition.</p>
                    <div className="flex items-center justify-center mt-5">
                        <Button
                            type="button"
                            secondary
                            text="Hire Our Team"
                            onClick={() => navigate('/hire-our-team')}
                        />
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="section_ourservice">
                <div className="cubebg">
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                </div>
                <div className="container">
                <div className="welcome_text">
                    <h1 className="head_h1">Our Services</h1>
                    <p>With a huge portfolio of services that we provide, we assure our clients quality services and timely engagements. MahaSOS provides the following benefits to its customers globally.</p>
                </div>
                <div className="osgroup">
                    <ServiceHomeCard
                    title="Web Development"
                    desc="A proper mix of creativeness and functionality for a website can boost up your online presence. offers custom-built web development service based on the client requirement and business needs."
                    />
                    <ServiceHomeCard 
                    title="Mobile Applications"
                    desc="With more and more users willing to use application while on the move, mobile applications have become a trend and are in great demand. Companies today develop mobile application"
                    />
                    <ServiceHomeCard 
                    title="SalesForce"
                    desc="Emphasize the advantages of using Salesforce, including: Increased Efficiency: Streamlining business processes and workflows. Improved Customer Relationships: Building and maintaining strong customer connections. Scalability: Adapting to the changing needs of your business."
                    />
                    <ServiceHomeCard 
                    title="Quality Analysis"
                    desc="Quality analysis starts with defining standards and requirements that a product or service must meet. These can be industry standards, regulatory requirements, or specific criteria set by the organization."
                    />
                    <ServiceHomeCard 
                    title="DevOps"
                    desc="DevOps encourages close collaboration and communication between development and operations teams. This collaboration helps break down silos and promotes shared responsibility for the entire software delivery lifecycle."
                    />
                    <ServiceHomeCard 
                    title="Recruitment"
                    desc="Efficient recruitment is essential for the success of an organization as it ensures that the right talent is brought on board, contributing to the company's growth and success. We use various tools and technologies, including applicant tracking systems (ATS), to streamline and enhance the recruitment process."
                    />
                </div>
                </div>
            </section>
            <section className="unity-game-dev-section">
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
                        <div className="row">
                        <div className={isMobile ? 'w_12 hcenter textCenter mb5' : 'w_7 vcenter'}>
                            <h1 className="head_h1">Unity Game Developers</h1>
                            <p className="mx-auto">A Unity developer uses the Unity game engine to create interactive 2D and 3D experiences, such as video games, simulations, and VR experiences.</p>
                            <div className="unity-game-logo textCenter">
                            <img src={UnityGameLogoImg} alt="Unity Game Developers" className="img-fluid" />
                            </div>
                        </div>
                        <div className={isMobile ? 'w_12 vbottom mb--40' : 'w_5 vbottom mb--40'}>
                            <img src={UnityGameDevImg} alt="Unity Game Developers" className="img-fluid" />
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="official-partner-section">
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
                            <div className="ops-headtitle-img">
                                <h1>To know our Official Design Ageny Partner</h1>
                                <div className="ops-img">
                                    <img src={SixJulyLogoImg} alt="SixJuly Logo" className="img-fluid" />
                                </div>
                            </div>
                            <div className="flex items-center justify-center mt-5">
                                <Button
                                    type="button"
                                    text="Click here"
                                    white
                                    onClick={() => navigate('/sixjuly')}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            <section className="wrapper welcome_bg section_welcome">
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
                    <div className="welcome_text text-center mb5">
                    <h1 className="head_h1">B2B Lead Generation</h1>
                    <p>At Mahasos, we believe that the quality of data is one of the most critical factors in the success of a project. Our data collection services assist clients in obtaining the required data from carefully scrutinized sources. We ensure that the quality of our data respondents and web sources is maintained. Our process involves excluding duplicates and redundant/obsolete information so that only relevant data is added to your database. We have experienced team and ensure a large volume of data is scraped from any social media platform. Our fast and flexible data collection solutions have a faster turnaround to save the client’s time and reduce the cost of operations.</p>
                    </div>
                    <div className="row justify-content-center mb5">
                    <div className={isMobile ? 'w_12' : 'w_5'}>
                        <div className="text-white">
                        <h3>Data Sources</h3>
                        <p>Companies either collect data internally or buy it from a third-party data provider company. Most of the decision-makers choose to buy their data from a data vendor.</p>
                        </div>
                    </div>
                    <div className={isMobile ? 'w_12' : 'w_5'}>
                        <div className="text-white">
                        <h3>Data Providers</h3>
                        <p>The B2B data can be acquired through various B2B platforms. Their expertise lies in proving the direct phone numbers of the potential decision-makers.</p>
                        </div>
                    </div>
                    </div>
                    <div className="hcenter">
                        <div className="flex items-center justify-center mt-5">
                            <Button
                                secondary
                                type="button"
                                text="Learn more"
                                onClick={() => navigate('/b2bleadgeneration')}
                            />
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="ourproduct_section">
                <div className="container">
                <div className="testimonial_wrps">
                    <h1 className="head_h1">Our Products</h1>
                    <div className="product_slider">
                        <ProductsSlider />
                    </div>
                </div>
                </div>
            </section>
            <section className="ourteam_section">
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
                    <h1 className="head_h1 textCenter">Meet Our Team</h1>
                    <p>We create, design, develop, deploy and assure. We establish strong relationships with our clients, whether we’re taking on specific projects, help them reach their business goal, implement the best innovation in the market that suits our clients business. At every level, we do what it takes to turn your ideas into value for your customers.</p>
                    <div className="flex items-center justify-center mt-5">
                        <Button
                            type="button"
                            text="Click here"
                            white
                            onClick={() => navigate('/team')}
                        />
                    </div>
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
            <section className="ourcorevalues_section">
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
                    <h1 className="head_h1 textCenter">Our Core Values</h1>
                    <p>This is what we believe and how we operate.</p>
                    </div>
                    <div className="ourcore-group">
                    <CoreCard
                        icon={<ThingsDoneIcon width="24" height="24" />}
                        title="Get things done" 
                    />
                    <CoreCard
                        icon={<MoveFastIcon width="24" height="24" />}
                        title="Move Fast" 
                    />
                    <CoreCard
                        icon={<TogetherIcon width="30" height="24" />}
                        title="Improve together" 
                    />
                    <CoreCard
                        icon={<WorkSmartIcon width="30" height="24" />}
                        title="Work smart" 
                    />
                    <CoreCard
                        icon={<SimplifyIcon width="24" height="24" />}
                        title="Simplify" 
                    />
                    <CoreCard
                        icon={<HumbleIcon width="30" height="24" />}
                        title="Be humble" 
                    />
                    <CoreCard
                        icon={<HaveFunIcon width="24" height="24" />}
                        title="Have fun" 
                    />
                    </div>
                </div>
                </div>
            </section>
            <JoinOurTeamSection />
            <section className="lettalks_section">
                <div className="container">
                <div className="lettalk_wrps">
                    <h1 className="head_h1">Let's talk about what we can build together</h1>
                    <ContactForm />
                </div>
                </div>
            </section>
            <PlaceSection />
        </Layout>
    )
}

export default HomeOld