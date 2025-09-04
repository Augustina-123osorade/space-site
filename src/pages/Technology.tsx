import imageDesktop from "@/assets/technology/background-technology-desktop.jpg";
import imageTablet from "@/assets/technology/background-technology-tablet.jpg";
import imageMobile from "@/assets/technology/background-technology-mobile.jpg";
import lanchVehiclePortrait from "@/assets/technology/image-launch-vehicle-portrait.jpg";
import lanchVehicleLandscape from "@/assets/technology/image-launch-vehicle-landscape.jpg";
import spaceportPortrait from "@/assets/technology/image-spaceport-portrait.jpg";
import spaceportLandscape from "@/assets/technology/image-spaceport-landscape.jpg";
import spaceCapsulePortrait from "@/assets/technology/image-space-capsule-portrait.jpg";
import spaceCapsuleLandscape from "@/assets/technology/image-space-capsule-landscape.jpg";
import { useState } from "react";

const technologies = {
  launchVehicle: {
    name: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    images: {
      portrait: lanchVehiclePortrait,
      landscape: lanchVehicleLandscape,
    },
  },
  spaceport: {
    name: "SPACEPORT",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    images: {
      portrait: spaceportPortrait,
      landscape: spaceportLandscape,
    },
  },
  spaceCapsule: {
    name: "SPACE CAPSULE",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    images: {
      portrait: spaceCapsulePortrait,
      landscape: spaceCapsuleLandscape,
    },
  },
};

export default function TechnologyPage() {
  const [active, setActive] =
    useState<keyof typeof technologies>("launchVehicle");
  const technology = technologies[active];
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
      <div className="flex flex-col justify-center text-center items-center gap-10 p-10  lg:items-start lg:text-start ">
        <div className="flex justify-center md:justify-start md:mr-0 w-full">
          <h1 className="text-center text-white  font-thin tracking-widest lg:text-3xl md:text-left">
            <span className="text-gray-600">03</span> SPACE LAUNCH 101
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start w-full gap-10">
          <div className="w-screen lg:w-1/2 flex justify-center lg:justify-end lg:h-screen">
            <img
              src={technology.images.landscape}
              alt={technology.name}
              className="block lg:hidden w-full h-auto object-cover"
            />

            <img
              src={technology.images.portrait}
              alt={technology.name}
              className="hidden lg:block w-full h-auto object-cover"
            />
          </div>
          <div className="flex flex-col gap-10 lg:w-1/2 p-4 lg:flex-row lg:py-50">
            <div className="flex gap-4 justify-center lg:flex-col lg:justify-start lg:py-5 lg:gap-8">
              {Object.keys(technologies).map((key, index) => (
                <button
                  key={key}
                  onClick={() => setActive(key as keyof typeof technologies)}
                  className={`h-10 w-10 rounded-full border border-gray-500/50 text-gray-300 font-light transition  ${
                    active === key
                      ? "bg-white text-black"
                      : "hover:border-white hover:text-white"
                  } `}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-4 lg:items-start lg:text-start  lg:py-5">
              <h4 className="text-white">THE TERMINOLOGY</h4>
              <h3 className="text-gray-300 font-light text-3xl ">{technology.name}</h3>
              <p className="text-blue-300 font-barlow max-w-lg">
                {technology.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
