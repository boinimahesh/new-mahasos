import Layout from "../components/layout/Layout"
import useResponsive from "../hooks/responsive.hook"
import BPOImg1 from '../assets/images/bpo.jpg'
import BPOImg2 from '../assets/images/bpo2.png'
import AboutBPOImg from '../assets/images/bpo_about_img.png'

const BPO = () => {
    const {isMobile} = useResponsive();
    return (
        <Layout>
            <section className="bpo_section">
                <div className="container">
                    <div className="row">
                    <div className="w_full">
                        <h1 className="page_title textCenter">BPO</h1>
                        <div className="w_10 mxAuto textCenter">
                        <h2><strong>We are Proud to say that we are offical Business Partners with BPO  Solutions Group located at Tijuna</strong></h2>
                        </div>
                    </div>          
                    </div>
                    <div className="row mb5">
                    <div className={isMobile ? 'w_12' : 'w_6 vcenter'}>
                        <h5><strong>Our  Model</strong></h5>
                        <p><strong>Behind Every  Successful business is a great outsource.</strong></p>
                        <p>It all started with a dream; to provide quality services to the international market and to improve work life in our community. BPO Solutions Group was founded in 2016 by partners Crispin Luna, Jon Chesnik and Manny Perez.</p>
                        <h5><strong>Our History</strong></h5>
                        <p>iT all started with a dream; to provide quality services to the international market and to improve work life in our community. bpo solutions group was founded in 2016 by partners Crispin luna, jon chesnik and manny perez.</p>
                        <p>One of the keys to our success was the combination, with two partners being clients themselves and another with over a decade of first hand experience in the tijuana call center industry</p>
                    </div>
                    <div className={isMobile ? 'w_12' : 'w_6 vcenter'}>
                        <img src={BPOImg1} alt="BPO" className="img-fluid" />
                    </div>
                    </div>
                    <div className="row mb5">
                    <div className={isMobile ? 'w_12' : 'w_6 vcenter'}>
                        <img src={BPOImg2} alt="BPO" className="img-fluid" />
                    </div>
                    <div className={isMobile ? 'w_12' : 'w_6 vcenter'}>
                        <h1>Performance  First</h1>
                        <p>At BPO Solutions Group, Performance is not just a sales buzz word; it is part of our founding principles. Our portfolio of Fortune 500 and industry leading companies symbolizes our commitment toward upholding and maintaining industry leading performance standards. Our perpetual pursuit of excellence and our disciplined approach send an important message to all:</p>
                        <ul>
                        <li>Performance is the responsibility of every BPO team member.</li>
                        <li>Performance is integrated into the core fabric of our approach.</li>
                        <li>Performance is managed daily, so we can be proud of our weekly and monthly reporting metrics.</li>
                        </ul>
                        <p>Our key performance metrics are further bolstered by our customer-centric culture.</p>
                    </div>
                    </div>
                    <div className="row mb5">
                    <div className={isMobile ? 'w_12' : 'w_6 vcenter'}>
                        <h1>Facility and information securtity</h1>
                        <ul>
                        <li>Centralized facility control</li>
                        <li>Biometric controlled room access</li>
                        <li>NFC Company ID Required</li>
                        <li>24/7 Security Staff</li>
                        <li>Facility 4k video/audio surveillance</li>
                        <li>Full time managed fiber network</li>
                        </ul>
                    </div>
                    <div className={isMobile ? 'w_12' : 'w_6 vcenter'}>
                        <img src={AboutBPOImg} alt="BPO" className="img-fluid" />
                    </div>
                    </div>
                </div>
                </section>
        </Layout>
    )
}

export default BPO