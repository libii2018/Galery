"use client";
import { motion } from "framer-motion"; // Importez useInView
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
      ref={ref} // Ajoutez la référence ici
      className={`flex flex-col relative justify-between h-[100vh] p-8`}
      style={{
        backgroundColor: eventBackgroundColor,
      }}
    >
      <motion.h1
        initial={{ y: "-20%", opacity: 0 }}
        whileInView={{ y: "-50%", opacity: 1 }} // Déclenchez l'animation si visible
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`absolute font-dream text-[60px] md:text-[70px] uppercase w-full m-0 p-0 text-center lg:text-[110px] top-1/2 left-1/2 text-white z-30 -translate-x-1/2 -translate-y-1/2`}
        style={{
          fontFamily: fonts.font1,
          left: "50%",
          right: "50%",
          translateX: "-50%",
        }}
      >
        {eventName}
      </motion.h1>
      <div className="grid grid-cols-2 absolute left-8 md:top-[46%] top-[45%] md:size-[50px] lg:size-[80px] bg-[#ca8770]">
        <div
          className={`rounded-br-[100%]`}
          style={{
            backgroundColor: eventBackgroundColor,
          }}
        ></div>
        <div
          className={`rounded-bl-[100%]`}
          style={{
            backgroundColor: eventBackgroundColor,
          }}
        ></div>
        <div
          className={`rounded-tr-[100%]`}
          style={{
            backgroundColor: eventBackgroundColor,
          }}
        ></div>
        <div
          className={`rounded-tl-[100%]`}
          style={{
            backgroundColor: eventBackgroundColor,
          }}
        ></div>
      </div>
      <motion.h2
        initial={{ y: 25, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }} // Déclenchez l'animation si visible
        viewport={{ once: true }} // Déclenchez l'animation si visible
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={`text-sm ${
          eventBackgroundColor === "#fff" || eventBackgroundColor === "#ffffff"
            ? "text-black"
            : "text-white"
        }`}
        style={{ fontFamily: fonts.font2 }}
      >
        {eventCreator}
      </motion.h2>
      <div className="flex flex-col items-center justify-center">
        <div
          className="w-[400px] h-[600px] md:w-[450px] md:h-[450px] lg:w-[564px] lg:h-[564px] relative bg-black rounded-tl-[200px] rounded-tr-[200px] md:rounded-tl-[50%] md:rounded-tr-[50%]"
          style={{
            backgroundImage: `url(${cover.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <motion.a
        initial={{ y: 15, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }} // Déclenchez l'animation si visible
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        href="#gallery"
        className="mx-auto mt-4 md:mt-10 text-white text-sm w-fit py-3 px-8 transition duration-300 ease-in-out transform border border-white uppercase"
      >
        View Gallery
      </motion.a>
      <motion.h2
        initial={{ y: 25, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }} // Déclenchez l'animation si visible
        viewport={{ once: true }} // Déclenchez l'animation si visible
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={`text-sm ${
          eventBackgroundColor === "#fff" || eventBackgroundColor === "#ffffff"
            ? "text-black"
            : "text-white"
        } text-right`}
        style={{ fontFamily: fonts.font2 }}
      >
        {eventDate}
      </motion.h2>

      <div className="grid grid-cols-2 absolute right-8 md:top-[46%] top-[45%] md:size-[50px] lg:size-[80px] bg-[#ca8770]">
        <div
          className={`rounded-br-[100%]`}
          style={{
            backgroundColor: eventBackgroundColor,
          }}
        ></div>
        <div
          className={`rounded-bl-[100%]`}
          style={{
            backgroundColor: eventBackgroundColor,
          }}
        ></div>
        <div
          className={`rounded-tr-[100%]`}
          style={{
            backgroundColor: eventBackgroundColor,
          }}
        ></div>
        <div
          className={`rounded-tl-[100%]`}
          style={{
            backgroundColor: eventBackgroundColor,
          }}
        ></div>
      </div>
    </section>
  );
}
