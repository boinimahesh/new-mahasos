type MapEmbedProps = {
    src: string;
    width: string;
    height: string;
}
const MapEmbed = ({src, width, height} : MapEmbedProps) => {
    return (
        <div className="map_box">
            <iframe src={src} title="Mahasos" width={width} height={height} frameBorder="0" style={{border:0}} allowFullScreen></iframe>
        </div>
    )
}

export default MapEmbed