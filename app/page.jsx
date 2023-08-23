import Image from "next/image";
import Hero from "public/space2.svg";

export default function Home() {
  return (
    <div className="flex gap-4 items-center flex-wrap justify-between flex-col sm:flex-row my-24 sm:my-0">
      <div className="flex-1">
        <h1 className="text-white font-bold text-2xl sm:text-4xl">
          On a mission to find a new habitable planet for humanity{" "}
        </h1>
        <p className="my-6">
          The spacecraft Endurance was designed to carry a crew of astronauts on
          a mission to find a new habitable planet for humanity
        </p>
        <button className="px-2 py-1 border-none bg-purple-500 rounded font-bold">
          Explore
        </button>
      </div>
      <div className="flex-1">
        <Image src={Hero} alt="hero image" className="w-[80%] imag-animation" />
      </div>
    </div>
  );
}
