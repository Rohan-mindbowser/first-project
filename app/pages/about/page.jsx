import Image from "next/image";
import React from "react";
import Header from "public/about.jpg";

const About = () => {
  return (
    <div className="mb-8">
      <div>
        <Image src={Header} alt="header image" className="h-72 object-cover" />
      </div>
      <div className="flex gap-12 mt-6 flex-wrap flex-col sm:flex-row">
        <div className="flex-1">
          <h1 className="font-bold text-3xl">
            What is Endurence?
          </h1>
          <p className="sm:text-justify">
            "Endurance" refers to the spacecraft used by a team of astronauts on
            an interstellar mission to find a new habitable planet for humanity.
            The spacecraft Endurance plays a central role in the film's plot and
            is named after the poem "Do Not Go Gentle into That Good Night" by
            Dylan Thomas, which emphasizes the theme of perseverance and
            endurance in the face of challenges
          </p>
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-3xl">Our vision</h1>
          <p className="mb-2 sm:text-justify">
            "Interstellar," directed by Christopher Nolan, presents a visionary
            and thought-provoking exploration of space, time, and the survival
            of humanity. The film's vision is centered around several key themes
          </p>
          <p className="font-semibold">- Humanity's Survival</p>
          <p className="font-semibold">- Interstellar Travel</p>
          <p className="font-semibold">- Relativistic Effects</p>
        </div>
      </div>
    </div>
  );
};

export default About;
