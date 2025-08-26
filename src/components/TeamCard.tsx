type TeamCardProps = {
    src: string;
    name: string;
    title: string;
}

const TeamCard = ({src, name, title} : TeamCardProps) => {
    return (
        <div className="team_box">
            <div className="team_img">
                <img src={src} alt={name} className="img-fluid"  />
            </div>
            <div className="team_text">
                <h3 className="team_title">{name}</h3>
                <span className="team_designer">{title}</span>
            </div>
        </div>
    )
}

export default TeamCard