import React from "react";
import { Swiper, SwiperSlide  } from "swiper/react";
import { Pagination } from "swiper";
import CourseCard from "./CourseCard";
const Carusel = () => {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={50}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className=" flex gap-4 "
      >
              {
                  cards.map(card => <SwiperSlide><CourseCard/> </SwiperSlide>) 
        }
      </Swiper>
    </>
  );
};

export default Carusel;
