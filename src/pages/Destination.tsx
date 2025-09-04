import imageDesktop from "@/assets/destination/background-destination-desktop.jpg";
import imageTablet from "@/assets/destination/background-destination-tablet.jpg";
import imageMobile from "@/assets/destination/background-destination-mobile.jpg";
import moonImage from "@/assets/destination/image-moon.png";
import { useState } from "react";
import marsImage from "@/assets/destination/image-mars.png";
import europaImage from "@/assets/destination/image-europa.png";
import titanImage from "@/assets/destination/image-titan.png";

const destinations = {
  moon: {
    title: "MOON",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    image: moonImage,
    distance: "384,400 KM",
    travel: "3 DAYS",
  },
  mars: {
    title: "MARS",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    image: marsImage,
    distance: "225 MIL. KM",
    travel: "9 MONTHS",
  },
  europa: {
    title: "EUROPA",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    image: europaImage,
    distance: "628 MIL. KM",
    travel: "3 YEARS",
  },
  titan: {
    title: "TITAN",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    image: titanImage,
    distance: "1.6 BIL. KM",
    travel: "7 YEARS",
  },
};

export default function DestinationPage() {
  const [active, setActive] = useState<keyof typeof destinations>("moon");

  const destination = destinations[active];
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
      <div>
        <div className="flex flex-col justify-center text-center items-center gap-10 p-10 lg:flex-row  lg:gap-50     ">
          <div className="flex flex-col gap-10 ">
            <h1 className="text-white  font-thin tracking-widest lg:text-3xl">
              <span className="text-gray-600 font-barlowCondensed">01</span> PICK YOUR DESTINATION
            </h1>
            <div>
              <img src={destination.image} alt={destination.title} />
            </div>
          </div>
          <div className="flex flex-col gap-10 lg:items-start lg:text-start  lg:py-5">
            <div className="flex  gap-8">
              {Object.keys(destinations).map((key) => (
                <button
                  key={key}
                  onClick={() => setActive(key as keyof typeof destinations)}
                  className={`pb-2 border-b-2 transition ${
                    active === key
                      ? "border-white text-blue-300 font-balowCondensed"
                      : "border-transparent text-gray-400 hover:text-white"
                  }`}
                >
                  {key.toUpperCase()}
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-4 max-w-lg border-b  border-white/25 pb-8  ">
              <h2 className="text-white font-bellefair font-thin tracking-widest text-5xl">{destination.title}</h2>
              <p className="text-blue-300 font-barlow">{destination.description}</p>
            </div>
            <div >
              <div className="flex flex-col gap-2 lg:flex-row lg:gap-20 lg:justify-start">
                <div className="flex flex-col gap-2">
                  <p className="text-blue-300 font-barlowCondensed ">AVG. DISTANCE</p>
                  <p className="text-white font-bellefair text-2xl">
                    {destination.distance}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-blue-300 font-barlowCondensed">EST. TRAVEL TIME</p>
                  <p className="text-white font-bellefair text-2xl">
                    {destination.travel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
