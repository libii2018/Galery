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
  return (
    <section
      ref={ref}
      className={`flex flex-col items-center h-[100vh]`}
      style={{
        backgroundImage: `url(${cover.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: eventBackgroundColor,
      }}
    >
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center w-full h-full gap-8">
          <motion.h2
            initial={{ y: 25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }} // Déclenchez l'animation si visible
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`text-white text-2xl font-semibold uppercase`}
            style={{ fontFamily: fonts.font2 }}
          >
            {eventCreator}
          </motion.h2>
          <motion.h1
            initial={{ y: 25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }} // Déclenchez l'animation si visible
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`text-white text-[80px] uppercase md:text-[100px] lg:text-[120px] text-center w-full leading-[80px] md:leading-[100px] lg:leading-[120px] md:text-center`}
            style={{ fontFamily: fonts.font1 }}
          >
            {eventName}
          </motion.h1>

          <motion.p
            initial={{ y: 25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }} // Déclenchez l'animation si visible
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`text-white text-2xl uppercase lg:right-[40px] font-semibold`}
            style={{ fontFamily: fonts.font2 }}
          >
            {eventDate}
          </motion.p>
          <motion.a
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }} // Déclenchez l'animation si visible
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            href="#gallery"
            className="text-white mt-[50%] md:mt-[10%] text-sm w-fit py-3 px-8 transition duration-300 ease-in-out transform border border-white uppercase"
          >
            View Gallery
          </motion.a>
        </div>
      </div>
    </section>
  );
}
