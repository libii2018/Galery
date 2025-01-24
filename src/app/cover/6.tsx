"use client";
import { motion, useInView } from "motion/react";
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
  const isInView = useInView(ref, { amount: 0.5 }); // 30% de visibilité
  return (
    <section
      ref={ref}
      className={`flex flex-col-reverse md:flex-row lg:flex-row items-center justify-between h-[100vh]`}
      style={{
        backgroundColor: eventBackgroundColor,
      }}
    >
      <div className="flex flex-col items-start py-20 px-10 justify-between w-full md:w-[40%] h-full">
        <motion.h2
          initial={{ y: 25, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`${
            eventBackgroundColor === "#fff" ||
            eventBackgroundColor === "#ffffff  "
              ? "text-black"
              : "text-white"
          } uppercase text-lg md:text-xl`}
          style={{ fontFamily: fonts.font2 }}
        >
          {eventCreator}
        </motion.h2>
        <motion.h1
          initial={{ y: 25, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`${
            eventBackgroundColor === "#fff" ||
            eventBackgroundColor === "#ffffff  "
              ? "text-black"
              : "text-white"
          } uppercase text-[50px] md:text-[70px] lg:text-[90px] w-full text-left md:text-left  leading-[80px] md:leading-[100px] lg:leading-[140px]`}
          style={{ fontFamily: fonts.font1 }}
        >
          {eventName}
        </motion.h1>
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full flex flex-row items-center justify-start gap-2"
        >
          <div
            className="w-[20px] h-[20px] bg-[#6b6361]"
            style={{
              clipPath: "polygon(30% 20%, 70% 50%, 30% 80%)", // Triangle shape
            }}
          ></div>
          <p
            className={`${
              eventBackgroundColor === "#fff" ||
              eventBackgroundColor === "#ffffff  "
                ? "text-black"
                : "text-white"
            } uppercase text-base md:text-lg lg:right-[40px]`}
            style={{ fontFamily: fonts.font2 }}
          >
            {eventDate}
          </p>
        </motion.div>
      </div>
      <div className="w-full flex flex-col items-center justify-center md:w-[55%] h-full">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${cover.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </section>
  );
}
