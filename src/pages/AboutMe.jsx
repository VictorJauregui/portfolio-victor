import React, { useContext } from "react";
import profileContext from "../context/ProfileContext";
import spanish from "../assets/spanish.png";
import english from "../assets/english.png";

import SidebarLeft from "../components/SidebarLeft";
import Language from "../components/Language";
import AboutMeSpanish from "../components/AboutMeSpanish";
import AboutMeEnglish from "../components/AboutMeEnglish";

const AboutMe = () => {
  const { lightMode, spanishMode, colour } = useContext(profileContext);

  const colorFont =
  (colour === 'red') ? 'font-extrabold text-5xl text-red-600 transition duration-1000' :
  (colour === 'green') ? 'font-extrabold text-5xl text-green-500 transition duration-1000'  :
  (colour === 'yellow') ? 'font-extrabold text-5xl text-yellow-300 transition duration-1000'  :
  (colour === 'purple') ? 'font-extrabold text-5xl text-[#FF00D6] transition duration-1000'  :
  (colour === 'orange') ? 'font-extrabold text-5xl text-orange-500 transition duration-1000'  :
  (colour === 'blue') ? 'font-extrabold text-5xl text-[#00E0FF] transition duration-1000'  :
  '';

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
        <div className={colorFont}>
          <h2>{spanishMode ? "Sobre mi" : "About me"}</h2>
        </div>
        {spanishMode ? <AboutMeSpanish /> : <AboutMeEnglish />}
      </div>
    </div>
  );
};

export default AboutMe;
