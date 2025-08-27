import Slider from "react-slick";
import ChevronRight from "./svg/ChevronRight";
import ChevronLeft from "./svg/ChevronLeft";
import { Link } from "react-router-dom";

type SampleNextArrowProps = {
    className?: string;
    onClick?: () => void;
}
type SamplePrevArrowProps = {
    className?: string;
    onClick?: () => void;
}

const SampleNextArrow = ({className, onClick} : SampleNextArrowProps) => {
    return(
        <div
            className={className}
            onClick={onClick}
            >
            <ChevronRight width="32" height="32" />
        </div>
    )
}
const SamplePrevArrow = ({className, onClick} : SamplePrevArrowProps) => {
    return(
        <div
            className={className}
            onClick={onClick}
        >
            <ChevronLeft width="32" height="32" />
        </div>
    )
}

const ProductsSlider = () => {
    const settings = {
      dots: false,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
        <div>
            <Slider {...settings}>
            <div className="psslide">
                <div className="pscard">
                <h3 className="pscard_title">01</h3>
                <p className="pscard_description">Inventory Management <br /> for Multi-channel eCommerce selling</p>
                <Link to="/ourProduct/orderManagement" className="button">Click Here To Know More</Link>
                </div>
            </div>
            <div className="psslide">
                <div className="pscard">
                <h3 className="pscard_title">02</h3>
                <p className="pscard_description">Order Management <br /> for Multi-channel eCommerce selling</p>
                <Link to="/ourProduct/orderManagement" className="button">Click Here To Know More</Link>
                </div>
            </div>
            <div className="psslide">
                <div className="pscard">
                <h3 className="pscard_title">03</h3>
                <p className="pscard_description">Integrate with multiple marketplaces</p>
                <Link to="/ourProduct/integrate" className="button">Click Here To Know More</Link>
                </div>
            </div>
            </Slider>
        </div>
    )
}

export default ProductsSlider