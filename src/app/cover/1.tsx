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
      <h1 className="absolute font-dream text-[60px] md:text-[70px] uppercase w-full m-0 p-0 text-center lg:text-[110px] top-1/2 left-1/2 text-white z-30 -translate-x-1/2 -translate-y-1/2">
        {eventName}
      </h1>
      <div className="grid grid-cols-2 absolute left-8 md:top-[46%] top-[45%] md:size-[50px] lg:size-[80px] bg-[#ca8770]">
        <div className={`bg-[${eventBackgroundColor}] rounded-br-[100%]`}></div>
        <div className={`bg-[${eventBackgroundColor}] rounded-bl-[100%]`}></div>
        <div className={`bg-[${eventBackgroundColor}] rounded-tr-[100%]`}></div>
        <div className={`bg-[${eventBackgroundColor}] rounded-tl-[100%]`}></div>
      </div>
      <h2 className="text-sm font-open-sans text-white">{eventCreator}</h2>
      <div className="flex flex-col items-center justify-center">
        <div
          className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[564px] lg:h-[564px] relative bg-black rounded-tl-[50%] rounded-tr-[50%]"
          style={{
            backgroundImage: `url(${cover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <h2 className="text-sm font-open-sans text-white text-right">
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