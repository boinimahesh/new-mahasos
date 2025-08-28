import Row from './Row'

type item = {
    title: string;
    content: string;
}

type CardSummaryProps = {
    content: item[];
}
const CardSummary = ({content} : CardSummaryProps) => {
    return (
        <>
            <Row>
                {content.map((item, index) => (
                    <div className="cardsummary" key={index}>
                        <div className="cs_main">
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
            </Row>
        </>
    )
}

export default CardSummary