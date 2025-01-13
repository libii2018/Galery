import React from "react";

interface Props {
  cover: CoverImage;
  eventName: string;
  eventDate: string;
  eventCreator: string;
  eventBackgroundColor: string;
}

export default function Cover({
  cover,
  eventName,
  eventDate,
  eventCreator,
  eventBackgroundColor,
}: Props) {
  return (
    <section
      className="flex flex-col relative py-10 items-center justify-between h-[100vh]"
      style={{
        backgroundImage: `url(${cover})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-white font-poppins font-medium text-xl">
        {eventCreator}
      </h2>
      <h1 className="text-white font-cinzel font-medium uppercase text-[100px] md:text-[170px] w-[60%] leading-[80px] md:leading-[100px] lg:leading-[140px] text-center">
        {eventName}
      </h1>
      <div className="w-full relative">
        <div className="absolute left-[-20px] w-[70%] md:w-[80%] lg:w-[90%] h-[2px] bg-white opacity-65"></div>
        <p className="absolute font-poppins font-medium text-white bottom-[-10px] text-lg right-[20px] md:right-[30px] lg:right-[40px] ">
          {eventDate}
        </p>
      </div>
    </section>
  );
}
