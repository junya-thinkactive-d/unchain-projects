import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { projects } from '../../../constants/projects';

const HomeSwiper = () => {
  const params={
    modules:[Autoplay,Pagination],
    spaceBetween:50,
    sliderperview:1,
    pagination:{
      clickable:true,
    },
    autoplay:{
      delay:4500,
      disableOnInteraction: false
    },
    loop:true,
  }

  return (
    <>
      <Swiper
        {...params}
        className="container"
      >
        {projects.map((project) => (
          <SwiperSlide
            key={project.id}
            className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center"
          >
            <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
              <div className="max-w-lg lg:mx-12 lg:order-2">
                <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                  {project.name}
                </h1>
                <p className="mt-4 text-gray-600 dark:text-gray-300">{project.description}</p>
                <div className="mt-6">
                  <Link href={project.link}>
                    <a className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md lg:inline hover:bg-blue-400">
                      Show App!
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center w-full h-96 lg:w-1/2">
              <Image
                className="object-cover w-full h-full max-w-2xl rounded-md"
                src={`/banner-${project.image}`}
                alt={`${project.name} image`}
                layout="fill"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HomeSwiper;
