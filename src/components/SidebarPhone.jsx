import React, { useContext } from 'react'
import profileContext from '../context/ProfileContext'
import { NavLink } from 'react-router-dom';

const SidebarPhone = () => {
    const {spanishMode, colour,setMenuPhone}  = useContext(profileContext)

    const colorModal =
    (colour === 'red') ? 'fixed top-16 bg-white border-2 border-red-600 lg:hidden w-[95%]  px-4 rounded ml-2 mr-2 transition duration-1000 text-[#002259]' :
    (colour === 'green') ? 'fixed top-16 bg-white border-2 border-green-500 lg:hidden w-[95%] px-4 rounded ml-2 mr-2 transition duration-1000 text-[#002259]'  :
    (colour === 'yellow') ? 'fixed top-16 bg-white border-2 border-yellow-300 lg:hidden w-[95%] px-4 rounded ml-2 mr-2 transition duration-1000 text-[#002259]'  :
    (colour === 'purple') ? 'fixed top-16 bg-white border-2 border-[#FF00D6] lg:hidden w-[95%] px-4 rounded ml-2 mr-2 transition duration-1000 text-[#002259]'  :
    (colour === 'orange') ? 'fixed top-16 bg-white border-2 border-orange-500 lg:hidden w-[95%] px-4 rounded ml-2 mr-2 transition duration-1000 text-[#002259]'  :
    (colour === 'blue') ? 'fixed top-16 bg-white border-2 border-[#00E0FF] lg:hidden w-[95%] px-4 rounded ml-2 mr-2 transition duration-1000 text-[#002259]'  :
    '';
    

  return (
    <div className='flex ml-auto'>

        <div className={colorModal}>
            <NavLink to='/about-me' onClick={()=>setMenuPhone(false)}>
                <p className='py-2 border-b text-xl  cursor-pointer'>{spanishMode ? 'Sobre mí' : "About me"}</p>
            </NavLink>
            <NavLink to='/experience' onClick={()=>setMenuPhone(false)} >
                <p className='py-2 border-b text-xl  cursor-pointer'>{spanishMode ? 'Experiencia' : "Experience"}</p>
            </NavLink>
            <NavLink to='/projects' onClick={()=>setMenuPhone(false)}>
                <p className='py-2 border-b text-xl  cursor-pointer'>{spanishMode ? 'Proyectos' : "Projects"}</p>
            </NavLink>
            <NavLink to='/skills' onClick={()=>setMenuPhone(false)}>
                <p className='py-2 border-b text-xl  cursor-pointer'>{spanishMode ? 'Herramientas' : "Skills"}</p>
            </NavLink>
            <NavLink to='/hobbies' onClick={()=>setMenuPhone(false)}>
                <p className='py-2  text-xl cursor-pointer'>Hobbies</p>
            </NavLink>

        </div>
    </div>
  )
}

export default SidebarPhone