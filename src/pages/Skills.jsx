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

const Skills = () => {
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
            <h2>{spanishMode ? "Herramientas" : "Skills"}</h2>

        </div>
        <div className={lightMode ? 'bg-white mt-10 rounded p-10 text-[#002259]' : 'bg-[#223343] border-2 mt-10 rounded p-10 text-white' }>
            <div className='grid grid-cols-2 gap-x-40 gap-y-10'>
                <div className=''>
                    <div className='flex items-center gap-3  font-bold mb-5 h-10'>
                        <img className='w-12' src={react} alt="" />
                        <p>REACT</p>
                    </div>
                    <ProgressBar porcentage={70} />
                </div>
                <div>
                    <div className='flex items-center gap-3  font-bold mb-5 h-10 '>
                        <img className='w-12' src={css} alt="" />
                        <p>HTML</p>
                    </div>
                    <ProgressBar porcentage={80} />
                </div>
                <div>
                    <div className='flex items-center gap-3  font-bold mb-5 h-10 '>
                        <img className='w-12' src={html} alt="" />
                        <p>CSS</p>
                    </div>
                    <ProgressBar porcentage={80} />
                </div>
                <div>
                    <div className='flex items-center gap-3  font-bold mb-5 h-10 '>
                        <img className='w-12' src={tailwind} alt="" />
                        <p>TAILWIND</p>
                    </div>
                    <ProgressBar porcentage={90} />
                </div>
                <div>
                    <div className='flex items-center gap-3  font-bold mb-5 h-10 '>
                        <img className='w-12' src={typeScript} alt="" />
                        <p>TYPESCRIPT</p>
                    </div>
                    <ProgressBar porcentage={40} />
                </div>
                <div>
                    <div className='flex items-center gap-3  font-bold mb-5 h-10 '>
                        <img className='w-12' src={mongo} alt="" />
                        <p>MONGODB</p>
                    </div>
                    <ProgressBar porcentage={70} />
                </div>
                <div>
                    <div className='flex items-center gap-3  font-bold mb-5 h-10 '>
                        <img className='w-12' src={node} alt="" />
                        <p>NODE</p>
                    </div>
                    <ProgressBar porcentage={70} />
                </div>
                <div>
                    <div className='flex items-center gap-3  font-bold mb-5 h-10 '>
                        <img className='w-12' src={javascript} alt="" />
                        <p>JAVASCRIPT</p>
                    </div>
                    <ProgressBar porcentage={80} />
                </div>
                <div>
                    <div className='flex items-center gap-3  font-bold mb-5 h-10 '>
                        <img className='w-8' src={figma} alt="" />
                        <p>FIGMA</p>
                    </div>
                    <ProgressBar porcentage={90} />
                </div>
                <div>
                    <div className='flex items-center gap-3  font-bold mb-5 h-10 '>
                        <img className='w-12' src={php} alt="" />
                        <p>PHP</p>
                    </div>
                    <ProgressBar porcentage={40} />
                </div>
            </div>

        </div>
        
      </div>
    </div>
  )
}

export default Skills