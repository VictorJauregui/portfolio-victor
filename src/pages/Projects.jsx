import React, { useContext } from 'react'
import profileContext from '../context/ProfileContext'
import SidebarLeft from '../components/SidebarLeft'
import Language from '../components/Language'
import mussky from '../assets/mussky.png'
import musskyImg from '../assets/musskyImg.png'
import github from '../assets/github.png'
import eye from '../assets/eye.png'
import { NavLink } from 'react-router-dom'

const Projects = () => {
    const {lightMode, spanishMode} = useContext(profileContext)
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
      <h2 className="text-white font-extrabold text-5xl">{spanishMode ? "Proyectos" : "Projects"}</h2>
      <div className={lightMode ? 'bg-white mt-10 rounded p-10 text-[#002259]' : 'bg-[#223343] border-2 mt-10 rounded p-10 text-white' }>
        <img className='w-40' src={mussky} alt="" />
        <div className='flex h-full items-center mt-6'>
            <div className='w-3/5 h-full '>
                <p className='font-extrabold text-xl '>{spanishMode ? "APLICACIÓN DE MÚSICA":"MUSIC APP"}</p>
                <p className='mt-6'>{spanishMode ? "La aplicación ofrece diversas funcionalidades, como escuchar música, subir canciones, crear playlists personalizadas y añadir canciones a dichas playlists. En resumen, Musky proporciona una experiencia musical completa y versátil para los usuarios, permitiéndoles disfrutar de su música favorita y personalizar sus propias listas de reproducción.": "The application offers various functionalities, such as listening to music, uploading songs, creating personalized playlists, and adding songs to those playlists. In summary, Musky provides a complete and versatile musical experience for users, allowing them to enjoy their favorite music and customize their own playlists."}</p>
                <div className='flex justify-end items-end gap-3'>
                    <NavLink to="https://github.com/Coldaniel2001/musSky">
                        <div className={!lightMode ? 'flex bg-[#706DFF] px-3 rounded items-center gap-3 py-1 mt-10 cursor-pointer hover:px-4 hover:py-2 transition-all duration-500':'flex bg-[#706DFF] border border-black px-3 rounded items-center gap-3 py-1 mt-10 cursor-pointer hover:px-4 hover:py-2 transition-all duration-500' }>
                            <img className='w-6' src={github} alt="" />
                            <p className='text-black font-bold'>{spanishMode ? "Ver front" : "Front-end view"}</p>
                        </div>
                    </NavLink>
                    <NavLink to="https://github.com/Coldaniel2001/musSky-backend">
                        <div className={!lightMode ? 'flex bg-[#706DFF] px-3 rounded items-center gap-3 py-1 mt-10 cursor-pointer hover:px-4 hover:py-2 transition-all duration-500':'flex bg-[#706DFF] border border-black px-3 rounded items-center gap-3 py-1 mt-10 cursor-pointer hover:px-4 hover:py-2 transition-all duration-500' }>
                            <img className='w-6' src={github} alt="" />
                            <p className='text-black font-bold'>{spanishMode ? "Ver back" : "Back-end view"}</p>
                        </div>
                    </NavLink>
                    <NavLink to="https://melodic-dango-182072.netlify.app/">
                        <div className={!lightMode ? 'flex bg-[#00A3FF] px-3 rounded items-center gap-3 py-1 mt-10 cursor-pointer hover:px-4 hover:py-2 transition-all duration-500':'flex bg-[#00A3FF] border border-black px-3 rounded items-center gap-3 py-1 mt-10 cursor-pointer hover:px-4 hover:py-2 transition-all duration-500' }>
                            <img className='w-6 ' src={eye} alt="" />
                            <p className='text-black font-bold'>{spanishMode ? "Ver proyecto" : "See project "}</p>
                        </div>
                    </NavLink>
                </div>
            </div>
            <img className='w-[30%] mx-auto rounded ' src={musskyImg} alt="" />
        </div>
      </div>
      
    </div>
  </div>

  )
}

export default Projects