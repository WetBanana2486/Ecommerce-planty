'use client'; // Mark this as a Client Component

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

interface Slide {
  id: number;
  imageUrl: string;
  altText: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

interface HeroSliderProps {
  slides: Slide[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  if (!slides || slides.length === 0) {
    return null; // Or some fallback UI
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0} // No space between slides for a hero
      slidesPerView={1} // Show one slide at a time
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 5000, // Time in ms between slides
        disableOnInteraction: false,
      }}
      className="w-full" // Ensure Swiper takes full width
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative bg-gray-200"> {/* Fallback background */}
            <img 
              src={slide.imageUrl} 
              alt={slide.altText} 
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center p-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">{slide.title}</h2>
              <p className="text-md sm:text-lg md:text-xl text-gray-200 mb-6 md:mb-8 max-w-xl md:max-w-2xl">{slide.description}</p>
              <Link 
                href={slide.ctaLink} 
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 md:py-3 md:px-8 rounded-lg text-lg transition duration-300 ease-in-out"
              >
                {slide.ctaText}
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}