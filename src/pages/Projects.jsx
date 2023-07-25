import React, { useContext } from 'react'
import profileContext from '../context/ProfileContext'
import SidebarLeft from '../components/SidebarLeft'
import Language from '../components/Language'
import mussky from '../assets/mussky.png'
import musskyBlack from '../assets/musskyBlack.png'
import musskyImg from '../assets/musskyImg.png'
import github from '../assets/github.png'
import eye from '../assets/eye.png'
import minions from '../assets/minions.png'
import minionsImg from '../assets/minionsImg.png'
import pdq from '../assets/pdq.png'
import pdqImg from '../assets/pdqImg.png'
import { NavLink } from 'react-router-dom'

const Projects = () => {
    const {lightMode, spanishMode, colour} = useContext(profileContext)
    
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
        <h2>{spanishMode ? "Proyectos" : "Projects"}</h2>
      </div>
      <div className={lightMode ? 'bg-white mt-10 rounded p-10 text-[#002259] max-h-[70vh] overflow-y-scroll scrollbar-hide' : 'bg-[#223343] border-2 mt-10 rounded p-10 text-white max-h-[70vh] overflow-y-scroll scrollbar-hide' }>
        <img className='w-40' src={lightMode ? musskyBlack : mussky} alt="" />
        <div className='flex h-full items-center mt-6'>
            <div className='w-3/5 h-full '>
                <p className='font-extrabold text-xl '>{spanishMode ? "APLICACIÓN DE MÚSICA":"MUSIC APP"}</p>
                <p className='mt-6'>{spanishMode ? "La aplicación ofrece diversas funcionalidades, como escuchar música, subir canciones, crear playlists personalizadas y añadir canciones a dichas playlists. En resumen, Musky proporciona una experiencia musical completa y versátil para los usuarios, permitiéndoles disfrutar de su música favorita y personalizar sus propias listas de reproducción. Diseño responsive.": "The application offers various functionalities, such as listening to music, uploading songs, creating personalized playlists, and adding songs to those playlists. In summary, Musky provides a complete and versatile musical experience for users, allowing them to enjoy their favorite music and customize their own playlists. Responsive design"}</p>
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
            <NavLink to="https://melodic-dango-182072.netlify.app/" className="w-2/5">
              <img className='w-[80%] mx-auto rounded  hover:border-2 hover:border-[#706DFF] transition-all duration-500 cursor-pointer hover:w-[82%] ' src={musskyImg} alt="" />
            </NavLink>
        </div>
        <hr className='mx-60 my-14 '/>
        <img className='w-40 ' src={minions} alt="" />
        <div className='flex h-full items-center mt-6'>
            <div className='w-3/5 h-full '>
                <p className='font-extrabold text-xl '>{spanishMode ? "APLICACIÓN DE GIFS":"GIFS APP"}</p>
                <p className='mt-6'>{spanishMode ? "La aplicación ofrece diversas funcionalidades, como ver gifs, darle a me gusta, editar, borrar y copiar la url para compartir. Además podrás subir tus Gifs a través de una url externa o desde tu propio dispositivo. Podrás almacenarlos en tres diferentes carpetas en función del tipo de gif y además tendrás almacenados todos los gifs que te gustan en una sola carpeta. Diseño responsive.": "The application offers various functionalities, such as viewing gifs, liking them, editing, deleting, and copying the URL for sharing. Additionally, you will be able to upload your gifs through an external URL or from your own device. You can store them in three different folders based on the type of gif, and you will also have all the gifs you like stored in a single folder. Responsive design."}</p>
                <div className='flex justify-end items-end gap-3'>
                    <NavLink to="https://github.com/VictorJauregui/minion-gifs">
                        <div className={!lightMode ? 'flex bg-[#706DFF] px-3 rounded items-center gap-3 py-1 mt-10 cursor-pointer hover:px-4 hover:py-2 transition-all duration-500':'flex bg-[#706DFF] border border-black px-3 rounded items-center gap-3 py-1 mt-10 cursor-pointer hover:px-4 hover:py-2 transition-all duration-500' }>
                            <img className='w-6' src={github} alt="" />
                            <p className='text-black font-bold'>{spanishMode ? "Ver front" : "Front-end view"}</p>
                        </div>
                    </NavLink>
                    <NavLink to="https://github.com/VictorJauregui/minion-gifs-back">
                        <div className={!lightMode ? 'flex bg-[#706DFF] px-3 rounded items-center gap-3 py-1 mt-10 cursor-pointer hover:px-4 hover:py-2 transition-all duration-500':'flex bg-[#706DFF] border border-black px-3 rounded items-center gap-3 py-1 mt-10 cursor-pointer hover:px-4 hover:py-2 transition-all duration-500' }>
                            <img className='w-6' src={github} alt="" />
                            <p className='text-black font-bold'>{spanishMode ? "Ver back" : "Back-end view"}</p>
                        </div>
                    </NavLink>
                    <NavLink to="https://genuine-khapse-f333c0.netlify.app/">
                        <div className={!lightMode ? 'flex bg-[#00A3FF] px-3 rounded items-center gap-3 py-1 mt-10 cursor-pointer hover:px-4 hover:py-2 transition-all duration-500':'flex bg-[#00A3FF] border border-black px-3 rounded items-center gap-3 py-1 mt-10 cursor-pointer hover:px-4 hover:py-2 transition-all duration-500' }>
                            <img className='w-6 ' src={eye} alt="" />
                            <p className='text-black font-bold'>{spanishMode ? "Ver proyecto" : "See project "}</p>
                        </div>
                    </NavLink>
                </div>
            </div>
            <NavLink to="https://genuine-khapse-f333c0.netlify.app/" className="w-2/5">
              <img className='w-[80%] mx-auto rounded  hover:border-2 hover:border-[#706DFF] transition-all duration-500 cursor-pointer hover:w-[82%] ' src={minionsImg} alt="" />
            </NavLink>
        </div>
        <hr className='mx-60 my-14 '/>
        <img className='w-40 h-16 ' src={pdq} alt="" />
        <div className='flex h-full items-center mt-6'>
            <div className='w-3/5 h-full '>
                <p className='font-extrabold text-xl '>{spanishMode ? "APLICACIÓN DE GESTIÓN DE PEDIDOS":"ORDER MANAGEMENT APP"}</p>
                <p className='mt-6'>{spanishMode ? "La aplicación es un sistema completo que proporciona diversas funcionalidades para gestionar de manera efectiva y eficiente los pedidos, clientes y productos. En cuanto a los pedidos, tendrás la capacidad de crear nuevos pedidos y también editarlos según la información y las necesidades actuales. Podrás acceder a todas tus órdenes y tener un control total sobre ellas.Además, la aplicación te permitirá llevar un control del estado de los pedidos. Podrás marcar los pedidos como completados una vez que hayas satisfecho todas las comandas y estén listos para su entrega. Esta función te ayudará a mantener un seguimiento preciso del progreso de cada pedido. Diseño responsive.": "The application is a comprehensive system that provides various functionalities to manage orders, clients, and products effectively and efficiently. Regarding orders, you will have the capability to create new orders and also edit them based on current information and needs. You will be able to access all your orders and have total control over them. Additionally, the application will allow you to keep track of the status of the orders. You can mark orders as completed once you have fulfilled all the commands and they are ready for delivery. This feature will help you maintain accurate tracking of the progress of each order. Responsive design."}</p>
                <div className='flex justify-end items-end gap-3'>
                    <NavLink to="https://github.com/VictorJauregui/prodequim">
                        <div className={!lightMode ? 'flex bg-[#706DFF] px-3 rounded items-center gap-3 py-1 mt-10 cursor-pointer hover:px-4 hover:py-2 transition-all duration-500':'flex bg-[#706DFF] border border-black px-3 rounded items-center gap-3 py-1 mt-10 cursor-pointer hover:px-4 hover:py-2 transition-all duration-500' }>
                            <img className='w-6' src={github} alt="" />
                            <p className='text-black font-bold'>{spanishMode ? "Ver front" : "Front-end view"}</p>
                        </div>
                    </NavLink>
                    <NavLink to="https://github.com/VictorJauregui/prodequim-back">
                        <div className={!lightMode ? 'flex bg-[#706DFF] px-3 rounded items-center gap-3 py-1 mt-10 cursor-pointer hover:px-4 hover:py-2 transition-all duration-500':'flex bg-[#706DFF] border border-black px-3 rounded items-center gap-3 py-1 mt-10 cursor-pointer hover:px-4 hover:py-2 transition-all duration-500' }>
                            <img className='w-6' src={github} alt="" />
                            <p className='text-black font-bold'>{spanishMode ? "Ver back" : "Back-end view"}</p>
                        </div>
                    </NavLink>
                    <NavLink to="https://master--nimble-sherbet-5f062c.netlify.app/">
                        <div className={!lightMode ? 'flex bg-[#00A3FF] px-3 rounded items-center gap-3 py-1 mt-10 cursor-pointer hover:px-4 hover:py-2 transition-all duration-500':'flex bg-[#00A3FF] border border-black px-3 rounded items-center gap-3 py-1 mt-10 cursor-pointer hover:px-4 hover:py-2 transition-all duration-500' }>
                            <img className='w-6 ' src={eye} alt="" />
                            <p className='text-black font-bold'>{spanishMode ? "Ver proyecto" : "See project "}</p>
                        </div>
                    </NavLink>
                </div>
            </div>
            <NavLink to="https://master--nimble-sherbet-5f062c.netlify.app/" className="w-2/5">
              <img className='w-[80%] max-h-60 mx-auto rounded  hover:border-2 hover:border-[#706DFF] transition-all duration-500 cursor-pointer hover:w-[82%] ' src={pdqImg} alt="" />
            </NavLink>
        </div>
      </div>

      
    </div>
  </div>

  )
}

export default Projects