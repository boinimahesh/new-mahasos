import useResponsive from '../hooks/responsive.hook';
import PlaceCard from './PlaceCard';
import HyderabadImg from '../assets/images/img_hyderabad.jpg'
import USAImg from '../assets/images/img_usa.jpg'
import TijuanaImg from '../assets/images/tijuana.jpg'

type PlaceSectionProps = {
    bgwhite: boolean;
    notitle: boolean
}
const PlaceSection = ({bgwhite, notitle} : PlaceSectionProps) => {
    const {isMobile} = useResponsive();
    return (
        <>
            <section className={bgwhite ? 'place_section_bgwhite' : 'place_section'}>
                <div className="container">
                    {!notitle && (
                        <div className="row">
                            <div className="w_12">
                                <h1 className="page_title textCenter">Office</h1>
                            </div>
                        </div>
                    )}
                    <div className="row">
                        <div className={isMobile ? 'w_12' : 'w_6'}>
                            <PlaceCard

                                title="Hyderabad"
                                image={HyderabadImg}
                                address="815, 8th Floor, Manjeera Majestic Commercial, Kukatpally, Hyderabad, Telangana 500072"
                                mailId="mailto:info@mahasos.com"
                                mailText="info@mahasos.com"
                                phoneId="tel:+91-916-025-0004"
                                phoneText="+91-916-025-0004"
                            />
                        </div>
                        <div className={isMobile ? 'w_12' : 'w_6'}>
                            <PlaceCard 
                                title="USA"
                                image={USAImg}
                                address=" 3451 Via Montebello 192-315 Carlsbad, CA 92009"
                                mailId="mailto:info@mahasos.com"
                                mailText="info@mahasos.com"
                                phoneId="tel:+1-(626)375-7176"
                                phoneText="+1-(626)375-7176"
                            />
                        </div>
                        <div className={isMobile ? 'w_12' : 'w_6'}>
                            <PlaceCard
                                title="CANADA"
                                image={USAImg}
                                address="27 Mullen Drive, Ajax, ON L1T2A5"
                                mailId="mailto:info@mahasos.com"
                                mailText="info@mahasos.com"
                                phoneId="tel:+1-(647)895-8797"
                                phoneText="+1-(647)895-8797"
                            />
                        </div>
                        <div className={isMobile ? 'w_12' : 'w_6'}>
                            <PlaceCard
                                title="Mexico"
                                image={TijuanaImg}
                                address="BPO Solutions Group Blvd. Diaz Ordaz 12415, El Paraiso, 22106 Tijuana, B.C"
                                mailId="mailto:info@mahasos.com"
                                mailText="info@mahasos.com"
                                phoneId="tel:+1-(310)463-8800"
                                phoneText="+1-(310)463-8800"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PlaceSection