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
      className={`flex flex-col items-center h-[100vh] bg-[${eventBackgroundColor}] pb-12`}
      style={{
        backgroundImage: `url(${cover})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center w-full h-full gap-2">
          <h1 className="text-white uppercase font-poppins font-semibold text-[80px] md:text-[110px] lg:text-[135px] text-center w-full leading-[80px] md:leading-[100px] lg:leading-[120px] md:text-center">
            {eventName}
          </h1>
          <h2 className="text-white uppercase font-poppins font-medium text-5xl">
            {eventCreator}
          </h2>
        </div>
        <p className=" text-white uppercase font-poppins text-2xl lg:right-[40px] font-semibold">
          {eventDate}
        </p>
      </div>
    </section>
  );
}
