'use client';
import { useEffect, useState } from 'react';

import Container from '@/components/shared/container';
import Title from '@/components/ui/title';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Autoplay,EffectCoverflow } from 'swiper/modules';

import Image from 'next/image';


const Trainers = () => {

    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

  return (
    <section
      id='trainers'
      className='min-h-screen flex items-center justify-center'
    >
      <Container>
        <Title title='Join Out' titlePrimary='Trainer' />
        <div>
          <Swiper 
          spaceBetween={50} 
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            
          }}
          effect={windowWidth > 1024 ? 'coverflow' : 'slide'}
          coverflowEffect={windowWidth > 1024 ? {
            rotate: 0, // Slide rotate in degrees
            stretch: 0, // Stretch space between slides (in px)
            depth: 100, // Depth offset in px (slides translate in Z axis)
            modifier: 2, // Effect multiplier
            slideShadows : true, // Enables slides shadows
          } : {}}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 40
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 50
            }
          }}
          modules={[Autoplay,EffectCoverflow]}>
            <SwiperSlide>
              <div className='relative w-full h-[70vh] mx-auto'>
                <Image
                  src='/images/trainer-1.png'
                  alt='Trainer'
                  fill
                  className='object-cover rounded-xl shadow-xl'
                  
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative w-full h-[70vh] mx-auto'>
                <Image
                  src='/images/trainer-2.png'
                  alt='Trainer'
                  fill
                  className='object-cover rounded-xl shadow-xl'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative w-full h-[70vh] mx-auto'>
                <Image
                  src='/images/trainer-3.png'
                  alt='Trainer'
                  fill
                  className='object-cover rounded-xl shadow-xl'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative w-full h-[70vh] mx-auto'>
                <Image
                  src='/images/trainer-4.png'
                  alt='Trainer'
                  fill
                  className='object-cover rounded-xl shadow-xl'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative w-full h-[70vh] mx-auto'>
                <Image
                  src='/images/trainer-5.png'
                  alt='Trainer'
                  fill
                  className='object-cover rounded-xl shadow-xl'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative w-full h-[70vh] mx-auto'>
                <Image
                  src='/images/trainer-6.png'
                  alt='Trainer'
                  fill
                  className='object-cover rounded-xl shadow-xl'
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Trainers;