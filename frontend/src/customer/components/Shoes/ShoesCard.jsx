import ShoesCardItem from "./ShoesCardItem";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ShoesCard() {
  SwiperCore.use([Navigation]);

  const [shoesData, setShoesData] = useState([]);


  useEffect(() => {
    const fetchShoesData = async () => {
      const res = await axios.get("data/mens/shoes.json");
      const data = await res.data;
      setShoesData(data);
    };
    fetchShoesData();
  }, []);

  return (
    <>
      <h2 className="text-3xl font-semibold text-stone-700 my-4">Shoes</h2>
      <Swiper
        navigation
        // loop
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
      >
        {shoesData.slice(0,15).map((shoes) => (
          <SwiperSlide key={shoes.id}>
            <ShoesCardItem shoes={shoes} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
