import React, { useContext } from 'react'
import SidebarLeft from '../components/SidebarLeft'
import Language from '../components/Language'
import react from '../assets/react.png'
import css from '../assets/css.png'
import html from '../assets/html.png'
import tailwind from '../assets/tailwind.png'
import typeScript from '../assets/typescript.png'
import mongo from '../assets/mongo.png'
import node from '../assets/node.png'
import javascript from '../assets/javascript.png'
import figma from '../assets/figma.png'
import php from '../assets/php.png'
import ProgressBar from '../components/ProgressBar'

import profileContext from '../context/ProfileContext'
import TopPhoneMenu from '../components/TopPhoneMenu'
import ModeNightAndLightPhone from '../components/ModeNightAndLight'
import ChangeColorPhone from '../components/ChangeColorPhone'
import SidebarPhone from '../components/SidebarPhone'

const Skills = () => {
    const { lightMode, spanishMode, colour, menuPhone } = useContext(profileContext);

    const colorFont =
    (colour === 'red') ? 'font-extrabold text-3xl 2xl:text-5xl text-red-600 transition duration-1000' :
    (colour === 'green') ? 'font-extrabold text-3xl 2xl:text-5xl text-green-500 transition duration-1000'  :
    (colour === 'yellow') ? 'font-extrabold text-3xl 2xl:text-5xl text-yellow-300 transition duration-1000'  :
    (colour === 'purple') ? 'font-extrabold text-3xl 2xl:text-5xl text-[#FF00D6] transition duration-1000   '  :
    (colour === 'orange') ? 'font-extrabold text-3xl 2xl:text-5xl text-orange-500 transition duration-1000'  :
    (colour === 'blue') ? 'font-extrabold text-3xl 2xl:text-5xl text-[#00E0FF] transition duration-1000 '  :
    '';

  return (
    <div
      className={
        lightMode
          ? "bg-gradient-to-b from-[#1C1B48] to-[#706DFF] min-h-screen flex  "
          : "bg-gradient-to-b from-[black] via-black  to-[#002259]/90 min-h-screen flex "
      }
    >
      <TopPhoneMenu />
      <SidebarLeft />
      <Language />
      <div className="mt-28 lg:mt-20 mx-4 sm:mx-6 md:mx-8 lg:mx-10 2xl:m-20 w-full lg:w-3/4">
        <div className={colorFont}>
            <h2>{spanishMode ? "Herramientas" : "Skills"}</h2>
        </div>
        <div className={lightMode ? 'bg-white mt-4 2xl:mt-10 rounded p-6 2xl:p-10 text-[#002259] max-h-[65vh] md:max-h-[70vh] overflow-y-scroll scrollbar-hide' : 'bg-[#223343] border-2 mt-4 2xl:mt-10 rounded p-6 2xl:p-10 text-white max-h-[65vh] md:max-h-[70vh] overflow-y-scroll scrollbar-hide' }>
            <div className='grid md:grid-cols-2 gap-x-10 2xl:gap-x-20 gap-y-10 items-center'>
                <div className='flex  md:flex items-center md:items-start md:flex-col md:justify-center gap-x-16 '>
                    <div className='flex w-3/6 items-center gap-3  font-bold md:mb-5 h-10'>
                        <img className='w-12' src={react} alt="" />
                        <p>REACT</p>
                    </div>
                    <ProgressBar className='w-3/6' porcentage={70} />
                </div>
                <div className='flex  md:flex items-center md:items-start md:flex-col md:justify-center gap-x-16'>
                    <div className='flex w-3/6 items-center gap-3  font-bold md:mb-5 h-10'>
                        <img className='w-12' src={css} alt="" />
                        <p>HTML</p>
                    </div>
                    <ProgressBar className='w-3/6' porcentage={80} />
                </div>
                <div className='flex md:flex items-center md:items-start md:flex-col md:justify-center gap-x-16'>
                    <div className='flex w-3/6 items-center gap-3  font-bold md:mb-5 h-10'>
                        <img className='w-12' src={html} alt="" />
                        <p>CSS</p>
                    </div>
                    <ProgressBar className='w-3/6' porcentage={80} />
                </div>
                <div className='flex md:flex items-center md:items-start md:flex-col md:justify-center gap-x-16'>
                    <div className='flex w-3/6  items-center gap-3  font-bold md:mb-5 h-10'>
                        <img className='w-12' src={tailwind} alt="" />
                        <p>TAILWIND</p>
                    </div>
                    <ProgressBar className='w-3/6' porcentage={90} />
                </div>
                <div className='flex md:flex items-center md:items-start md:flex-col md:justify-center gap-x-16'>
                    <div className='flex w-3/6  items-center gap-3  font-bold md:mb-5 h-10'>
                        <img className='w-12' src={typeScript} alt="" />
                        <p>TYPESCRIPT</p>
                    </div>
                    <ProgressBar className='w-3/6' porcentage={40} />
                </div>
                <div className='flex md:flex items-center md:items-start md:flex-col md:justify-center gap-x-16'>
                    <div className='flex w-3/6  items-center gap-3  font-bold md:mb-5 h-10'>
                        <img className='w-12' src={mongo} alt="" />
                        <p>MONGODB</p>
                    </div>
                    <ProgressBar className='w-3/6' porcentage={70} />
                </div>
                <div className='flex md:flex items-center md:items-start md:flex-col md:justify-center gap-x-16'>
                    <div className='flex w-3/6  items-center gap-3  font-bold md:mb-5 h-10'>
                        <img className='w-12' src={node} alt="" />
                        <p>NODE</p>
                    </div>
                    <ProgressBar className='w-3/6' porcentage={70} />
                </div>
                <div className='flex md:flex items-center md:items-start md:flex-col md:justify-center gap-x-16'>
                    <div className='flex w-3/6  items-center gap-3  font-bold md:mb-5 h-10'>
                        <img className='w-12' src={javascript} alt="" />
                        <p>JAVASCRIPT</p>
                    </div>
                    <ProgressBar className='w-3/6' porcentage={80} />
                </div>
                <div className='flex md:flex items-center md:items-start md:flex-col md:justify-center gap-x-16'>
                    <div className='flex w-3/6 items-center gap-3  font-bold md:mb-5 h-10'>
                        <img className='w-8' src={figma} alt="" />
                        <p>FIGMA</p>
                    </div>
                    <ProgressBar className='w-3/6' porcentage={90} />
                </div>
                <div className='flex md:flex items-center md:items-start md:flex-col md:justify-center gap-x-16'>
                    <div className='flex w-3/6 items-center gap-3  font-bold md:mb-5 h-10'>
                        <img className='w-12' src={php} alt="" />
                        <p>PHP</p>
                    </div>
                    <ProgressBar className='w-3/6' porcentage={40} />
                </div>
            </div>

        </div>
        <ModeNightAndLightPhone />
        <ChangeColorPhone />
        {
          menuPhone &&
          <SidebarPhone />
        }
      </div>
    </div>
  )
}

export default Skills