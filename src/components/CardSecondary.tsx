import Row from "./Row"

type item = {
    icon: string;
    title: string;
    content: string;
}

type CardSecondaryProps = {
    content: item[];
}
const CardSecondary = ({content} : CardSecondaryProps) => {
    return (
        <>
            <Row>
                {content.map((item, index) => (
                    <div className="cardsecondary" key={index}>
                        <div className="cs_main">
                            <span className="cs_icon">
                                <img src={item.icon} alt={item.title} className="img-fluid" />
                            </span>
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
            </Row>
        </>
    )
}

export default CardSecondary