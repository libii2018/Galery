"use client";
import { motion } from "motion/react";
import { useRef } from "react";
import { CoverImage, FontPolice } from "../types";

interface Props {
  cover: CoverImage;
  eventName: string;
  eventDate: string;
  eventCreator: string;
  eventBackgroundColor: string;
  fonts: FontPolice;
}

export default function Cover({
  cover,
  eventName,
  eventDate,
  eventCreator,
  eventBackgroundColor,
  fonts,
}: Props) {
  // Créez une référence pour l'élément à observer
  const ref = useRef(null);
  // Utilisez useInView pour détecter quand l'élément est visible
  return (
    <section
      ref={ref}
      className={`flex flex-col items-center justify-between h-[100vh]  p-3 md:p-8 gap-20 overflow-hidden`}
      style={{
        backgroundColor: eventBackgroundColor,
      }}
    >
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row lg:flex-row items-center justify-between relative w-full max-w-[1200px]">
        <div className="flex flex-col w-full justify-center items-center md:items-start lg:items-start md:w-[50%] lg:w-[50%]">
          <div className="w-[400px] h-[550px] lg:w-[500px] lg:h-[650px] relative flex flex-col z-40  rounded-tl-[300px] rounded-tr-[300px] border-[1px] border-[#ff9551]">
            <div className="absolute -left-[5.1%] lg:-left-[5.2%] gap-[1px] top-[80%] lg:top-[80%] size-[40px] lg:size-[50px] bg-transparent">
              <div className="size-full relative">
                <div className="bg-[#ff9551] top-1/2 left-1/2 w-1/2 h-1/2 absolute -translate-x-1/2 -translate-y-1/2"></div>
                <div className="bg-[#253439] w-1/2 h-1/2 top-[-0.5px] left-[-0.5px] absolute rounded-[100%]"></div>
                <div className="bg-[#253439] top-[-0.5px] right-[-0.5px] w-1/2 h-1/2 absolute rounded-[100%]"></div>
                <div className="bg-[#253439] bottom-[-0.5px] left-[-0.5px] w-1/2 h-1/2 absolute rounded-[100%]"></div>
                <div className="bg-[#253439] bottom-[-0.5px] right-[-0.5px] w-1/2 h-1/2 absolute rounded-[100%]"></div>
              </div>
            </div>
            <div className="absolute -right-[5.2%] lg:-right-[5.2%] gap-[1px] top-[36%] lg:top-[36%] size-[40px] lg:size-[50px] bg-transparent">
              <div className="size-full relative">
                <div className="bg-[#ff9551] top-1/2 left-1/2 w-1/2 h-1/2 absolute -translate-x-1/2 -translate-y-1/2"></div>
                <div className="bg-[#253439] w-1/2 h-1/2 top-[-0.5px] left-[-0.5px] absolute rounded-[100%]"></div>
                <div className="bg-[#253439] top-[-0.5px] right-[-0.5px] w-1/2 h-1/2 absolute rounded-[100%]"></div>
                <div className="bg-[#253439] bottom-[-0.5px] left-[-0.5px] w-1/2 h-1/2 absolute rounded-[100%]"></div>
                <div className="bg-[#253439] bottom-[-0.5px] right-[-0.5px] w-1/2 h-1/2 absolute rounded-[100%]"></div>
              </div>
            </div>
            <div
              className="absolute inset-4 border-[1px] rounded-tl-[300px] rounded-tr-[300px] border-[#ff9551]"
              style={{
                backgroundImage: `url(${cover.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-[40%] lg:w-[40%] justify-between md:gap-16">
          <motion.h1
            initial={{ y: 25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }} // Déclenchez l'animation si visible
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`text-[#ff9551] text-center md:text-left font-dream text-5xl md:text-[70px] lg:text-[80px] lg:leading-[120px]  md:w-full uppercase`}
            style={{ fontFamily: fonts.font1 }}
          >
            {eventName}
          </motion.h1>
          <div
            className="flex flex-row items-center justify-between mt-4"
            style={{ fontFamily: fonts.font2 }}
          >
            <motion.p
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }} // Déclenchez l'animation si visible
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`text-xs ${
                eventBackgroundColor === "#fff" ||
                eventBackgroundColor === "#ffffff  "
                  ? "text-black"
                  : "text-white"
              }`}
            >
              {eventCreator}
            </motion.p>
            <motion.p
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }} // Déclenchez l'animation si visible
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`text-xs ${
                eventBackgroundColor === "#fff" ||
                eventBackgroundColor === "#ffffff  "
                  ? "text-black"
                  : "text-white"
              }`}
              style={{ fontFamily: fonts.font2 }}
            >
              {eventDate}
            </motion.p>
          </div>
          <motion.a
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }} // Déclenchez l'animation si visible
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            href="#gallery"
            className="
        mt-3  
        md:mt-0
        mx-auto
        md:m-0
        text-white 
        text-sm
        w-fit
        py-3 
        px-8 
        transition 
        duration-300 
        ease-in-out 
        transform 
        hover:opacity-100 
         border 
        border-white 
        uppercase"
          >
            View Gallery
          </motion.a>
        </div>
      </div>
    </section>
  );
}
