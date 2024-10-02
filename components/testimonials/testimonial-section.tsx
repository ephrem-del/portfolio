"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination } from "swiper/modules";
import TestimonialCard from "./testimonial-card";
import employeerImage from "../../public/programming.jpg";

const testimonials = [
  {
    name: "Hakim",
    title: "CTO",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsam
        a tempore sapiente, nobis labore atque, corrupti rerum itaque unde neque
        fugit eos similique quasi odio quo laudantium, minus sunt.`,
    imageUrl: employeerImage,
  },
  {
    name: "Hakim",
    title: "CTO",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsam
        a tempore sapiente, nobis labore atque, corrupti rerum itaque unde neque
        fugit eos similique quasi odio quo laudantium, minus sunt.`,
    imageUrl: employeerImage,
  },
  {
    name: "Hakim",
    title: "CTO",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsam
        a tempore sapiente, nobis labore atque, corrupti rerum itaque unde neque
        fugit eos similique quasi odio quo laudantium, minus sunt.`,
    imageUrl: employeerImage,
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="flex flex-col items-center justify-center dark:text-white px-[5%] tablet:px-[10%] desktop:px-[17%]"
    >
      <h1 className="text-3xl tablet:text-6xl mb-0">Testimonials</h1>
      <p className=" tablet:px-[100px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsam
        a tempore sapiente, nobis labore atque, corrupti rerum itaque unde neque
        fugit eos similique quasi odio quo laudantium, minus sunt.
      </p>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={2}
        centeredSlides={true}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="w-[350px] tablet:w-[1500px] "
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
      >
        {testimonials.map((testimonial, index) => {
          return (
            <SwiperSlide key={index}>
              <TestimonialCard
                name={testimonial.name}
                title={testimonial.title}
                description={testimonial.description}
                imageUrl={testimonial.imageUrl}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default TestimonialsSection;