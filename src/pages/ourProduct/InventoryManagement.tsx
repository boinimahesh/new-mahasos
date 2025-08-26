import CardSecondary from '../../components/CardSecondary';
import CardSummary from '../../components/CardSummary';
import Layout from '../../components/layout/Layout'
import Row from '../../components/Row'
import useResponsive from '../../hooks/responsive.hook';
import InvestmentImg from '../../assets/images/investment.svg'
import CoWorkingImg from '../../assets/images/co-working.svg'
import SmartDemandIcon from '../../assets/images/smartdemand_icon.png'
import LocationIcon from '../../assets/images/location_icons.png'
import AutomationsIcon from '../../assets/images/automations_icon.png'

const InventoryManagement = () => {
    const {isMobile} = useResponsive();
    return (
        <Layout>
            <section className="op_section">
                <div className="container">
                <Row>
                    <div className={isMobile ? 'w_12 vcenter' : 'w_6 vcenter'}>
                    <h1 className="page_title">Inventory Management for Multi-channel eCommerce selling</h1>
                    <p>Ensure accurate demand-planning and supply with a real-time picture of your inventories across multiple locations.</p>
                    </div>
                    <div className={isMobile ? 'w_12 vcenter' : 'w_6 vcenter'}>
                    <img src={InvestmentImg} alt="Investment" className="img-fluid" />
                    </div>
                </Row>
                </div>
            </section>
            <section className="section bg_secondary">
                <div className="container">
                    <Row>
                        <div className="w_12 textCenter">
                            <h2>Inventory Management reinvented for eCommerce</h2>
                        </div>
                        <div className="w_8 mx-auto textCenter">
                            <p>We understand that your eCommerce business needs a tailored inventory management solution that suits your products and product groups. MahaSos commerce offers you the versatility as demanded</p>
                        </div>
                    </Row>
                    <CardSecondary
                        content={[
                            {
                            title: "Smart Demand-Supply Planning",
                            content: "Analytics powered demand-supply control to avoid understocking or oversupply get real-time insights into seasonal and event based surge/decline in demand",
                            icon:SmartDemandIcon
                            },
                            {
                                title: "Multi-channel & Multi Location Management",
                                content: "Get a real time picture of your inventories placed across multiple channels and warehouses in multiple locations",
                                icon:LocationIcon
                            },
                            {
                                title: "Gain effeciency through Automation",
                                content: "Automate your repetitive tasks that demand a lot of time and cost. Boost your operational efficiency through intelligent automation",
                                icon:AutomationsIcon
                            },
                        ]}
                    />
                </div>
            </section>
            <section className="section bg_primary">
                <div className="container">
                    <Row>
                        <div className="w_12 textCenter">
                            <h2>Why MahaSos Commerce?</h2>
                        </div>
                    </Row>
                    <CardSummary
                        content={[
                            {
                            title: "Sell on Multiple Channels",
                            content: "Integrate with multiple eCommerce market places, and vendors into one single inventory management single system"
                            },
                            {
                                title: "Manage Multiple Locations",
                                content: "Connect all your warehouses into a single system. Get detailed insight into your stocks placed across locations"
                            },
                            {
                                title: "Seamless Automation",
                                content: "End-to-end Automation of your inventory management operations, right from your warehouse to your customer's doorstep"
                            },
                            {
                                title: "Hardware Integrations",
                                content: "The systems allows a wide range of hardware integrations needed to conduct day-to-day logistics and warehouse operations"
                            },
                            {
                                title: "Data Driven Stock Management",
                                content: "Data powered Intelligent Stock Management that helps you to maintain just the right amount of stock and avoid over/under stocking"
                            },
                            {
                                title: "Financial Control",
                                content: "MahaSos system allows you to keep tab on real time value of your products available at various points of your supply chain"
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
                    <img src={CoWorkingImg} alt="Co Working" className="img-fluid" />
                    </div>
                </Row>
                </div>
            </section>
        </Layout>
    )
}

export default InventoryManagement