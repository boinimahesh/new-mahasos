import Layout from '../../components/layout/Layout'
import Row from '../../components/Row'
import useResponsive from '../../hooks/responsive.hook'
import BusinessDealImg from '../../assets/images/business_deal.svg'
import CoWorkingImg from '../../assets/images/co-working.svg'
import CardSummary from '../../components/CardSummary'

const Integrate = () => {
    const {isMobile} = useResponsive();
    return (
        <Layout>
            <section className="op_section">
                <div className="container">
                <Row>
                    <div className={isMobile ? 'w_12 vcenter' : 'w_6 vcenter'}>
                    <h1 className="page_title">Countless Possibilities to Scale your business</h1>
                    <p>Integrate with multiple marketplaces, vendor systems, logistics & shipping carriers, seamlessly and scale your operations with no extra effort.</p>
                    </div>
                    <div className={isMobile ? 'w_12 vcenter' : 'w_6 vcenter'}>
                    <img src={BusinessDealImg} alt="Integrate" className="img-fluid" />
                    </div>
                </Row>
                </div>
            </section>
            <section className="section bg_primary">
                <div className="container">
                    <Row>
                        <div className="w_12 textCenter">
                            <h2>Core features of MahaSos Commerce</h2>
                        </div>
                    </Row>
                    <CardSummary
                        content={[
                            {
                            title: "Inventory Management for Multi-channel eCommerce selling",
                            content: "Ensure accurate demand-planning and supply with a real-time picture of your inventories across multiple locations"
                            },
                            {
                            title: "Multichannel Marketplace Management",
                            content: "Manage your product listings across multiple channels and platforms, through our single integrated system"
                            },
                            {
                            title: "Content Management for eCommerce",
                            content: "Manage the content in your product listings across multiple channels and platforms, through our single integrated system"
                            },
                            {
                            title: "Analytics and Reporting for eCommerce",
                            content: "Gain deep visibility into your business and understand the trends through analytics. Empower yourself with data-driven decision making"
                            },
                            {
                            title: "Integrations: Countless Possibilities to Scale your business",
                            content: "Integrate with multiple marketplaces, vendor systems, logistics & shipping carriers, seamlessly and scale your operations with no extra effort"
                            },
                            {
                            title: "Order Management for Multi-channel eCommerce selling",
                            content: "Efficiently track and fulfill sales orders with our integrated platform, built for multi channel order management"
                            },
                            {
                            title: "eCommerce Customer Service Management",
                            content: "Great customer service is the backbone of every great business. We help you reinvent your customer service for the eCommerce age"
                            },
                            {
                            title: "AI powered Intelligent Pricing Management for eCommerce",
                            content: "Data powered Intelligent Price Management program that automatically adjusts the selling price for your products"
                            }
                        ]}
                    />
                </div>
            </section>
            <section className="wealways_section">
                <div className="container">
                <Row>
                    <div className={isMobile ? 'w_12 vcenter' : 'w_6 vcenter'}>
                    <h2>We always stay engaged to ensure your success</h2>
                    <p>While MahaSos Commerce platform has been loaded with every feature you need to run your business, we are fully aware that you need help getting around the system.</p>
                    <ul>
                        <li>Free onboarding and setup consultation</li>
                        <li>Additional customization and personalization services</li>
                        <li>24x7 support</li>
                        <li>Self-help demos</li>
                    </ul>
                    </div>
                    <div className={isMobile ? 'w_12 vcenter' : 'w_6 vcenter'}>
                    <img src={CoWorkingImg} alt="Integrate" className="img-fluid" />
                    </div>
                </Row>
                </div>
            </section>
        </Layout>
    )
}

export default Integrate