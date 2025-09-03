
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

type item = {
    image: string;
    text: string;
}
type ClientSliderProps = {
    clientLists: item[];
}

const ClientSlider = ({clientLists} : ClientSliderProps) => {
    return (
        <div className="client-slider-wrapper">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                effect="fade"
                spaceBetween={24}
                slidesPerView={6}
                loop={true}
                autoplay={{ 
                    delay: 1500, 
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
            >
                {clientLists.map((slide, index) => (
                    <SwiperSlide 
                        key={index}
                    >
                        <div className="client-item">
                            <motion.div className="client-item-img">
                                <motion.img 
                                    initial={{ scale: 1, filter: "grayscale(100%)", }}
                                    whileHover={{ scale: 1.05,  filter: "grayscale(0%)" }}
                                    transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 20 }}
                                    src={slide.image} 
                                    alt={slide.text + index} 
                                />
                            </motion.div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ClientSlider