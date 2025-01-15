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
      className={`flex flex-col items-center p-12 md:p-14 lg:p-20 h-[100vh]`}
      style={{
        backgroundColor: eventBackgroundColor,
      }}
    >
      <div
        className="flex flex-col items-center justify-center w-full h-full"
        style={{
          backgroundImage: `url(${cover.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center justify-center w-full h-full p-10">
          <h1
            className={`text-[#fff500] uppercase my-auto text-[60px] md:text-[110px] lg:text-[130px] text-center w-full leading-[80px] md:leading-[100px] lg:leading-[120px] md:text-center`}
            style={{ fontFamily: fonts.font1 }}
          >
            {eventName}
          </h1>
          <h2
            className={`text-[#fff500] uppercase text-xl md:text-2xl`}
            style={{ fontFamily: fonts.font2 }}
          >
            {eventCreator}
          </h2>
          <p
            className={`text-[#fff500] uppercase text-2xl lg:right-[40px]`}
            style={{ fontFamily: fonts.font2 }}
          >
            {eventDate}
          </p>
        </div>
      </div>
    </section>
  );
}
