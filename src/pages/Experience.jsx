import React, { useContext } from "react";
import SidebarLeft from "../components/SidebarLeft";
import Language from "../components/Language";
import profileContext from "../context/ProfileContext";
import ait from '../assets/ait.png'
import whiteLogo from '../assets/whiteLogo.png'
import blueLogo from '../assets/blueLogo.png'

const Experience = () => {
    const { lightMode, spanishMode,colour } = useContext(profileContext);

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
          <h2 >{spanishMode ? "Experiencia" : "Experience"}</h2>
        </div>
        <div className={lightMode ? 'bg-white mt-10 rounded p-10 text-[#002259]' : 'bg-[#223343] border-2 mt-10 rounded p-10 text-white' }>
            <div className="flex gap-6 w-full">
                <img className="h-24" src={ait} alt="" />
                <div className="flex flex-col justify-center w-full">
                  <p className="font-extrabold text-2xl">Full Stack Developer</p>
                  <p className="font-bold text-2xl text-gray-500">Assembler institute of Technology</p>
                </div>
                <div className="flex justify-end w-full">
                  <p className="font-bold text-xl text-gray-500">Sept 2022 - Jun 2023</p>
                </div>
            </div>
            <div>
              <p className="text-xl mt-6">{spanishMode ? 'Proyectos completos orientados al mundo real con metodología Agile basada en "aprender haciendo" y programación en pareja y grupos centrándose en una base sólida de JavaScript,  HTML5, CSS3, REACT, Jquery, Tailwind,  Github, MongoDB, node js.': 'Complete real-world projects with Agile methodology based on "learning by doing" and pair and group programming, focusing on a strong foundation of JavaScript, HTML5, CSS3, React, jQuery, Tailwind, Github, MongoDB, and Node.js.'}</p>
            </div>
            <div className="w-full flex">
              <div className="w-1/3">

              </div>
              <div className="flex flex-wrap gap-2 text-white mt-6 w-2/3 ">
                <p className="bg-gray-500 px-3 rounded-lg font-bold text-xl hover:bg-[#706DFF]  cursor-pointer ">#React</p>
                <p className="bg-gray-500 px-3 rounded-lg font-bold text-xl hover:bg-[#706DFF]  cursor-pointer ">#CSS</p>
                <p className="bg-gray-500 px-3 rounded-lg font-bold text-xl hover:bg-[#706DFF]  cursor-pointer ">#html</p>
                <p className="bg-gray-500 px-3 rounded-lg font-bold text-xl hover:bg-[#706DFF]  cursor-pointer ">#JavaScript</p>
                <p className="bg-gray-500 px-3 rounded-lg font-bold text-xl hover:bg-[#706DFF]  cursor-pointer ">#Node</p>
                <p className="bg-gray-500 px-3 rounded-lg font-bold text-xl hover:bg-[#706DFF]  cursor-pointer ">#Express</p>
                <p className="bg-gray-500 px-3 rounded-lg font-bold text-xl hover:bg-[#706DFF]  cursor-pointer ">#Auth0</p>
                <p className="bg-gray-500 px-3 rounded-lg font-bold text-xl hover:bg-[#706DFF]  cursor-pointer ">#Figma</p>
                <p className="bg-gray-500 px-3 rounded-lg font-bold text-xl hover:bg-[#706DFF]  cursor-pointer ">#Mongodb</p>
                <p className="bg-gray-500 px-3 rounded-lg font-bold text-xl hover:bg-[#706DFF]  cursor-pointer ">#Tailwind</p>
                <p className="bg-gray-500 px-3 rounded-lg font-bold text-xl hover:bg-[#706DFF]  cursor-pointer ">#Php</p>
                <p className="bg-gray-500 px-3 rounded-lg font-bold text-xl hover:bg-[#706DFF]  cursor-pointer ">#git</p>
              </div>
            </div>
            <hr className="my-10 mx-80" />
            <div className="flex gap-6 w-full mt-10">
                <img className="h-24" src={!lightMode ? whiteLogo : blueLogo} alt="" />
                <div className="flex flex-col justify-center w-full">
                  <p className="font-extrabold text-2xl">Frontend Developer</p>
                  <p className="font-bold text-2xl text-gray-500">Alonbalon</p>
                </div>
                <div className="flex justify-end w-full items-center gap-1">
                  <p className="font-bold text-xl text-gray-500">Sept 2021 - {spanishMode ? 'Actualidad':'Present time'}</p>
                  <div class="w-2 h-2 rounded-full bg-orange-600 animate-pulse"></div>
                </div>
            </div>
            <div>
              <p className="text-xl mt-6">{spanishMode ? 'He estado liderando y guiando nuestra empresa durante los últimos 7 años con el objetivo de proporcionar soluciones profesionales a los entrenadores de fútbol en todo el mundo. Durante los últimos 2 años, además, junto con el equipo, he estado inmerso en el desarrollo del front-end de nuestra aplicación, que se lanzará próximamente. Utilizando tecnologías vanguardistas como React, TypeScript y otras herramientas relevantes en el ámbito del desarrollo web, con la idea de crear una experiencia excepcional para nuestros usuarios.': 'I have been leading and guiding our company for the past 7 years with the aim of providing professional solutions to football coaches worldwide. Additionally, over the last 2 years, together with the team, I have been deeply involved in the front-end development of our soon-to-be-launched application. We have been utilizing cutting-edge technologies such as React, TypeScript, and other relevant web development tools, with the vision of creating an exceptional experience for our users.'}</p>
            </div>
            <div className="w-full flex">
              <div className="w-1/3">

              </div>
              <div className="flex flex-wrap gap-2 text-white mt-6 w-2/3 ">
                <p className="bg-gray-500 px-3 rounded-lg font-bold text-xl hover:bg-[#706DFF] cursor-pointer ">#React</p>
                <p className="bg-gray-500 px-3 rounded-lg font-bold text-xl hover:bg-[#706DFF]  cursor-pointer ">#CSS</p>
                <p className="bg-gray-500 px-3 rounded-lg font-bold text-xl hover:bg-[#706DFF]  cursor-pointer ">#html</p>
                <p className="bg-gray-500 px-3 rounded-lg font-bold text-xl hover:bg-[#706DFF]  cursor-pointer ">#JavaScript</p>
                <p className="bg-gray-500 px-3 rounded-lg font-bold text-xl hover:bg-[#706DFF]  cursor-pointer ">#Node</p>
                <p className="bg-gray-500 px-3 rounded-lg font-bold text-xl hover:bg-[#706DFF]  cursor-pointer ">#Express</p>
                <p className="bg-gray-500 px-3 rounded-lg font-bold text-xl hover:bg-[#706DFF]  cursor-pointer ">#TypeScript</p>
                <p className="bg-gray-500 px-3 rounded-lg font-bold text-xl hover:bg-[#706DFF]  cursor-pointer ">#Figma</p>
                <p className="bg-gray-500 px-3 rounded-lg font-bold text-xl hover:bg-[#706DFF]  cursor-pointer ">#git</p>
                <p className="bg-gray-500 px-3 rounded-lg font-bold text-xl hover:bg-[#706DFF]  cursor-pointer ">#Mongodb</p>
                <p className="bg-gray-500 px-3 rounded-lg font-bold text-xl hover:bg-[#706DFF]  cursor-pointer ">#Tailwind</p>
                <p className="bg-gray-500 px-3 rounded-lg font-bold text-xl hover:bg-[#706DFF]  cursor-pointer ">#wordpress</p>
                <p className="bg-gray-500 px-3 rounded-lg font-bold text-xl hover:bg-[#706DFF]  cursor-pointer ">#Divi</p>
                <p className="bg-gray-500 px-3 rounded-lg font-bold text-xl hover:bg-[#706DFF]  cursor-pointer ">#Elementor</p>
              </div>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Experience;
