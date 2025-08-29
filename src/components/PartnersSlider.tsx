import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import { TypeAnimation } from 'react-type-animation';
import JulyLogo from "/6july-logo.svg?url";
import BPOLogo from "/bpo-logo.svg?url";
import 'swiper/css';
import 'swiper/css/effect-fade';
import useResponsive from '../hooks/responsive.hook';

const slides = [
    {
        image: JulyLogo,
        textSequence: [
            'Design agency, Hyderabad',
            1000,
        ],
    },
    {
        image: BPOLogo,
        textSequence: [
            'BPO Solutions Group, Tijuana',
            1000,
        ],
    },
];

const PartnersSlider = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const { isMobile } = useResponsive();
    return (
        <div className="partners-slider-items">
            <Swiper
                direction={isMobile ? "horizontal" : "vertical"}
                modules={[EffectFade, Autoplay]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    disableOnInteraction: false,
                }}
                onSlideChange={(swiper) => {
                setActiveSlideIndex(swiper.realIndex);
                }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide 
                        key={index}
                    >
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 w-full h-full">
                            <div className="flex items-center">
                                <img src={slide.image} alt={`slide ${index + 1}`} />
                            </div>
                            <div className="flex flex-1">
                                {index === activeSlideIndex && (
                                    <TypeAnimation
                                        sequence={slide.textSequence}
                                        wrapper="span"
                                        speed={50}
                                        className=" font-normal font-body text-2xl md:text-4xl leading-full"
                                        repeat={Infinity}
                                        cursor={true}
                                    />
                                )}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default PartnersSlider