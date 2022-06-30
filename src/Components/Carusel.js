import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import CourseCard from "./CourseCard";
const Carusel = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        navigation={ true}
        modules={[Pagination]}
        className=" p-20 "
      >
        {cards.map((card) => (
          <SwiperSlide>
            <CourseCard />{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carusel;
