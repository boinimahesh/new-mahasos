import Layout from '../components/layout/Layout'
import useResponsive from '../hooks/responsive.hook'
import B2BImage from '../assets/images/work_together.svg'
import TeamProfileImg from '../assets/images/teamprofile.svg'

const B2bleadgeneration = () => {
    const {isMobile} = useResponsive();
    return (
        <Layout>
            <section className="service_section">
                <div className="container">
                    <div className="row">
                    <div className="w_full">
                        <h1 className="page_title textCenter">B2B Lead Generation</h1>
                    </div>
                    </div>
                </div>
                </section>
                <div className="section py-4">
                    <div className="container">
                        <div className="row mb5">
                            <div className={isMobile ? 'w_12' : 'w_6'}>
                                <p>At Mahasos, we believe that the quality of data is one of the most critical factors in the success of a project. Our data collection services assist clients in obtaining the required data from carefully scrutinized sources. We ensure that the quality of our data respondents and web sources is maintained. Our process involves excluding duplicates and redundant/obsolete information so that only relevant data is added to your database.</p>
                                <p>We have experienced team and ensure a large volume of data is scraped from any social media platform. Our fast and flexible data collection solutions have a faster turnaround to save the client’s time and reduce the cost of operations.</p>
                            </div>
                            <div className={isMobile ? 'w_12' : 'w_6'}>
                                <img src={B2BImage} alt="B2B" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section bg_secondary">
                    <div className="container">
                        <div className="row mb5">
                            <div className="w_12">
                                <h2>B2B Leads Database</h2>
                            </div>
                        </div>
                        <div className="row mb5 justify-content-center">
                            <div className={isMobile ? 'w_12' : 'w_8 mx-auto'}>
                                <div className="box_wrp box_left_wrp">
                                    <div className="card">
                                        <span className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z"/>
                                            </svg>
                                        </span>
                                        <h3>What Is B2B Data?</h3>
                                        <p>B2B data is often known as Business-tobusiness data. Basically, it is information about other businesses to empower your marketing and new sales strategies. It enables us all to have better, more personalized interactions with our chosen audiences.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={isMobile ? 'w_12' : 'w_8 mx-auto'}>
                                <div className="box_wrp box_left_wrp">
                                    <div className="card">
                                        <span className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
                                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                                            </svg>
                                        </span>
                                        <h3>What does B2B Data include?</h3>
                                        <p>The B2B data refers to anything that can qualify a good sales lead and provides the information you can use to get in touch with them.</p>
                                        <p>B2B Data also includes details such as company names, company, employee names, funding, revenue, phone numbers, email addresses and firmographics.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section bg_primary">
                    <div className="container">
                        <div className="row mb4">
                            <div className="w_12">
                                <h2>B2B Data Sources And Providers</h2>
                            </div>
                        </div>
                        <div className="p_group p_group_half">
                            <div className="p_box">
                                <div className="card">
                                    <span className="card_icon_half mb4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z"/>
                                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                                            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                                        </svg>
                                    </span>
                                    <h3>Data Sources</h3>
                                    <p>Companies either collect data internally or buy it from a third-party data provider company. Most of the decision-makers choose to buy their data from a data vendor. Data providers can provide businesses with demographic data and company information scraped from public websites</p>
                                </div>
                            </div>
                            <div className="p_box">
                                <div className="card">
                                    <span className="card_icon_half mb4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
                                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                        </svg>
                                    </span>
                                    <h3>Data Providers</h3>
                                    <p>The B2B data can be acquired through various B2B platforms. Their expertise lies in proving the direct phone numbers of the potential decision-makers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="row mb-5">
                            <div className={isMobile ? 'w_12 vcenter' : 'w_6 vcenter'}>
                                <h1 className="head_title">Team Profile</h1>
                                <p>The data research analyst is primary responsible for gathering and analyzing data, maintaining and constantly improving the quality of an organization’s data, and collaborating with the research team to present data in a convincing way.</p>
                            </div>
                            <div className={isMobile ? 'w_12 vcenter' : 'w_6 vcenter'}>
                                <img src={TeamProfileImg} alt="Team Profile" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
        </Layout>
    )
}

export default B2bleadgeneration