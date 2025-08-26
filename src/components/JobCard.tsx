import { NavLink } from "react-router-dom";

type JobCardProps = {
    title: string;
    code: string;
    jobContent: string;
}

const JobCard = ({title, code, jobContent} : JobCardProps) => {
    return (
        <div className="jobbox">
            <div className="jobcard">
                <div className="job_top">
                    <h2>{title} <span className="jobcode_text">{code}</span></h2>
                    <div className="job_content">
                        {jobContent}
                    </div>
                </div>
                <NavLink
                    to="#"
                    className="btn" 
                    onClick={(e) => {
                      window.location.href = 'mailto:hr@mahasos.com?subject=' + code;
                      e.preventDefault();
                    }}
                >
                    {code}
                </NavLink>
            </div>
        </div>
    )
}

export default JobCard