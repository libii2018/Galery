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
      className="flex flex-col p-10 items-center justify-between h-[100vh]"
      style={{
        backgroundImage: `url(${cover.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className={`text-white font-${fonts.font2} text-3xl`}>
        {eventCreator}
      </h2>
      <h1
        className={`text-white uppercase font-${fonts.font1} text-[60px] md:text-[90px] lg:text-[140px] w-[60%] leading-[80px] md:leading-[120px] lg:leading-[180px] text-center`}
      >
        {eventName}
      </h1>
      <p className={`text-white font-font-${fonts.font2} text-3xl`}>
        {eventDate}
      </p>
    </section>
  );
}
