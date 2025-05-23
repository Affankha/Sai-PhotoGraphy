"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { MdOutlineStar } from "react-icons/md";

import { IoStarHalfSharp } from "react-icons/io5";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonial() {
  const services = [
    {
      title: "Dhananjay patil",
      img: "person1.jpg ",
      desc: "Sai photography's album quality is top-notch. Beautiful layouts and print clarity preserve our memories perfectly! ",
    },
    {
      title: "Ruhi Chawla",
      img: "person2.jpg",
      desc: "Their photography skills are exceptional. Each click reflects creativity, sharpness, and pure emotional depth!",
    },
    {
      title: "Jasnoor Singh",
      img: "person3.jpg",
      desc: "The video shoot was cinematic and well-edited. Every moment was captured and presented beautifully!",
    },
    {
      title: "Sushila shinde",
      img: "persone4.jpg",
      desc: "Drone shots added a magical touch to our event. Breathtaking aerial views with perfect framing!",
    },
    {
      title: "Sanjay Route",
      img: "person5.jpg",
      desc: "The crane footage made our event look grand and dynamic. Great for capturing big scenes and big area!",
    },
    {
      title: "Rahul Kumar",
      img: "person6.jpg",
      desc: "Their LED display service was bright, seamless, and visually impressive. It was perfect for showcasing event videos, ",
    },
  ];

  return (<>
  <div className="text-center ">
    <h1 className="font-bold md:text-3xl">What Our Clients Say</h1>
    <p>These are unbiased testmonials from some of our clients</p>
  </div>
    <div className="bg-white py-10  sm:px-10 text-black h-30">
      <div className=" max-w-6xl mx-auto ">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination, Autoplay]}
          className="w-full "
        >
          {services.map((data, index) => (
            <SwiperSlide key={index} className="mb-6">
              <div className="bg-zinc-800 text-white rounded-xl overflow-hidden shadow-lg m-4 flex flex-col h-full">
                <div className="p-5 pb-0 flex flex-col justify-between flex-grow ">
                  <p className="text-sm">{data.desc}</p>
                  <div className="flex  items-center md:mt-20 gap-2 ml-0">
                    <Image
                      src={`/${data.img}`}
                      alt=""
                      width={30}
                      height={20}
                      className="w-10 h-10 rounded-full  object-cover"
                    />
                    <h2 className="text-xl font-bold  items-center text-center ">
                      {data.title}
                    </h2>
                  </div>
                  
                  {/* google ratings */}
                  <div className="flex  items-center text-start py-5 p-0">
                    <Image
                      src="/google_icon.png"
                      alt="google icon"
                      width={50}
                      height={50}
                      className="pl-0 "
                    />
                    <MdOutlineStar className="text-yellow-400"/>
                    <MdOutlineStar className="text-yellow-400"/>
                    <MdOutlineStar className="text-yellow-400"/>
                    <IoStarHalfSharp className="text-yellow-400"/>
                    
                    

                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
</>  );
}
