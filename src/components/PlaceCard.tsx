import { Link } from "react-router-dom";
import MapPinIcon from "./svg/MapPinIcon";
import EnvelopeIcon from "./svg/EnvelopeIcon";
import PhoneIcon from "./svg/PhoneIcon";

type PlaceCardProps = {
    image: string; 
    title: string; 
    address: string; 
    mailId: string; 
    mailText: string; 
    phoneId: string; 
    phoneText: string;
}
const PlaceCard = ({image, title, address, mailId, mailText, phoneId, phoneText} : PlaceCardProps) => {
    return (
        <div className="placecard">
            <img src={image} alt={title} />
            <div className="placedetail">
                <h3>{title}</h3>
                <p>
                    <span className="placeicon">
                        <MapPinIcon width="20" height="20" />
                    </span>
                    {address}</p>
                <p>
                    <span className="placeicon">
                        <EnvelopeIcon width="20" height="20" />
                    </span>
                    <Link 
                        to="#"
                        onClick={(e) => {
                            window.location.href = mailId;
                            e.preventDefault();
                        }}
                    >{mailText}</Link></p>
                <p>
                    <span className="placeicon">
                        <PhoneIcon width="20" height="20" />
                    </span>
                    <Link
                        to="#"
                        onClick={(e) => {
                            window.location.href = phoneId;
                            e.preventDefault();
                        }}
                    >
                        {phoneText}
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default PlaceCard