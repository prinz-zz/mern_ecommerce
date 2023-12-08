import WomenTopCardItem from "./WomenTopCardItem";
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

export default function LehangaCard() {
  SwiperCore.use([Navigation]);

  const [lehangaData, setLehangaWomensData] = useState([]);


  useEffect(() => {
    const fetchWomensData = async () => {
      const res = await axios.get("data/women/women_top.json");
      const data = await res.data;
      setLehangaWomensData(data);
    };
    fetchWomensData();
  }, []);

  return (
    <>
      <h2 className="text-3xl font-semibold text-stone-700 my-4">Women's Top</h2>
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
        {lehangaData.slice(0,10).map((lehanga) => (
          <SwiperSlide key={lehanga.id}>
            <WomenTopCardItem lehanga={lehanga} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
