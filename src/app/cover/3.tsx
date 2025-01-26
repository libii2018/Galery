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
      className="flex flex-col p-10 items-center justify-between h-[100vh]"
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
        className={`text-white text-3xl`}
        style={{ fontFamily: fonts.font2 }}
      >
        {eventCreator}
      </motion.h2>
      <motion.h1
        initial={{ y: 25, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }} // Déclenchez l'animation si visible
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`text-white uppercase text-[60px] md:text-[90px] lg:text-[140px] w-[60%] leading-[80px] md:leading-[120px] lg:leading-[180px] text-center`}
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
        className="mx-auto mt-10 text-white text-sm w-fit py-3 px-8 transition duration-300 ease-in-out transform border border-white uppercase"
      >
        View Gallery
      </motion.a>
      <motion.p
        initial={{ y: 25, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }} // Déclenchez l'animation si visible
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={`text-white font-text-3xl`}
        style={{ fontFamily: fonts.font1 }}
      >
        {eventDate}
      </motion.p>
    </section>
  );
}
