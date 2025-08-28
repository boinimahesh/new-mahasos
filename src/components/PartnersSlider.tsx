import { TypeAnimation } from 'react-type-animation';
import JulyLogo from "/6july-logo.svg?url";
import BPOLogo from "/bpo-logo.svg?url";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useRef } from "react";


const PartnersSlider = () => {
    const swiperRef = useRef<any>(null);
    return (
        <div className="partners-slider-items">
            <Swiper
                modules={[Navigation, Pagination]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={30}
                slidesPerView={1}
                loop
                >
                {/* Slide 1 with typing animation */}
                <SwiperSlide>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8 w-full">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <img src={JulyLogo} alt="6 July logo" />
                            </div>
                        </div>
                        <TypeAnimation
                            sequence={[
                                '',
                                100,
                                'Design agency, Hyderabad',
                                2000,
                                () => {
                                    swiperRef.current?.slideNext();
                                },
                            ]}
                            wrapper="span"
                            speed={50}
                            className=" font-normal font-body text-2xl md:text-4xl leading-full"
                            repeat={Infinity}
                            cursor={true}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8 w-full">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <img src={BPOLogo} alt="6 July logo" />
                            </div>
                        </div>
                        <TypeAnimation
                            sequence={[
                                '',
                                100,
                                'BPO Solutions Group, Tijuana, BC',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            className=" font-normal font-body text-2xl md:text-4xl leading-full"
                            repeat={Infinity}
                            cursor={true}
                        />
                    </div>
                </SwiperSlide>
                </Swiper>
        </div>
    )
}

export default PartnersSlider