import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import honorsBooks from "../../Asset/Image/books/honors books.jpg";
import hscBooks from "../../Asset/Image/books/hsc books.jpg";
import sscBooks from "../../Asset/Image/books/ssc books.jpg";
import Loading2 from "../Loading/Loading2";
import SwiperButtons from "./SwiperButtons";
import "./SwiperSlick.css";

const SwiperSlick = () => {
  const Books = [
    {
      id: 1,
      name: "HSC Books",
      link: "/",
      image: hscBooks,
    },
    {
      id: 2,
      name: "SSC Books",
      link: "/",
      image: sscBooks,
    },
    {
      id: 2,
      name: "Honours Books",
      link: "/",
      image: honorsBooks,
    },
  ];
  const { data: advertisement = [], isLoading } = useQuery({
    queryKey: ["advertisement"],
    queryFn: async () => {
      const res = await fetch(
        "https://foodbyt-backend.vercel.app/advertisement"
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading2></Loading2>;
  }
  return (
    <div className="">
      <Swiper
        spaceBetween={5}
        slidesPerView={3}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //      clickable: true,
        // }}
        // navigation={true}
        breakpoints={{
          640: {
            spaceBetween: 10,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {Books?.map((ad) => (
          <SwiperSlide>
            <div className="w-full relative">
              <Link to={ad?.link}>
                <div className="md:h-[160px] h-[120px]">
                  <img
                    className="w-full h-full object-cover z-0"
                    src={ad?.image}
                    alt=""
                  />
                </div>
                <div className="absolute bg-white font-semibold z-50 left-2 right-2 bottom-2 p-2 text-sm capitalize">
                  {ad?.name}
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}

        <SwiperButtons></SwiperButtons>
      </Swiper>
    </div>
  );
};

export default SwiperSlick;
