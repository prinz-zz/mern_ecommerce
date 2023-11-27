import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/autoplay";

const slides = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/5273676/pexels-photo-5273676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/9769852/pexels-photo-9769852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/6311687/pexels-photo-6311687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/5325847/pexels-photo-5325847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default function MainCarousel() {
  SwiperCore.use([Navigation]);

  return (
    <>
      {/* Swiper */}
      <Swiper navigation modules={[Autoplay]} autoplay={{ delay: 3000 }}>
        {slides.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="h-[500px] "
              style={{
                background: `url(${item.image}) top no-repeat`,
                backgroundSize: "cover",
              }}></div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Swiper */}
    </>
  );
}
