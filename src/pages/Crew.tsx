import imageDesktop from "@/assets/crew/background-crew-desktop.jpg";
import imageTablet from "@/assets/crew/background-crew-tablet.jpg";
import imageMobile from "@/assets/crew/background-crew-mobile.jpg";
import AnoushehImage from "@/assets/crew/image-anousheh-ansari.png";
import DouglasImage from "@/assets/crew/image-douglas-hurley.png";
import MarkImage from "@/assets/crew/image-mark-shuttleworth.png";
import VictorImage from "@/assets/crew/image-victor-glover.png";
import { useState } from "react";

const crewMembers = {
  douglas: {
    name: "DOUGLAS HURLEY",
    role: "COMMANDER",
    bio: `Douglas Gerald Hurley is an American engineer, retired Marine Corps officer, and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.`,
    image: DouglasImage,
  },
  mark: {
    name: "MARK SHUTTLEWORTH",
    role: "MISSION SPECIALIST",
    bio: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.`,
    image: MarkImage,
  },
  victor: {
    name: "VICTOR GLOVER",
    role: "PILOT",
    bio: `Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.`,
    image: VictorImage,
  },
  anousheh: {
    name: "ANOUSHEH ANSARI",
    role: "FLIGHT ENGINEER",
    bio: `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded.`,
    image: AnoushehImage,
  },
};

export default function CrewPage() {
  const [active, setActive] = useState<keyof typeof crewMembers>("douglas");

  const crew = crewMembers[active];
  return (
    <div>
      <div
        className="fixed inset-0 -z-10 h-screen w-full bg-cover bg-center block sm:hidden"
        style={{ backgroundImage: `url(${imageMobile})` }}
      />
      <div
        className="fixed inset-0 -z-10 h-screen w-full bg-cover bg-center hidden sm:block lg:hidden"
        style={{ backgroundImage: `url(${imageTablet})` }}
      />
      <div
        className="fixed inset-0 -z-10 h-screen w-full bg-cover bg-center hidden lg:block"
        style={{ backgroundImage: `url(${imageDesktop})` }}
      />

      <div className="flex flex-col justify-center text-center items-center gap-10 p-10 lg:flex-row lg:items-start lg:text-start  ">
        <div className="flex flex-col justify-center text-center items-center gap-10 lg:items-start lg:text-start  lg:gap-20 lg:mr-20">
          <div className="flex justify-center md:justify-start md:mr-0 w-full">
            <h1 className="text-center text-white  font-thin tracking-widest lg:text-3xl md:text-left">
              <span className="text-gray-600">02</span> MEET YOUR CREW
            </h1>
          </div>
          <div>
            <h3 className="text-gray-300 font-light ">{crew.role}</h3>
            <h2 className="text-white  font-light tracking-widest lg:text-3xl">
              {crew.name}
            </h2>
          </div>
          <p className="text-blue-300 font-barlow max-w-lg">{crew.bio}</p>
          <div className="flex gap-4 justify-center">
            {Object.keys(crewMembers).map((key) => (
              <button
                key={key}
                onClick={() => setActive(key as keyof typeof crewMembers)}
                className={`h-3 w-3 rounded-full transition ${
                  active === key
                    ? "bg-white"
                    : "bg-gray-500/50 hover:bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
        <div>
          <img src={crew.image} alt={crew.name} />
        </div>
      </div>
    </div>
  );
}
