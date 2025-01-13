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
      className="flex flex-col relative p-10 items-center justify-between h-[100vh]"
      style={{
        backgroundImage: `url(${cover})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-[50px] left-0 w-[35%] h-[2px] bg-white"></div>
      <div className="absolute top-[50px] right-0 w-[35%] h-[2px] bg-white"></div>
      <div className="absolute left-[50px] top-0 bottom-0 w-[2px] bg-white"></div>
      <div className="absolute left-[46px] gap-[1px] top-[46px]  size-[10px] bg-white transform rotate-45"></div>
      <div className="absolute right-[46px] gap-[1px] top-[46px]  size-[10px] bg-white transform rotate-45"></div>
      <h2 className="text-white font-poppins font-semibold text-lg md:text-xl lg:text-2xl absolute top-[35px] left-1/2 -translate-x-1/2">
        {eventCreator}
      </h2>
      <h1 className="text-white uppercase font-lazord absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 text-[100px] md:text-[170px] w-[50%] leading-[80px] md:leading-[100px] lg:leading-[140px] text-center">
        {eventName}
      </h1>
      <p className="text-white font-poppins font-semibold absolute bottom-[35px] text-lg md:text-xl lg:text-2xl left-1/2 -translate-x-1/2">
        {eventDate}
      </p>
      <div className="absolute left-[46px] gap-[1px] bottom-[46px]  size-[10px] bg-white transform rotate-45"></div>
      <div className="absolute right-[46px] gap-[1px] bottom-[46px]  size-[10px] bg-white transform rotate-45"></div>
      <div className="absolute right-[50px] top-0 bottom-0 w-[2px] bg-white"></div>
      <div className="absolute bottom-[50px] left-0 w-[35%] h-[2px] bg-white"></div>
      <div className="absolute bottom-[50px] right-0 w-[35%] h-[2px] bg-white"></div>
    </section>
  );
}
