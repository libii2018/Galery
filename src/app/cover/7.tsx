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
      className="flex flex-col items-center pt-20 h-[100vh]"
      style={{
        backgroundImage: `url(${cover.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <h1
          className={`text-[#fff500] uppercase text-[80px] md:text-[110px] lg:text-[130px] text-center w-full md:w-[60%] leading-[80px] md:leading-[100px] lg:leading-[120px] md:text-center mb-20`}
          style={{ fontFamily: fonts.font1 }}
        >
          {eventName}
        </h1>
        <h2
          className={`text-[#fff500] uppercase text-3xl md:text-4xl mb-10`}
          style={{ fontFamily: fonts.font2 }}
        >
          {eventCreator}
        </h2>
        <p
          className={`text-[#fffdc5] text-lg lg:right-[40px]`}
          style={{ fontFamily: fonts.font2 }}
        >
          {eventDate}
        </p>
      </div>
    </section>
  );
}
