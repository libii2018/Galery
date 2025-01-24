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
      className="flex flex-col items-center pt-20 h-[100vh]"
      style={{
        backgroundImage: `url(${cover.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <motion.h1
          initial={{ y: 25, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`text-[#fff500] uppercase text-[80px] md:text-[110px] lg:text-[130px] text-center w-full md:w-[60%] leading-[80px] md:leading-[100px] lg:leading-[120px] md:text-center mb-20`}
          style={{ fontFamily: fonts.font1 }}
        >
          {eventName}
        </motion.h1>
        <motion.h2
          initial={{ y: 25, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`text-[#fff500] uppercase text-3xl md:text-4xl mb-10`}
          style={{ fontFamily: fonts.font2 }}
        >
          {eventCreator}
        </motion.h2>
        <motion.p
          initial={{ y: 25, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`text-[#fffdc5] text-lg lg:right-[40px]`}
          style={{ fontFamily: fonts.font2 }}
        >
          {eventDate}
        </motion.p>
      </div>
    </section>
  );
}
