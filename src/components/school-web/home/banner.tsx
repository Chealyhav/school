import React from "react";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useList } from "@refinedev/core";
import { API_URL } from "@/api/url";


export function BannerHome() {

  const { data, error, isError, isLoading  } = useList({
    resource: "bannerhome",
  });
  if (isError) <div>{error?.message}</div>;

  if (isLoading) <div>Loading...</div>;
  return (
    <>
      <Swiper
        slidesPerView={1}
        navigation={false}
        loop={true}
        keyboard={true}
        modules={[Keyboard, Navigation, Pagination, Autoplay]}
        pagination={{
          clickable: true,
          type: "bullets",
          bulletActiveClass:
            "!w-6 md:!w-10 !h-2 !rounded-sm !bg-yellow-600 !opacity-100",
          bulletClass: "swiper-pagination-bullet ",
        }}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
      >
        {data?.data.map((item, index) => (
          <SwiperSlide key={index} className="">
            <div className="relative md:aspect-w-16 md:aspect-h-5 aspect-w-3 aspect-h-2 bg-gradient-to-b from-slate-600 to-slate-200">
              <img
                src={`${API_URL}${item.background}`}
                alt={item.title}
                className="object-fill opacity-50"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center space-y-4">
                <h2 className="text-2xl md:text-4xl font-semibold">{item.title}</h2>
                <p className="md:text-xl text-lg font-semibold">{item.subtitle}</p>
                <p className="font-light">{item.des}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}  