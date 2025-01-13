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
      className={`flex flex-col-reverse md:flex-row lg:flex-row items-center justify-between h-[100vh] bg-[${eventBackgroundColor}]`}
    >
      <div className="flex flex-col items-start py-20 px-10 justify-between w-full md:w-[40%] h-full">
        <h2 className="text-[#6b6361] font-opensauce uppercase text-xl">
          {eventCreator}
        </h2>
        <h1 className="text-[#6b6361] font-helvetica uppercase text-[100px] md:text-[120px] lg:text-[150px] w-full text-left md:w-[60%] leading-[80px] md:leading-[100px] lg:leading-[140px] md:text-center">
          {eventName}
        </h1>
        <div className="w-full flex flex-row items-center justify-start gap-2">
          <div
            className="w-[20px] h-[20px] bg-[#6b6361]"
            style={{
              clipPath: "polygon(30% 20%, 70% 50%, 30% 80%)", // Triangle shape
            }}
          ></div>
          <p className=" text-[#6b6361] uppercase font-opensauce text-lg lg:right-[40px] ">
            {eventDate}
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center md:w-[55%] h-full">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${cover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </section>
  );
}
