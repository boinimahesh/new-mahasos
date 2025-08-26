import Layout from '../../components/layout/Layout'
import Row from '../../components/Row'
import useResponsive from '../../hooks/responsive.hook'
import SoftwareEngineerImg from '../../assets/images/software_engineer.svg'
import CoWorkingImg from '../../assets/images/co-working.svg'
import FasterOrderIcon from '../../assets/images/faster_order_icon.png'
import MultiChannelIcon from '../../assets/images/multi_channel_icon.png'
import CustomerSatisfactionIcon from '../../assets/images/customer_satisfaction_icon.png'
import CardSecondary from '../../components/CardSecondary'
import CardSummary from '../../components/CardSummary'

const OrderManagement = () => {
    const {isMobile} = useResponsive();
    return (
        <Layout>
            <section className="op_section">
                <div className="container">
                <Row>
                    <div className={isMobile ? 'w_12 vcenter' : 'w_6 vcenter'}>
                    <h1 className="page_title">Order Management for Multi-channel eCommerce selling</h1>
                    <p>Efficiently track and fulfill sales orders with our integrated platform, built for multi channel order management</p>
                    </div>
                    <div className={isMobile ? 'w_12 vcenter' : 'w_6 vcenter'}>
                    <img src={SoftwareEngineerImg} alt="Order Management" className="img-fluid" />
                    </div>
                </Row>
                </div>
            </section>
            <section className="section bg_secondary">
                <div className="container">
                    <Row>
                        <div className="w_12 textCenter">
                            <h2>Order Management purpose-built for eCommerce</h2>
                        </div>
                        <div className="w_8 mx-auto textCenter">
                            <p>Ensure 100% order fulfillment and stay in control, by automating all steps and processes of your order management. Sync your inventory with multiple channels and let the system excute the orders with ease.</p>
                        </div>
                    </Row>
                    <CardSecondary
                        content={[
                            {
                            title: "Faster Order Fulfillment",
                            content: "Leverage the power of automation to reduce time delays between various steps in order fulfillment and deliver products faster",
                            icon: FasterOrderIcon
                            },
                            {
                            title: "Multi-channel Order Management",
                            content: "Integrate all your channels into a single system and have a birds-eye view of your overall orders, along with deep insight into every order",
                            icon: MultiChannelIcon
                            },
                            {
                            title: "Greater Customer Satisfaction",
                            content: "we know you operate in a highly competitive market. Earn greater customer satisfaction and trust through faster deliveries.",
                            icon: CustomerSatisfactionIcon
                            },
                        ]}
                    />
                </div>
            </section>
            <section className="section bg_primary">
                <div className="container">
                    <Row>
                        <div className="w_12 textCenter">
                            <h2>Why MahaSos Order Management?</h2>
                        </div>
                    </Row>
                    <CardSummary
                        content={[
                            {
                            title: "Multichannel Integration",
                            content: "Multichannel order managemet made easy - Consolidate orders from multiple market places, all into a single system."
                            },
                            {
                            title: "Amazon FBA",
                            content: "Easy integration with Amazon FBA. Execute FBA orders seamlessly and ship products to Amazon warehouses on time for fulfillment."
                            },
                            {
                            title: "Automated Order Fulfillment",
                            content: "Ensure accuracy and speed through automation. Reduce manual dependency and automate all steps of your order fulfillment process."
                            },
                            {
                            title: "Order Tracking",
                            content: "The advanced order tracking feature allows you to visually understand the status of each order, helping you to investigate delays or any stoppages."
                            },
                            {
                            title: "Easy Drop-shipping",
                            content: "Explore the drop-shipping business model and easily integrate with the inventories and product catalogs of all items you wish to sell through one platform"
                            },
                            {
                            title: "Vendor Management",
                            content: "Automate the vendor order management processes where you can generate stock demands on your vendors in a controlled manner"
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
                    <ul className=" list-disc pl-4">
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

export default OrderManagement