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
        className={`text-white uppercase font-${fonts.font1} text-[100px] md:text-[170px] w-[60%] leading-[100px] md:leading-[140px] lg:leading-[180px] text-center`}
      >
        {eventName}
      </h1>
      <p className={`text-white font-font-${fonts.font2} text-3xl`}>
        {eventDate}
      </p>
    </section>
  );
}
