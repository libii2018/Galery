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
      className={`flex flex-col relative justify-between h-[100vh] p-8`}
      style={{
        backgroundColor: eventBackgroundColor,
      }}
    >
      <h1
        className={`absolute font-dream text-[60px] md:text-[70px] uppercase w-full m-0 p-0 text-center lg:text-[110px] top-1/2 left-1/2 text-white z-30 -translate-x-1/2 -translate-y-1/2`}
        style={{ fontFamily: fonts.font1 }}
      >
        {eventName}
      </h1>
      <div className="grid grid-cols-2 absolute left-8 md:top-[46%] top-[45%] md:size-[50px] lg:size-[80px] bg-[#ca8770]">
        <div
          className={`rounded-br-[100%]`}
          style={{
            backgroundColor: eventBackgroundColor,
          }}
        ></div>
        <div
          className={`rounded-bl-[100%]`}
          style={{
            backgroundColor: eventBackgroundColor,
          }}
        ></div>
        <div
          className={`rounded-tr-[100%]`}
          style={{
            backgroundColor: eventBackgroundColor,
          }}
        ></div>
        <div
          className={`rounded-tl-[100%]`}
          style={{
            backgroundColor: eventBackgroundColor,
          }}
        ></div>
      </div>
      <h2
        className={`text-sm ${
          eventBackgroundColor === "#fff" ||
          eventBackgroundColor === "#ffffff  "
            ? "text-black"
            : "text-white"
        }`}
        style={{ fontFamily: fonts.font2 }}
      >
        {eventCreator}
      </h2>
      <div className="flex flex-col items-center justify-center">
        <div
          className="w-[400px] h-[600px] md:w-[450px] md:h-[450px] lg:w-[564px] lg:h-[564px] relative bg-black rounded-tl-[200px] rounded-tr-[200px] md:rounded-tl-[50%] md:rounded-tr-[50%]"
          style={{
            backgroundImage: `url(${cover.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <h2
        className={`text-sm ${
          eventBackgroundColor === "#fff" ||
          eventBackgroundColor === "#ffffff  "
            ? "text-black"
            : "text-white"
        } text-right`}
        style={{ fontFamily: fonts.font2 }}
      >
        {eventDate}
      </h2>
      <div className="grid grid-cols-2 absolute right-8 md:top-[46%] top-[45%] md:size-[50px] lg:size-[80px] bg-[#ca8770]">
        <div
          className={`rounded-br-[100%]`}
          style={{
            backgroundColor: eventBackgroundColor,
          }}
        ></div>
        <div
          className={`rounded-bl-[100%]`}
          style={{
            backgroundColor: eventBackgroundColor,
          }}
        ></div>
        <div
          className={`rounded-tr-[100%]`}
          style={{
            backgroundColor: eventBackgroundColor,
          }}
        ></div>
        <div
          className={`rounded-tl-[100%]`}
          style={{
            backgroundColor: eventBackgroundColor,
          }}
        ></div>
      </div>
    </section>
  );
}
