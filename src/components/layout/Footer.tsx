import { Link, useLocation } from "react-router-dom";
import LinkedInIcon from "../svg/LinkedInIcon"
import LocationIcon from "../svg/LocationIcon"
import MailIcon from "../svg/MailIcon"
import PolicyIcon from "../svg/PolicyIcon";
import MapEmbed from "../MapEmbed";
import CalendlySchedule from "../CalendlySchedule";
// import CalendlyScheduleNew from "../CalendlyScheduleNew";

const Footer = () => {
    const location = useLocation();
    const currentYear = new Date().getFullYear();
    return (
        <>
            {location.pathname === "/" ? null : (
                <>
                    {location.pathname === "/lettalks" ? null : <CalendlySchedule />}
                    <div className="map_wrapper">
                        <MapEmbed
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.7778778906077!2d78.39280124862549!3d17.49153162889439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x81590ec7359ee666!2sManjeera+Majestic+Commercial!5e0!3m2!1sen!2sin!4v1562307619248!5m2!1sen!2sin" 
                            width="100%" 
                            height="300px" 
                        />
                        <MapEmbed 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3364.6631770407785!2d-116.99204968548942!3d32.5084305049401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d948014affffff%3A0x22d96c137cafdf74!2sBPO%20Solutions%20Group!5e0!3m2!1sen!2sin!4v1623335449440!5m2!1sen!2sin" 
                            width="100%" 
                            height="300px" 
                        />
                    </div>
                </>
            )}
            <footer className="footer-wrapper">
                <div className="container">
                    <div className="footer-details">
                        <div className="flex items-center gap-4">
                            <span className="flex items-center justify-center bg-dark w-12 h-12 rounded-full"><LocationIcon /></span>
                            <span>Manjeera Majestic Commercial, Kukatpally, Hyderabad, Telangana 500072. </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="flex items-center justify-center bg-dark w-12 h-12 rounded-full"><MailIcon /></span>
                            <span><a href="mailto:info@mahasos.com">info@mahasos.com</a></span>
                        </div>
                        <div className="flex items-center gap-4">
                            <ul className="social-media-lists">
                                <li className="sml-item">
                                    <a href="https://www.linkedin.com/company/mahasos/" className="sml-item-link" target="_blank" rel="noopener noreferrer">
                                        <LinkedInIcon />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copyrights">
                    <div className="container">
                        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
                            <div className="text-center md:text-left">Copyright © 2015-{currentYear}, Mahasos Info Private Ltd. All Rights Reserved</div>
                            <div className="policy-list-wrp">
                                <ul className="policy-lists">
                                    <li className="policy-list-item">
                                    <Link to="/privacy-policy" className="policy-list-item-link">
                                        <span className="item-icon"><PolicyIcon /></span>
                                        Privacy Policy
                                    </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer