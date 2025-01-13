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
      className="flex flex-col p-10 items-center justify-between h-[100vh]"
      style={{
        backgroundImage: `url(${cover})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-white font-drugs text-3xl">{eventCreator}</h2>
      <h1 className="text-white uppercase font-tan-mon-cheri text-[100px] md:text-[170px] w-[60%] leading-[80px] md:leading-[100px] lg:leading-[140px] text-center">
        {eventName}
      </h1>
      <p className="text-white font-drugs text-3xl">{eventDate}</p>
    </section>
  );
}
