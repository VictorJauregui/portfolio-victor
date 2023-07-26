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

import linkedin from '../assets/RRSS/in.png'
import github from '../assets/RRSS/github.png'

import profileContext from '../context/ProfileContext'
import { NavLink, useLocation } from 'react-router-dom'

const SidebarLeft = () => {
    const {lightMode, spanishMode, setLightMode, colour, setColour} = useContext(profileContext)
    const location = useLocation();

    console.log(colour)

    const linkClasses = 'mr-4 ml-4 2xl:mr-10 2xl:ml-10 my-1 rounded text-white cursor-pointer';
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
      (colour === 'red') ? 'text-sm 2xl:text-xl font-bold text-black transform rotate-3 transition duration-1000 bg-red-600 mb-20 2xl:mb-10' :
      (colour === 'green') ? 'text-sm 2xl:text-xl font-bold text-black transform rotate-3 transition duration-1000 bg-green-500 mb-20 2xl:mb-10'  :
      (colour === 'yellow') ? 'text-sm 2xl:text-xl font-bold text-black transform rotate-3 transition duration-1000 bg-yellow-300 mb-20 2xl:mb-10'  :
      (colour === 'purple') ? 'text-sm 2xl:text-xl font-bold text-black transform rotate-3 transition duration-1000 bg-[#FF00D6] mb-20 2xl:mb-10'  :
      (colour === 'orange') ? 'text-sm 2xl:text-xl font-bold text-black transform rotate-3 transition duration-1000 bg-orange-500 mb-20 2xl:mb-10'  :
      (colour === 'blue') ? 'text-sm 2xl:text-xl font-bold text-black transform rotate-3 transition duration-1000 bg-[#00E0FF] mb-20 2xl:mb-10'  :
      '';

      const sidebarDesign =
      (colour === 'red') ? 'hidden lg:w-1/4   lg:flex lg:flex-col items-center border-r border-red-600 h-screen justify-center   transition duration-1000' :
      (colour === 'green') ? 'hidden lg:w-1/4   lg:flex lg:flex-col items-center border-r border-green-500 h-screen justify-center   transition duration-1000'   :
      (colour === 'yellow') ? 'hidden lg:w-1/4   lg:flex lg:flex-col items-center border-r border-yellow-300 h-screen justify-center   transition duration-1000'  :
      (colour === 'purple') ? 'hidden lg:w-1/4   lg:flex lg:flex-col items-center border-r border-[#FF00D6] h-screen justify-center   transition duration-1000'  :
      (colour === 'orange') ? 'hidden lg:w-1/4   lg:flex lg:flex-col items-center border-r border-orange-500 h-screen justify-center   transition duration-1000'   :
      (colour === 'blue') ? 'hidden lg:w-1/4   lg:flex lg:flex-col items-center border-r border-[#00E0FF] h-screen justify-center   transition duration-1000'  :
      '';
  

    const isHobbiesActive = location.pathname === '/hobbies';
    const isAboutMeActive = location.pathname === '/about-me';
    const isExperienceActive = location.pathname === '/experience';
    const isSkillsActive = location.pathname === '/skills';
    const isProjectsActive = location.pathname === '/projects';
    const isContactActive = location.pathname === '/contact';
  
    const classesToApplyHobbies = isHobbiesActive ? `${linkClasses} ${activeLinkClasses}` : `${linkClasses} ${normalLinkClasses}`;
    const classesToApplyAboutMe = isAboutMeActive ? `${linkClasses} ${activeLinkClasses}` : `${linkClasses} ${normalLinkClasses}`;
    const classesToApplyExperience = isExperienceActive ? `${linkClasses} ${activeLinkClasses}` : `${linkClasses} ${normalLinkClasses}`;
    const classesToApplySkills = isSkillsActive ? `${linkClasses} ${activeLinkClasses}` : `${linkClasses} ${normalLinkClasses}`;
    const classesToApplyProjects = isProjectsActive ? `${linkClasses} ${activeLinkClasses}` : `${linkClasses} ${normalLinkClasses}`;
    const classesToApplyContact = isContactActive ? `${linkClasses} ${activeLinkClasses}` : `${linkClasses} ${normalLinkClasses}`;
    
    const paragraphClasses = lightMode
    ? `${bgFullStack}`
    : `${bgFullStack}`;

  return (
    <div className={sidebarDesign}>
        
            <img className=' h-60 xl:h-60 2xl:h-80  pb-5 mx-4 transform hover:rotate-12 transition duration-1000' src={myPicture} alt="" />
            <h2 className='text-white font-extrabold xl:text-xl 2xl:text-3xl z-10  '>VÍCTOR JAUREGUI</h2>
            <p className={paragraphClasses}>FULL STACK DEVELOPER</p>
            <div className='flex flex-col justify-start  w-full xl:mx-10 2xl:mx-20 '>
                <NavLink className={classesToApplyAboutMe }  to='/about-me'>
                        <p className='p-2 text-sm 2xl:text-lg '>{spanishMode ? 'SOBRE MI' : 'ABOUT ME ' }</p>
                </NavLink>
                <NavLink className={classesToApplyExperience} to='/experience'>
                        <p className='p-2 text-sm 2xl:text-lg '>{spanishMode ? 'EXPERIENCIA' : 'EXPERIENCE' }</p>
                </NavLink>
                <NavLink className={classesToApplySkills} to='/skills'>
                        <p className='p-2 text-sm 2xl:text-lg'>{spanishMode ? 'HERRAMIENTAS' : 'SKILLS' }</p>
                </NavLink>
                <NavLink className={classesToApplyProjects} to='/projects'>
                        <p className='p-2 text-sm 2xl:text-lg'>{spanishMode ? 'PROYECTOS' : 'PROJECTS' }</p>
                </NavLink>
                <NavLink className={ classesToApplyHobbies} to='/hobbies'>
                        <p className='p-2 text-sm 2xl:text-lg'>HOBBIES</p>
                </NavLink>
                <NavLink className={ classesToApplyContact} to='/contact'>
                        <p className='p-2 text-sm 2xl:text-lg'>{spanishMode ? 'CONTACTO' : 'CONTACT' }</p>
                </NavLink>
                <div className='mr-20 ml-20 border-b border-gray-400 pb-20'></div>
            </div>
            <div className={lightMode ? 'flex gap-2 justify-center mt-8 w-fit bg-[#002259]/10 mx-auto px-2 py-1 rounded-full':'flex gap-2 justify-center mt-8 w-fit bg-gray-400 mx-auto px-2 py-1 rounded-full'}>
                <div className={lightMode ? 'flex gap-2 bg-white items-center px-4 py-1 rounded-full border cursor-pointer' : 'flex gap-2  items-center px-4 py-1 rounded-full cursor-pointer' } onClick={()=>setLightMode(true)}>
                    <img className='w-4 h-4' src={light} alt="" />
                    <p className='hidden 2xl:flex'>{spanishMode ? 'Día' : 'Light' }</p>
                </div>
                <div className={!lightMode ? 'flex gap-2 bg-white items-center px-4 py-1 rounded-full border cursor-pointer' : 'flex gap-2  items-center px-4 py-1 rounded-full cursor-pointer' } onClick={()=>setLightMode(false)}>
                    <img className='w-4 h-4' src={darkMode} alt="" />
                    <p className='hidden 2xl:flex'>{!spanishMode ? 'Night' : 'Noche' }</p>
                </div>
            </div>
            <div className='bg-[#223343] rounded-full flex py-1 px-2 mt-10 gap-2 items-center'>
                <img className={colour === "blue" ? 'rounded-full w-4 h-4 2xl:w-8 2xl:h-8 cursor-pointer border-2 border-blue-300' : 'rounded-full w-4 h-4 2xl:w-8 2xl:h-8 cursor-pointer'}  src={blue} alt="" onClick={()=>setColour("blue")} />
                <img className={colour === "yellow" ? 'rounded-full w-4 h-4  2xl:w-8 2xl:h-8 cursor-pointer border-2 border-blue-300' : 'rounded-full w-4 h-4 2xl:w-8 2xl:h-8 cursor-pointer'} src={yellow} alt="" onClick={()=>setColour("yellow")} />
                <img className={colour === "red" ? 'rounded-full w-4 h-4 2xl:w-8 2xl:h-8 cursor-pointer border-2 border-blue-300' : 'rounded-full w-4 h-4 2xl:w-8 2xl:h-8 cursor-pointer'} src={red} alt="" onClick={()=>setColour("red")} />
                <img className={colour === "green" ? 'rounded-full w-4 h-4 2xl:w-8 2xl:h-8 cursor-pointer border-2 border-blue-300' : 'rounded-full w-4 h-4 2xl:w-8 2xl:h-8 cursor-pointer'} src={green} alt="" onClick={()=>setColour("green")} />
                <img className={colour === "orange" ? 'rounded-full w-4 h-4 2xl:w-8 2xl:h-8 cursor-pointer border-2 border-blue-300' : 'rounded-full w-4 h-4 2xl:w-8 2xl:h-8 cursor-pointer'}  src={orange} alt="" onClick={()=>setColour("orange")} />
                <img className={colour === "purple" ? 'rounded-full w-4 h-4 2xl:w-8 2xl:h-8 cursor-pointer border-2 border-blue-300' : 'rounded-full w-4 h-4 2xl:w-8 2xl:h-8 cursor-pointer'}  src={purple} alt="" onClick={()=>setColour("purple")} />
            </div>
        </div>
  )
}

export default SidebarLeft