import { TypeAnimation } from 'react-type-animation';
import JulyLogo from "/6july-logo.svg?url";
import BPOLogo from "/bpo-logo.svg?url";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import 'swiper/css';
import useResponsive from '../hooks/responsive.hook';

const slides = [
    {
      image: JulyLogo,
      text: "Design agency, Hyderabad"
    },
    {
      image: BPOLogo,
      text: "BPO Solutions Group, Tijuana"
    },
  ];

const PartnersSlider = () => {
    const swiperRef = useRef<any>(null);
      const [activeIndex, setActiveIndex] = useState<number>(0);
      const { isMobile } = useResponsive();
    return (
        <div className="partners-slider-items">
            <Swiper
                direction={isMobile ? "horizontal" : "vertical"}
                spaceBetween={0}
                slidesPerView={1}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 w-full h-full">
                            <div className="flex items-center">
                                <img src={slide.image} alt="brand" />
                            </div>
                            <div className="flex flex-1">
                                {activeIndex === index ? (
                                    <TypeAnimation
                                        key={`${index}-${activeIndex}`}
                                        sequence={[
                                            `${slide.text}`,
                                            2000,
                                            () => {
                                                swiperRef.current?.slideNext();
                                            },
                                        ]}
                                        wrapper="span"
                                        speed={50}
                                        className=" font-normal font-body text-2xl md:text-4xl leading-full"
                                        // repeat={Infinity}
                                        cursor={true}
                                    />
                                ) : null}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default PartnersSlider