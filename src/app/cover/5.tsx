import React from "react";
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
  return (
    <section
      className="flex flex-col relative py-10 items-center justify-between h-[100vh]"
      style={{
        backgroundImage: `url(${cover.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className={`text-white font-${fonts.font2} font-medium text-xl`}>
        {eventCreator}
      </h2>
      <h1
        className={`text-white font-${fonts.font1} font-medium uppercase text-[100px] md:text-[170px] w-[60%] leading-[80px] md:leading-[100px] lg:leading-[140px] text-center`}
      >
        {eventName}
      </h1>
      <div className="w-full relative">
        <div className="absolute left-[-20px] w-[70%] md:w-[80%] lg:w-[90%] h-[2px] bg-white opacity-65"></div>
        <p
          className={`absolute font-${fonts.font2} font-medium text-white bottom-[-10px] text-lg right-[20px] md:right-[30px] lg:right-[40px]`}
        >
          {eventDate}
        </p>
      </div>
    </section>
  );
}
