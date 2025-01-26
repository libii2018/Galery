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
      className="flex flex-col relative py-10 items-center justify-between h-[100vh]"
      style={{
        backgroundImage: `url(${cover.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.h2
        initial={{ y: 25, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }} // Déclenchez l'animation si visible
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={`text-white font-medium text-xl`}
        style={{ fontFamily: fonts.font2 }}
      >
        {eventCreator}
      </motion.h2>
      <motion.h1
        initial={{ y: 25, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }} // Déclenchez l'animation si visible
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`text-white font-medium uppercase text-[60px] md:text-[90px] lg:text-[140px] w-[60%] leading-[80px] md:leading-[120px] text-center`}
        style={{ fontFamily: fonts.font1 }}
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
        className="mx-auto text-white text-sm w-fit py-3 px-8 transition duration-300 ease-in-out transform border border-white uppercase"
      >
        View Gallery
      </motion.a>
      <div className="w-full relative">
        <div className="absolute left-[-20px] w-[70%] md:w-[80%] lg:w-[90%] h-[2px] bg-white opacity-65"></div>
        <motion.p
          initial={{ y: 22, opacity: 0 }}
          whileInView={{ y: 3, opacity: 1 }} // Déclenchez l'animation si visible
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`absolute font-medium text-white bottom-[-10px] text-lg right-[20px] md:right-[30px] lg:right-[40px]`}
          style={{ fontFamily: fonts.font2 }}
        >
          {eventDate}
        </motion.p>
      </div>
    </section>
  );
}
