import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay  } from 'swiper';

import 'swiper/css';

import { fields } from 'data/fields';

export function FieldsSlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      loop
      autoplay
      spaceBetween={50}
      slidesPerView={1}
      breakpoints={{
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
      }}
    >
      {fields &&
        fields.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <div className='d-flex align-items-center justify-content-around border-top border-2 pt-4 pt-lg-5'>
                <div className='icon-lg text-primary me-3'>{item.icon}</div>
                <span className='fs-3 lh-1 mb-0'>{item.title}</span>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}
