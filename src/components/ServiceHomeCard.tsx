type ServiceHomeCardProps = {
    title: string;
    desc: string;
}

const ServiceHomeCard = ({title, desc} : ServiceHomeCardProps) => {
    return (
        <div className="cardbox">
            <div className="card">
                <div className="cardBody">
                    <h5 className="cardTitle">{title}</h5>
                    <p className="cardText">{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceHomeCard