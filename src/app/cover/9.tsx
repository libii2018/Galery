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
      className={`flex flex-col items-center h-[100vh]`}
      style={{
        backgroundImage: `url(${cover.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: eventBackgroundColor,
      }}
    >
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center w-full h-full gap-8">
          <h2
            className={`text-white text-2xl font-semibold uppercase`}
            style={{ fontFamily: fonts.font2 }}
          >
            {eventCreator}
          </h2>
          <h1
            className={`text-white text-[80px] uppercase md:text-[100px] lg:text-[120px] text-center w-full leading-[80px] md:leading-[100px] lg:leading-[120px] md:text-center`}
            style={{ fontFamily: fonts.font1 }}
          >
            {eventName}
          </h1>

          <p
            className={`text-white text-2xl uppercase lg:right-[40px] font-semibold`}
            style={{ fontFamily: fonts.font2 }}
          >
            {eventDate}
          </p>
        </div>
      </div>
    </section>
  );
}
