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
      className={`flex flex-col items-center h-[100vh] pb-12`}
      style={{
        backgroundImage: `url(${cover.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: eventBackgroundColor,
      }}
    >
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center w-full h-full gap-2">
          <motion.h1
            initial={{ y: 25, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`text-white uppercase font-poppins font-semibold text-[60px] md:text-[110px] lg:text-[135px] text-center w-full leading-[80px] md:leading-[100px] lg:leading-[120px] md:text-center`}
            style={{ fontFamily: fonts.font1 }}
          >
            {eventName}
          </motion.h1>
          <motion.h2
            initial={{ y: 25, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`text-white uppercase font-poppins font-medium md:text-5xl`}
            style={{ fontFamily: fonts.font2 }}
          >
            {eventCreator}
          </motion.h2>
        </div>
        <motion.p
          initial={{ y: 25, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`text-white uppercase font-poppins text-2xl lg:right-[40px] font-semibold`}
          style={{ fontFamily: fonts.font2 }}
        >
          {eventDate}
        </motion.p>
      </div>
    </section>
  );
}
