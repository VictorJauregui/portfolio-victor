import React, { useContext } from 'react'
import myPicture from '../assets/myPicture.png'
import light from '../assets/lightMode.png'
import darkMode from '../assets/darkMode.png'

import profileContext from '../context/ProfileContext'
import { NavLink, useLocation } from 'react-router-dom'

const SidebarLeft = () => {
    const {lightMode, spanishMode, setLightMode} = useContext(profileContext)
    const location = useLocation();
  return (
    <div className='w-1/4  flex flex-col items-center border-r my-10  '>
        
            <img className='px-10 h-96 pt-10 pb-5' src={myPicture} alt="" />
            <h2 className='text-white font-extrabold text-3xl'>VÍCTOR JAUREGUI</h2>
            <p className={lightMode ? 'text-xl font-bold':'text-xl font-bold text-gray-500'}>FULL STACK DEVELOPER</p>
            <div className='flex flex-col justify-start  w-full mx-20 '>
                <NavLink className={location.pathname === '/about-me' ? 'mr-10 ml-10 mt-10  my-1 rounded text-white border bg-[#223343] cursor-pointer font-bold':'mr-10 ml-10 mt-10 my-1 rounded text-white  cursor-pointer hover:border hover:font-bold'} to='/about-me'>
                        <p className='p-2 '>{spanishMode ? 'SOBRE MI' : 'ABOUT ME ' }</p>
                </NavLink>
                <NavLink className={location.pathname === '/experience' ? 'mr-10 ml-10  my-1 rounded text-white border bg-[#223343] cursor-pointer font-bold':'mr-10 ml-10 my-1 rounded text-white  cursor-pointer hover:border hover:font-bold'} to='/experience'>
                        <p className='p-2 '>{spanishMode ? 'EXPERIENCIA' : 'EXPERIENCE' }</p>
                </NavLink>
                <NavLink className={location.pathname === '/skills' ? 'mr-10 ml-10  my-1 rounded text-white border bg-[#223343] cursor-pointer font-bold':'mr-10 ml-10 my-1 rounded text-white  cursor-pointer hover:border hover:font-bold'} to='/skills'>
                        <p className='p-2 '>{spanishMode ? 'HERRAMIENTAS' : 'SKILLS' }</p>
                </NavLink>
                <NavLink className={location.pathname === '/projects' ? 'mr-10 ml-10  my-1 rounded text-white border bg-[#223343] cursor-pointer font-bold':'mr-10 ml-10 my-1 rounded text-white  cursor-pointer hover:border hover:font-bold'} to='/projects'>
                        <p className='p-2 '>{spanishMode ? 'PROYECTOS' : 'PROJECTS' }</p>
                </NavLink>
                <div className='mr-10 ml-10 my-1 rounded text-white  cursor-pointer hover:border hover:font-bold'>
                    <p className='p-2  '>{spanishMode ? 'HOBBIES' : 'HOBBIES' }</p>
                </div>
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
        </div>
  )
}

export default SidebarLeft