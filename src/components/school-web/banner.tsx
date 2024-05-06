import React from "react";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useList, useOne } from "@refinedev/core";
import { API_URL } from "@/App";
import { Link } from "react-router-dom";

interface BannerProps {
  content: string;
  link: string;
}

export const Banner: React.FC<BannerProps> = ({ content, link }) => {
  const { data } = useList({
    resource: "banner",
  });
  return (
    <>
      <div className="relative md:aspect-w-16 md:aspect-h-4 aspect-w-2 aspect-h-1 ">
        <img
           src={`${API_URL}${data?.data[0]?.image || "/image/about.png"}`}
          alt=""
          className="object-fill"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center max-sm:pt-10">
          <h2 className="text-xl md:text-5xl font-semibold text-red-600">
            {content}
          </h2>
          <div className="pt-1">
            <div className="flex space-x-2 pt-4">
              <Link to="/" className="text-slate-600 hover:text-yellow-600">
                Home 
              </Link>
               <span>|</span>
              <div className="text-slate-600">{link}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
