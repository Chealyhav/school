import React from "react";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useList, useOne } from "@refinedev/core";
import { API_URL } from "@/App";

const items = [
  {
    image: "https://htmldemo.net/techedu/techedu/img/slider/5.jpg",
    title: "Item 1",
    description: "Description for item 1",
  },
  {
    image: "https://htmldemo.net/techedu/techedu/img/slider/6.jpg",
    title: "Item 2",
    description: "Description for item 2",
  },
  {
    image: "https://htmldemo.net/techedu/techedu/img/slider/2.jpg",
    title: "Item 3",
    description: "Description for item 3",
  },
];

export function BannerAbout() {
  const { data } = useOne({
    resource: "about",
    id:1
  });
  console.log(data);

  return (
    <div className="">
      <div className="relative md:aspect-w-16 md:aspect-h-4 aspect-w-2 aspect-h-1">
        <img
          src={`${API_URL}${data?.data.banner}`}
          alt={data?.data.title}
          className="object-fill relative"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h2 className="text-white">{data?.data.title}</h2>
          <p className="text-white">{data?.data.des}</p>
        </div>
      </div>
    </div>
  );
}
