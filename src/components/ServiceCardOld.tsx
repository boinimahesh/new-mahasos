type ServiceCardOldProps = {
    src: string;
    title: string;
    desc: string;
}

const ServiceCardOld = ({src, title, desc} : ServiceCardOldProps) => {
    return (
        <div className="scardbox">
            <div className="scard">
                <span className="scardIcon">
                    <img src={src} alt={title} width={96} height={96} />
                </span>
                <h5 className="scardTitle">{title}</h5>
                <p className="scardText">{desc}</p>
            </div>
        </div>
    )
}

export default ServiceCardOld