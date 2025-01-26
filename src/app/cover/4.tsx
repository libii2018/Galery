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
      className="flex flex-col relative p-10 items-center justify-between h-[100vh]"
      style={{
        backgroundImage: `url(${cover.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-[50px] left-0 w-[25%] md:w-[35%] h-[2px] bg-white"></div>
      <div className="absolute top-[50px] right-0 w-[25%] md:w-[35%] h-[2px] bg-white"></div>
      <div className="absolute left-[50px] top-0 bottom-0 w-[2px] bg-white"></div>
      <div className="absolute left-[46px] gap-[1px] top-[46px]  size-[10px] bg-white transform rotate-45"></div>
      <div className="absolute right-[46px] gap-[1px] top-[46px]  size-[10px] bg-white transform rotate-45"></div>
      <motion.h2
        initial={{ y: "-20%", opacity: 0 }}
        whileInView={{ y: "-50%", opacity: 1 }} // Déclenchez l'animation si visible
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={`text-white font-semibold text-lg md:text-xl lg:text-2xl absolute top-[35px] left-1/2 -translate-x-1/2`}
        style={{
          fontFamily: fonts.font2,
          left: "50%",
          top: 49,
          translate: "-50%",
        }}
      >
        {eventCreator}
      </motion.h2>
      <motion.h1
        initial={{ y: "-20%", opacity: 0 }}
        whileInView={{ y: "-50%", opacity: 1 }} // Déclenchez l'animation si visible
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`text-white uppercase absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 text-[60px] md:text-[90px] lg:text-[140px] w-[60%] leading-[80px] md:leading-[120px] text-center`}
        style={{
          fontFamily: fonts.font1,
          left: "50%",
          right: "50%",
          translateX: "-50%",
        }}
      >
        {eventName}
      </motion.h1>
      <motion.a
        initial={{ y: 15, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }} // Déclenchez l'animation si visible
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        href="#gallery"
        className="mx-auto mt-[114%] md:mt-[41%]  text-white text-sm w-fit py-3 px-8 transition duration-300 ease-in-out transform border border-white uppercase"
      >
        View Gallery
      </motion.a>
      <motion.p
        initial={{ y: "-20%", opacity: 0 }}
        whileInView={{ y: "-50%", opacity: 1 }} // Déclenchez l'animation si visible
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={`text-white font-semibold absolute bottom-[35px] text-lg md:text-xl lg:text-2xl left-1/2 -translate-x-1/2`}
        style={{
          fontFamily: fonts.font2,
          left: "50%",
          bottom: 18,
          translate: "-50%",
        }}
      >
        {eventDate}
      </motion.p>
      <div className="absolute left-[46px] gap-[1px] bottom-[46px]  size-[10px] bg-white transform rotate-45"></div>
      <div className="absolute right-[46px] gap-[1px] bottom-[46px]  size-[10px] bg-white transform rotate-45"></div>
      <div className="absolute right-[50px] top-0 bottom-0 w-[2px] bg-white"></div>
      <div className="absolute bottom-[50px] left-0 w-[25%] md:w-[35%] h-[2px] bg-white"></div>
      <div className="absolute bottom-[50px] right-0 w-[25%] md:w-[35%] h-[2px] bg-white"></div>
    </section>
  );
}
