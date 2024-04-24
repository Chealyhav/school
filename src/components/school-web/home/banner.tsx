import React from "react";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useList } from "@refinedev/core";

const items = [
  {
    image:
      "https://htmldemo.net/techedu/techedu/img/slider/5.jpg",
    title: "Item 1",
    description: "Description for item 1",
  },
  {
    image:
      "https://htmldemo.net/techedu/techedu/img/slider/6.jpg",
    title: "Item 2",
    description: "Description for item 2",
  },
  {
    image:
      "https://htmldemo.net/techedu/techedu/img/slider/2.jpg",
    title: "Item 3",
    description: "Description for item 3",
  },
];

export function BannerHome() {
  const { data } = useList({
    resource: "bannerhome",
  });
  console.log(data)


  return (
    <div className="">
      <Swiper
        slidesPerView={1}
        // spaceBetween={24}
        navigation={true}
        loop={true}
        keyboard={true}
        modules={[Keyboard, Navigation, Pagination, Autoplay]}
        pagination={{
          clickable: true,
          type: "bullets",
          bulletActiveClass:
            "!w-6 md:!w-10 !h-2 !rounded-sm !bg-green-600 !opacity-100",
          bulletClass: "swiper-pagination-bullet ",
        }}
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="">
            <div className="relative md:aspect-w-16 md:aspect-h-6 aspect-w-2 aspect-h-1">
              <img
                src={item.image}
                alt={item.title}
                className="object-fill relative"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                <h2 className="text-white">{item.title}</h2>
                <p className="text-white">{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
