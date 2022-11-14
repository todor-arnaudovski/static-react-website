import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

import 'swiper/css';
import styles from '../assets/styles/FieldsSlider.module.scss';

import { fields } from 'data/fields';

export const FieldsSlider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      loop
      autoplay
      spaceBetween={50}
      slidesPerView={2}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
      }}
      updateOnWindowResize
    >
      {fields &&
        fields.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <div className='d-flex align-items-center justify-content-around border-top border-2 pt-4 pt-lg-5'>
                <div className='icon-lg text-primary me-3'>{item.icon}</div>
                <span className={`${styles.title} lh-1 mb-0`}>{item.title}</span>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};
