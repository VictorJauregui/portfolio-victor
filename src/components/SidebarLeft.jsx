import React, { useContext } from 'react'
import myPicture from '../assets/myPicture.png'
import red from '../assets/colours/red.png'
import blue from '../assets/colours/blue.png'
import orange from '../assets/colours/orange.png'
import yellow from '../assets/colours/yellow.png'
import purple from '../assets/colours/purple.png'
import green from '../assets/colours/green.png'
import light from '../assets/lightMode.png'
import darkMode from '../assets/darkMode.png'

import profileContext from '../context/ProfileContext'
import { NavLink, useLocation } from 'react-router-dom'

const SidebarLeft = () => {
    const {lightMode, spanishMode, setLightMode, colour, setColour} = useContext(profileContext)
    const location = useLocation();

    console.log(colour)

    const linkClasses = 'mr-10 ml-10 my-1 rounded text-white cursor-pointer';
    const normalLinkClasses = 'cursor-pointer hover:border hover:font-bold';
    const activeLinkClasses =
      (colour === 'red') ? 'bg-[#223343] cursor-pointer font-bold shadow shadow-red-600 transition duration-1000' :
      (colour === 'green') ? 'bg-[#223343] cursor-pointer font-bold shadow shadow-green-500 transition duration-1000' :
      (colour === 'yellow') ? 'bg-[#223343] cursor-pointer font-bold shadow shadow-yellow-300 transition duration-1000' :
      (colour === 'purple') ? 'bg-[#223343] cursor-pointer font-bold shadow shadow-[#FF00D6] transition duration-1000' :
      (colour === 'orange') ? 'bg-[#223343] cursor-pointer font-bold shadow shadow-orange-500 transition duration-1000' :
      (colour === 'blue') ? 'bg-[#223343] cursor-pointer font-bold shadow shadow-[#00E0FF] transition duration-1000' :
      '';

      const bgFullStack =
      (colour === 'red') ? 'text-xl font-bold text-black transform rotate-3 transition duration-1000 bg-red-600 mb-10' :
      (colour === 'green') ? 'text-xl font-bold text-black transform rotate-3 transition duration-1000 bg-green-500 mb-10'  :
      (colour === 'yellow') ? 'text-xl font-bold text-black transform rotate-3 transition duration-1000 bg-yellow-300 mb-10'  :
      (colour === 'purple') ? 'text-xl font-bold text-black transform rotate-3 transition duration-1000 bg-[#FF00D6] mb-10'  :
      (colour === 'orange') ? 'text-xl font-bold text-black transform rotate-3 transition duration-1000 bg-orange-500 mb-10'  :
      (colour === 'blue') ? 'text-xl font-bold text-black transform rotate-3 transition duration-1000 bg-[#00E0FF] mb-10'  :
      '';
  

    const isHobbiesActive = location.pathname === '/hobbies';
    const isAboutMeActive = location.pathname === '/about-me';
    const isExperienceActive = location.pathname === '/experience';
    const isSkillsActive = location.pathname === '/skills';
    const isProjectsActive = location.pathname === '/projects';
  
    const classesToApplyHobbies = isHobbiesActive ? `${linkClasses} ${activeLinkClasses}` : `${linkClasses} ${normalLinkClasses}`;
    const classesToApplyAboutMe = isAboutMeActive ? `${linkClasses} ${activeLinkClasses}` : `${linkClasses} ${normalLinkClasses}`;
    const classesToApplyExperience = isExperienceActive ? `${linkClasses} ${activeLinkClasses}` : `${linkClasses} ${normalLinkClasses}`;
    const classesToApplySkills = isSkillsActive ? `${linkClasses} ${activeLinkClasses}` : `${linkClasses} ${normalLinkClasses}`;
    const classesToApplyProjects = isProjectsActive ? `${linkClasses} ${activeLinkClasses}` : `${linkClasses} ${normalLinkClasses}`;
    
    const paragraphClasses = lightMode
    ? `${bgFullStack}`
    : `${bgFullStack}`;

  return (
    <div className='w-1/4  flex flex-col items-center border-r my-10  '>
        
            <img className='px-10 h-96 pt-10 pb-5 transform hover:rotate-12 transition duration-1000' src={myPicture} alt="" />
            <h2 className='text-white font-extrabold text-3xl z-10  '>VÍCTOR JAUREGUI</h2>
            <p className={paragraphClasses}>FULL STACK DEVELOPER</p>
            <div className='flex flex-col justify-start  w-full mx-20 '>
                <NavLink className={classesToApplyAboutMe }  to='/about-me'>
                        <p className='p-2 '>{spanishMode ? 'SOBRE MI' : 'ABOUT ME ' }</p>
                </NavLink>
                <NavLink className={classesToApplyExperience} to='/experience'>
                        <p className='p-2 '>{spanishMode ? 'EXPERIENCIA' : 'EXPERIENCE' }</p>
                </NavLink>
                <NavLink className={classesToApplySkills} to='/skills'>
                        <p className='p-2 '>{spanishMode ? 'HERRAMIENTAS' : 'SKILLS' }</p>
                </NavLink>
                <NavLink className={classesToApplyProjects} to='/projects'>
                        <p className='p-2 '>{spanishMode ? 'PROYECTOS' : 'PROJECTS' }</p>
                </NavLink>
                <NavLink className={ classesToApplyHobbies} to='/hobbies'>
                        <p className='p-2 '>HOBBIES</p>
                </NavLink>
                <div className='mr-20 ml-20 border-b border-gray-400 pb-20'></div>
            </div>
            <div className={lightMode ? 'flex gap-2 justify-center mt-8 w-fit bg-[#002259]/10 mx-auto px-2 py-1 rounded-full':'flex gap-2 justify-center mt-8 w-fit bg-gray-400 mx-auto px-2 py-1 rounded-full'}>
                <div className={lightMode ? 'flex gap-2 bg-white items-center px-4 py-1 rounded-full border cursor-pointer' : 'flex gap-2  items-center px-4 py-1 rounded-full cursor-pointer' } onClick={()=>setLightMode(true)}>
                    <img className='w-4 h-4' src={light} alt="" />
                    <p className=''>{spanishMode ? 'Día' : 'Light' }</p>
                </div>
                <div className={!lightMode ? 'flex gap-2 bg-white items-center px-4 py-1 rounded-full border cursor-pointer' : 'flex gap-2  items-center px-4 py-1 rounded-full cursor-pointer' } onClick={()=>setLightMode(false)}>
                    <img className='w-4 h-4' src={darkMode} alt="" />
                    <p className=''>{!spanishMode ? 'Night' : 'Noche' }</p>
                </div>
            </div>
            <div className='bg-[#223343] rounded-full flex py-1 px-2 mt-10 gap-2 items-center'>
                <img className={colour === "blue" ? 'rounded-full w-8 h-8 cursor-pointer border-2 border-blue-300' : 'rounded-full w-6 h-6 cursor-pointer'}  src={blue} alt="" onClick={()=>setColour("blue")} />
                <img className={colour === "yellow" ? 'rounded-full w-8 h-8 cursor-pointer border-2 border-blue-300' : 'rounded-full w-6 h-6 cursor-pointer'} src={yellow} alt="" onClick={()=>setColour("yellow")} />
                <img className={colour === "red" ? 'rounded-full w-8 h-8 cursor-pointer border-2 border-blue-300' : 'rounded-full w-6 h-6 cursor-pointer'} src={red} alt="" onClick={()=>setColour("red")} />
                <img className={colour === "green" ? 'rounded-full w-8 h-8 cursor-pointer border-2 border-blue-300' : 'rounded-full w-6 h-6 cursor-pointer'} src={green} alt="" onClick={()=>setColour("green")} />
                <img className={colour === "orange" ? 'rounded-full w-8 h-8 cursor-pointer border-2 border-blue-300' : 'rounded-full w-6 h-6 cursor-pointer'}  src={orange} alt="" onClick={()=>setColour("orange")} />
                <img className={colour === "purple" ? 'rounded-full w-8 h-8 cursor-pointer border-2 border-blue-300' : 'rounded-full w-6 h-6 cursor-pointer'}  src={purple} alt="" onClick={()=>setColour("purple")} />
            </div>
        </div>
  )
}

export default SidebarLeft