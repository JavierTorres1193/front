import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Carousel = ({ images }) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
      pagination={{ clickable: true }}
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      className="max-w-[350px] h-80 rounded-lg overflow-hidden"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="w-[350px]  ">
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover" 
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;