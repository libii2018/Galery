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
      className={`flex flex-col items-center justify-between h-[100vh] p-8 gap-20 overflow-hidden`}
      style={{
        backgroundColor: eventBackgroundColor,
      }}
    >
      <div className="flex flex-col gap-12 md:gap-0 md:flex-row lg:flex-row items-center justify-between relative w-full max-w-[1200px]">
        <div className="flex flex-col w-full justify-center items-center md:items-start lg:items-start md:w-[50%] lg:w-[50%]">
          <div className="w-[400px] h-[550px] lg:w-[500px] lg:h-[650px] relative flex flex-col z-40  rounded-tl-[300px] rounded-tr-[300px] border-[1px] border-[#ff9551]">
            <div className="absolute -left-[5.1%] lg:-left-[5.2%] gap-[1px] top-[80%] lg:top-[80%] size-[40px] lg:size-[50px] bg-transparent">
              <div className="size-full relative">
                <div className="bg-[#ff9551] top-1/2 left-1/2 w-1/2 h-1/2 absolute -translate-x-1/2 -translate-y-1/2"></div>
                <div className="bg-[#253439] w-1/2 h-1/2 top-[-0.5px] left-[-0.5px] absolute rounded-[100%]"></div>
                <div className="bg-[#253439] top-[-0.5px] right-[-0.5px] w-1/2 h-1/2 absolute rounded-[100%]"></div>
                <div className="bg-[#253439] bottom-[-0.5px] left-[-0.5px] w-1/2 h-1/2 absolute rounded-[100%]"></div>
                <div className="bg-[#253439] bottom-[-0.5px] right-[-0.5px] w-1/2 h-1/2 absolute rounded-[100%]"></div>
              </div>
            </div>
            <div className="absolute -right-[5.2%] lg:-right-[5.2%] gap-[1px] top-[36%] lg:top-[36%] size-[40px] lg:size-[50px] bg-transparent">
              <div className="size-full relative">
                <div className="bg-[#ff9551] top-1/2 left-1/2 w-1/2 h-1/2 absolute -translate-x-1/2 -translate-y-1/2"></div>
                <div className="bg-[#253439] w-1/2 h-1/2 top-[-0.5px] left-[-0.5px] absolute rounded-[100%]"></div>
                <div className="bg-[#253439] top-[-0.5px] right-[-0.5px] w-1/2 h-1/2 absolute rounded-[100%]"></div>
                <div className="bg-[#253439] bottom-[-0.5px] left-[-0.5px] w-1/2 h-1/2 absolute rounded-[100%]"></div>
                <div className="bg-[#253439] bottom-[-0.5px] right-[-0.5px] w-1/2 h-1/2 absolute rounded-[100%]"></div>
              </div>
            </div>
            <div
              className="absolute inset-4 border-[1px] rounded-tl-[300px] rounded-tr-[300px] border-[#ff9551]"
              style={{
                backgroundImage: `url(${cover.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-[40%] lg:w-[40%] justify-between md:gap-16">
          <h1
            className={`text-[#ff9551] font-dream text-5xl md:text-[70px] lg:text-[80px] lg:leading-[120px]  md:w-full uppercase`}
            style={{ fontFamily: fonts.font1 }}
          >
            {eventName}
          </h1>
          <div
            className="flex flex-row items-center justify-between mt-4"
            style={{ fontFamily: fonts.font2 }}
          >
            <p className={`text-xs ${
          eventBackgroundColor === "#fff" ||
          eventBackgroundColor === "#ffffff  "
            ? "text-black"
            : "text-white"
        }`}>{eventCreator}</p>
            <p
              className={`text-xs ${
          eventBackgroundColor === "#fff" ||
          eventBackgroundColor === "#ffffff  "
            ? "text-black"
            : "text-white"
        }`}
              style={{ fontFamily: fonts.font2 }}
            >
              {eventDate}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
