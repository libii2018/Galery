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
          <h1
            className={`text-white uppercase font-poppins font-semibold text-[60px] md:text-[110px] lg:text-[135px] text-center w-full leading-[80px] md:leading-[100px] lg:leading-[120px] md:text-center`}
            style={{ fontFamily: fonts.font1 }}
          >
            {eventName}
          </h1>
          <h2
            className={`text-white uppercase font-poppins font-medium md:text-5xl`}
            style={{ fontFamily: fonts.font2 }}
          >
            {eventCreator}
          </h2>
        </div>
        <p
          className={`text-white uppercase font-poppins text-2xl lg:right-[40px] font-semibold`}
          style={{ fontFamily: fonts.font2 }}
        >
          {eventDate}
        </p>
      </div>
    </section>
  );
}
