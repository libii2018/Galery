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
      className={`flex flex-col relative justify-between h-[100vh] p-8 bg-[${eventBackgroundColor}]`}
    >
      <h1 className="absolute font-open-sans uppercase text-[60px] md:text-[90px] w-full m-0 p-0 text-center lg:text-[120px] top-1/2 left-1/2 text-white z-30 -translate-x-1/2 -translate-y-1/2">
        {eventCreator}
      </h1>
      <div className="grid grid-cols-2 absolute left-8 md:top-[46%] top-[45%] md:size-[50px] lg:size-[80px] bg-[#ca8770]">
        <div className={`bg-[${eventBackgroundColor}] rounded-br-[100%]`}></div>
        <div className={`bg-[${eventBackgroundColor}] rounded-bl-[100%]`}></div>
        <div className={`bg-[${eventBackgroundColor}] rounded-tr-[100%]`}></div>
        <div className={`bg-[${eventBackgroundColor}] rounded-tl-[100%]`}></div>
      </div>
      <h2 className="text-sm font-dream uppercase text-white">{eventName}</h2>
      <div className="flex flex-col items-center justify-center">
        <div className="w-[300px] h-[190px] md:w-[450px]  md:h-[350px] lg:w-[664px] lg:h-[464px] relative rounded-tl-[50%] rounded-tr-[50%] rounded-bl-[50%] rounded-br-[50%] border-[1px] border-[#ff9551]">
          <div
            className="absolute inset-4 rounded-tl-[50%] rounded-tr-[50%] rounded-bl-[50%] rounded-br-[50%]"
            style={{
              backgroundImage: `url(${cover})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
      <h2 className="text-sm font-open-sans uppercase text-white text-right">
        {eventDate}
      </h2>
      <div className="grid grid-cols-2 absolute right-8 md:top-[46%] top-[45%] md:size-[50px] lg:size-[80px] bg-[#ca8770]">
        <div className={`bg-[${eventBackgroundColor}] rounded-br-[100%]`}></div>
        <div className={`bg-[${eventBackgroundColor}] rounded-bl-[100%]`}></div>
        <div className={`bg-[${eventBackgroundColor}] rounded-tr-[100%]`}></div>
        <div className={`bg-[${eventBackgroundColor}] rounded-tl-[100%]`}></div>
      </div>
    </section>
  );
}
