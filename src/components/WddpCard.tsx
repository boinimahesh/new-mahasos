type WddpCardProps = {
    count: string;
    title: string;
    desc: string;
}
const WddpCard = ({count, title, desc} : WddpCardProps) => {
    return (
        <div className="wdp_box">
            <div className="wdp_card">
                <span className="wdp_count">{count}</span>
                <h3 className="wdp_title">{title}</h3>
                <div className="wdp_desc">{desc}</div>
            </div>
        </div>
    )
}

export default WddpCard