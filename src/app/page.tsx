import Cover1 from "./cover/1";
import Cover2 from "./cover/2";
import Cover3 from "./cover/3";
import Cover4 from "./cover/4";
import Cover5 from "./cover/5";
import Cover6 from "./cover/6";
import Cover7 from "./cover/7";
import Cover8 from "./cover/8";
import Cover9 from "./cover/9";
import Cover10 from "./cover/10";
import Cover11 from "./cover/11";
import { CoverPosition, CoverStyle } from "./types";

export default function Home() {
  return (
    <>
      <Cover1
        cover={{
          name: "Sample Image",
          url: "/images/photo3.jpg",
          style: CoverStyle.CENTER,
          position: CoverPosition.CENTER,
        }}
        eventName="Gallery name"
        eventDate="20/01/2022"
        eventCreator="Photographer name"
        eventBackgroundColor="#383020"
        fonts={{
          font1: "dream",
          font2: "Open Sans",
        }}
      />
      <Cover2
        cover={{
          name: "Sample Image",
          url: "/images/photo3.jpg",
          style: CoverStyle.CENTER,
          position: CoverPosition.CENTER,
        }}
        eventName="Gallery name"
        eventDate="20/01/2025"
        eventCreator="By Alain Ntep"
        eventBackgroundColor="#253439"
        fonts={{
          font1: "dream",
          font2: "Open Sans",
        }}
      />
      <Cover3
        cover={{
          name: "Sample Image",
          url: "/images/photo3.jpg",
          style: CoverStyle.CENTER,
          position: CoverPosition.CENTER,
        }}
        eventName="Gallery name"
        eventDate="20/01/2025"
        eventCreator="Photographer name"
        eventBackgroundColor="#253439"
        fonts={{
          font1: "tan-mon-cheri",
          font2: "drugs",
        }}
      />
      <Cover4
        cover={{
          name: "Sample Image",
          url: "/images/photo3.jpg",
          style: CoverStyle.CENTER,
          position: CoverPosition.CENTER,
        }}
        eventName="Gallery name"
        eventDate="20/01/2025"
        eventCreator="Photographer name"
        eventBackgroundColor="#253439"
        fonts={{
          font1: "lazord",
          font2: "Poppins",
        }}
      />
      <Cover5
        cover={{
          name: "Sample Image",
          url: "/images/photo3.jpg",
          style: CoverStyle.CENTER,
          position: CoverPosition.CENTER,
        }}
        eventName="Gallery name"
        eventDate="20/01/2025"
        eventCreator="Photographer name"
        eventBackgroundColor="#253439"
        fonts={{
          font1: "Cinzel",
          font2: "Poppins",
        }}
      />
      <Cover6
        cover={{
          name: "Sample Image",
          url: "/images/photo3.jpg",
          style: CoverStyle.CENTER,
          position: CoverPosition.CENTER,
        }}
        eventName="Gallery name"
        eventDate="20/01/2025"
        eventCreator="Photographer name"
        eventBackgroundColor="#eeeae5"
        fonts={{
          font1: "helvetica",
          font2: "opensauce",
        }}
      />
      <Cover7
        cover={{
          name: "Sample Image",
          url: "/images/photo3.jpg",
          style: CoverStyle.CENTER,
          position: CoverPosition.CENTER,
        }}
        eventName="Gallery name"
        eventDate="20/01/2025"
        eventCreator="Photographer name"
        eventBackgroundColor="#eeeae5"
        fonts={{
          font1: "perandory",
          font2: "helvetica",
        }}
      />
      <Cover8
        cover={{
          name: "Sample Image",
          url: "/images/photo3.jpg",
          style: CoverStyle.CENTER,
          position: CoverPosition.CENTER,
        }}
        eventName="Gallery name"
        eventDate="20/01/2025"
        eventCreator="Photographer name"
        eventBackgroundColor="#ff9551"
        fonts={{
          font1: "perandory",
          font2: "helvetica",
        }}
      />
      <Cover9
        cover={{
          name: "Sample Image",
          url: "/images/photo3.jpg",
          style: CoverStyle.CENTER,
          position: CoverPosition.CENTER,
        }}
        eventName="Gallery name"
        eventDate="20/01/2025"
        eventCreator="Photographer name"
        eventBackgroundColor="#ff9551"
        fonts={{
          font1: "lazord",
          font2: "Poppins",
        }}
      />
      <Cover10
        cover={{
          name: "Sample Image",
          url: "/images/photo3.jpg",
          style: CoverStyle.CENTER,
          position: CoverPosition.CENTER,
        }}
        eventName="Gallery name"
        eventDate="20/01/2025"
        eventCreator="Photographer name"
        eventBackgroundColor="#383020"
        fonts={{
          font1: "dream",
          font2: "Open Sans",
        }}
      />
      <Cover11
        cover={{
          name: "Sample Image",
          url: "/images/photo3.jpg",
          style: CoverStyle.CENTER,
          position: CoverPosition.CENTER,
        }}
        eventName="Gallery name"
        eventDate="20/01/2025"
        eventCreator="photographer"
        eventBackgroundColor="#383020"
        fonts={{
          font1: "Poppins",
          font2: "Poppins",
        }}
      />
    </>
  );
}
