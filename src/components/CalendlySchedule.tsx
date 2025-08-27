
import ThinkTankMemberImg from '../assets/images/schedule-meeting.svg'
import MeetingCallIcon from '../assets/images/call-meeting-icon.png';
import { NavLink } from 'react-router-dom';

const CalendlySchedule = () => {
    return (
        <section className="calendly-section">
            <div className="area calendly-area">
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
                <div className="calendly-wrapper">
                    <div className="calendly-left">
                        <div className="calendly-image">
                            <img src={ThinkTankMemberImg} alt="Think Tank Member" className="img-fluid" />
                            <h3 className="calendly-image-title">Schedule</h3>
                        </div>
                    </div>
                    <div className="calendly-right">
                        <div className="calendly-content">
                            <h2 className="text-primary">Request a 30 Minute Meeting <br /> With Think Tank Member</h2>
                            <p>Confirm your time zone and <br /> select a time to submit your request</p>
                            <div className="calendly-meeting-call-icon">
                                <img src={MeetingCallIcon} alt="Think Tank Member" className="img-fluid" />
                            </div>
                            <NavLink
                                to="/lettalks"
                                className="btn" 
                                // onClick={(e) => {
                                // window.location.href = "https://calendly.com/mahasos/30min?hide_gdpr_banner=1&month=2024-08";
                                // e.preventDefault();
                                // }}
                            >
                                Let's Have a Call
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default CalendlySchedule