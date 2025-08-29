import Layout from '../components/layout/Layout'
import Row from '../components/Row';
import useResponsive from '../hooks/responsive.hook'
import AIMLDevServiceImg from '../assets/images/ai-ml-development-services.svg'
import InnovationCoreIcon from '../assets/images/icon-innovation-core.png'
import ClientCentricIcon from '../assets/images/icon-client-centric.png'
import GetStartedWithAIMLIcon from '../assets/images/icon-get-started-ai-ml.png'
import ArtificialIntelligenceImg from '../assets/images/artificial-Intelligence-img.svg'
import CardSecondary from '../components/CardSecondary';
import CardSummary from '../components/CardSummary';

const ArtificialIntelligence = () => {
    const {isMobile} = useResponsive();
    return (
        <Layout>
            <section className="op_section">
                <div className="container">
                <Row>
                    <div className={isMobile ? 'w_12 vcenter' : 'w_6 vcenter'}>
                    <h1 className="page_title">AI/ML Development</h1>
                    <p>Our custom AI/ML development services enable your system to exhibit intelligent thinking, auditory perception, and decision-making capabilities.</p>
                    </div>
                    <div className={isMobile ? 'w_12 vcenter' : 'w_6 vcenter'}>
                    <img src={ArtificialIntelligenceImg} alt="AI/ML Development" className="img-fluid" />
                    </div>
                </Row>
                </div>
            </section>
            <section className="op_section">
                <div className="container">
                    <div className="">
                    <h1 className="page_title">Our Approach</h1>
                    <h4 className="mb5">At Mahasos Info Pvt Ltd, we believe in a collaborative approach to AI & ML:</h4>
                    <Row>
                        <div className={isMobile ? 'w_12 mb4' : 'w_4'}>
                            <div className="appro-item-card">
                            <h4 className="appro-item-title">Custom Solutions</h4>
                            <p>Every business is unique. We tailor our AI & ML solutions to meet your specific needs and challenges.</p>
                            </div>
                        </div>
                        <div className={isMobile ? 'w_12 mb4' : 'w_4'}>
                            <div className="appro-item-card">
                            <h4 className="appro-item-title">Expert Team</h4>
                            <p>Our team of seasoned AI researchers, data scientists, and ML engineers brings unparalleled expertise and creativity to every project.</p>
                            </div>
                        </div>
                        <div className={isMobile ? 'w_12' : 'w_4'}>
                            <div className="appro-item-card">
                            <h4 className="appro-item-title">State-of-the-Art Technology</h4>
                            <p>Leveraging the latest technologies like TensorFlow, PyTorch, and Apache Spark, we deliver robust, scalable, and efficient solutions.</p>
                            </div>
                        </div>
                    </Row>
                    </div>
                </div>
            </section>
            <section className="section bg_secondary">
                <div className="container">
                    <Row>
                        <div className="w_12 textCenter">
                            <h2 className="mb5">Why Choose Us?</h2>
                        </div>
                    </Row>
                    <CardSecondary
                        content={[
                            {
                                title: "Innovation at Core",
                                content: "We are at the forefront of AI & ML research and implementation, constantly exploring new possibilities. Proven Track Record: With a portfolio of successful projects, we have a proven track record of delivering value to our clients.",
                                icon: InnovationCoreIcon
                            },
                            {
                                title: "Client-Centric",
                                content: "Our client-centric approach ensures that your business goals drive our solutions, resulting in tangible outcomes.",
                                icon: ClientCentricIcon
                            },
                            {
                                title: "Get Started with AI & ML",
                                content: "Ready to revolutionize your business? Let’s embark on this transformative journey together. Whether you are just starting with AI & ML or looking to enhance your existing capabilities, Mahasos Info Pvt Ltd is here to help.",
                                icon: GetStartedWithAIMLIcon
                            },
                        ]}
                    />
                </div>
            </section>
            <section className="section bg_primary">
                <div className="container">
                    <Row>
                        <div className="w_12 textCenter">
                            <h2 className="mb4">Our AI/ML Development Process</h2>
                        </div>
                        
                        <div className="w_8 mx-auto text-center text-white mb5">
                            <p>We provide thorough end-to-end services in AI and ML development to ensure a smooth ride from data preparation for AI algorithms and seamless system rollout to cater to a vast user base. We place a premium on communication and openness, providing regular updates at each stage of development to keep you informed and engaged.</p>
                            <p>Our skilled developers have in-depth knowledge of AI and ML technologies, keeping abreast of the most recent advancements and drawing on their experience to devise robust solutions. You can rely on us to deliver high-quality AI and ML solutions tailored to your specific needs, with ongoing support and maintenance to ensure long-term success.</p>
                        </div>
                    </Row>
                    <CardSummary
                        content={[
                            {
                                title: "Initial Planning",
                                content: "During this phase, we analyze your organization's requirements, constraints, and desired outcomes. We establish reasonable deadlines and allocate the necessary resources, including human expertise, data, computing resources, and budget."
                            },
                            {
                                title: "Gathering the Data",
                                content: "Our team will collect data, and perform comprehensive data preprocessing tasks including cleaning, transforming, and standardizing the data. This will prepare the data for model training and ensure optimal performance."
                            },
                            {
                                title: "Model Development",
                                content: "Our qualified professionals will develop and fine-tune the model architecture, and train the model with the prepared data collected earlier. Based on that, our developers will employ advanced techniques and algorithms for the model to make accurate predictions and decisions."
                            },
                            {
                                title: "Testing",
                                content: "In this phase, our team will evaluate the model performance using relevant metrics such as accuracy, precision, and others. We would work closely with you to identify areas for development based on evaluation results."
                            },
                            {
                                title: "Deployment and Maintenance",
                                content: "During deployment, our team will collaborate closely with you to ensure that the model is functional within your environment. To safeguard your model's long-term viability, we emphasize routine maintenance and updates."
                            },
                        ]}
                    />
                </div>
            </section>
            <section className="wealways_section">
                <div className="container">
                    <Row>
                        <div className={isMobile ? 'w_12 vcenter' : 'w_6 vcenter'}>
                            <h2 className="mb4">Harness Excellence with AI and ML Development Services</h2>
                            <p>With the thorough understanding of your business objectives, challenges, and industry landscape, we provide you with a customized AI and ML development solutions that is not only up-to-date, but also in sync with your business goals. Our developers will seamlessly integrate cutting-edge AI and ML development services into your business offerings, processes, and growth strategies.</p>
                            <p>As your digital transformation ally, we strive to provide solutions that go beyond surface-level. We prioritize scalability as a key consideration throughout the process. We craft AI and ML development solutions to adapt and scale in accordance with the growth of your business, guaranteeing their quality performance throughout the expansion of your operations.</p>
                        </div>
                        <div className={isMobile ? 'w_12 vcenter' : 'w_6 vcenter'}>
                            <img src={AIMLDevServiceImg} alt="Co Working" className="img-fluid" />
                        </div>
                    </Row>
                </div>
            </section>
        </Layout>
    )
}

export default ArtificialIntelligence