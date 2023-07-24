import React, { useContext } from "react";
import profileContext from "../context/ProfileContext";
import spanish from "../assets/spanish.png";
import english from "../assets/english.png";

import SidebarLeft from "../components/SidebarLeft";
import Language from "../components/Language";
import AboutMeSpanish from "../components/AboutMeSpanish";
import AboutMeEnglish from "../components/AboutMeEnglish";

const AboutMe = () => {
  const { lightMode, spanishMode } = useContext(profileContext);

  return (
    <div
      className={
        lightMode
          ? "bg-gradient-to-b from-[#1C1B48] to-[#706DFF] min-h-screen flex  "
          : "bg-gradient-to-b from-[black] via-black  to-[#002259]/90 min-h-screen flex "
      }
    >
      <SidebarLeft />
      <Language />
      <div className="m-20 w-3/4">
        <h2 className="text-white font-extrabold text-5xl">{spanishMode ? "Sobre mi" : "About me"}</h2>
        {spanishMode ? <AboutMeSpanish /> : <AboutMeEnglish />}
      </div>
    </div>
  );
};

export default AboutMe;
