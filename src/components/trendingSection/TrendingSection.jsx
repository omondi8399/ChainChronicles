"use client";
import React from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
import Image from 'next/image';
import { blogs } from '@/lib/data';

SwiperCore.use([Autoplay]);

const TrendingSection = () => {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Trending Articles</h2>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000
        }}
      >
        {blogs.map((blog, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="w-full h-56">
              <Image src={blog.img} alt="Blog" className="w-full h-full object-cover rounded-lg mb-4" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black bg-opacity-50 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">{blog.title}</h3>
                <p className="text-gray-200 mb-4">{blog.desc}</p>
                <Link href={`/blog/${blog.authorId}`}>
                  <h4 className="text-blue-500 hover:underline">Read More</h4>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrendingSection;
