import HomeCardItem from "./HomeCardItem";
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

export default function HomeCard() {
  SwiperCore.use([Navigation]);

  const [mensData, setMensData] = useState([]);

  useEffect(() => {
    const fetchMensData = async () => {
      const res = await axios.get("data/mens/men_jeans.json");
      const data = await res.data;
      setMensData(data);
    };
    fetchMensData();
  }, []);

  return (
    <>
      <h2 className="text-3xl font-semibold text-stone-700 my-4">Men's Jeans</h2>
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
        {mensData.slice(0,15).map((jeans) => (
          <SwiperSlide key={jeans.id}>
            <HomeCardItem jeans={jeans} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
