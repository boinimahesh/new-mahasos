import { useNavigate } from "react-router-dom";
import Button from "./Button";

type JoinOurTeamSectionProps = {
    className?: string;
}

const JoinOurTeamSection = ({className} : JoinOurTeamSectionProps) => {
    const navigate = useNavigate();
    return (
        <section className={`joinourteam-section ${className ? className : ''}`}>
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
                    <h1 className="textCenter mb4">Want to jump on board and make some magic?</h1>
                    <div className="flex items-center justify-center">
                        <Button
                            white
                            type="button"
                            text="Join Our Team"
                            onClick={() => navigate('/team')}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JoinOurTeamSection