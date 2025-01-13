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
      className={`flex flex-col items-center p-12 md:p-14 lg:p-20 h-[100vh] bg-[${eventBackgroundColor}]`}
    >
      <div
        className="flex flex-col items-center justify-center w-full h-full"
        style={{
          backgroundImage: `url(${cover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center justify-center w-full h-full p-10">
          <h1 className="text-[#fff500] uppercase font-perandory my-auto text-[80px] md:text-[110px] lg:text-[130px] text-center w-full leading-[80px] md:leading-[100px] lg:leading-[120px] md:text-center">
            {eventName}
          </h1>
          <h2 className="text-[#fff500] uppercase font-helvetica text-2xl">
            {eventCreator}
          </h2>
          <p className=" text-[#fff500] uppercase font-helvetica text-2xl lg:right-[40px] ">
            {eventDate}
          </p>
        </div>
      </div>
    </section>
  );
}
