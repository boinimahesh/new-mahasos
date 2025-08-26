type PortfolioCardOldProps = {
    title: string;
    image: string; 
    desc: string; 
    buttonLink: string;
}

const PortfolioCardOld = ({title, image, desc, buttonLink} : PortfolioCardOldProps) => {
    return (
        <div className="portfolioCard">
            <figure>
                <div><img src={image} alt={title} className="img-fluid" /></div>
                <figcaption>
                    <h3>{title}</h3>
                    <span className="mr-2">{desc}</span>
                    <a href={buttonLink}
                        target="_blank"
                        rel="noreferrer"
                    >
                        more details
                    </a>
                </figcaption>
            </figure>
        </div>
    )
}

export default PortfolioCardOld