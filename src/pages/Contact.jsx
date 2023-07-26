import React, { useContext } from 'react'
import profileContext from '../context/ProfileContext'
import SidebarLeft from '../components/SidebarLeft'
import TopPhoneMenu from '../components/TopPhoneMenu'
import Language from '../components/Language'
import ModeNightAndLightPhone from '../components/ModeNightAndLight'
import ChangeColorPhone from '../components/ChangeColorPhone'
import SidebarPhone from '../components/SidebarPhone'

const Contact = () => {
    const {lightMode, menuPhone, colour, spanishMode} = useContext(profileContext)

    const colorFont =
    (colour === 'red') ? 'font-extrabold text-3xl 2xl:text-5xl text-red-600 transition duration-1000' :
    (colour === 'green') ? 'font-extrabold text-3xl 2xl:text-5xl text-green-500 transition duration-1000'  :
    (colour === 'yellow') ? 'font-extrabold text-3xl 2xl:text-5xl text-yellow-300 transition duration-1000'  :
    (colour === 'purple') ? 'font-extrabold text-3xl 2xl:text-5xl text-[#FF00D6] transition duration-1000'  :
    (colour === 'orange') ? 'font-extrabold text-3xl 2xl:text-5xl text-orange-500 transition duration-1000'  :
    (colour === 'blue') ? 'font-extrabold text-3xl 2xl:text-5xl text-[#00E0FF] transition duration-1000'  :
    '';

  return (
    <>
    <div
      className={
        lightMode
          ? "bg-gradient-to-b from-[#1C1B48] to-[#706DFF] min-h-screen   "
          : "bg-gradient-to-b from-[black] via-black  to-[#002259]/90 min-h-screen  "
      }
    >
      <div className="flex">
        <SidebarLeft />
        <TopPhoneMenu />
        <Language />
        <div className="mt-28 lg:mt-20 mx-4 sm:mx-6 md:mx-8 lg:mx-10 2xl:m-20 lg:w-3/4">
        <div>
          <h2 className={colorFont}>{spanishMode ? "Contacto" : "Contact"}</h2>
        </div>
            <div className={lightMode ? 'bg-white mt-4 2xl:mt-10 rounded p-6 2xl:p-10 text-[#002259] max-h-[65vh] md:max-h-[70vh] overflow-y-scroll scrollbar-hide' : 'bg-[#223343] border-2 mt-4 2xl:mt-10 rounded p-6 2xl:p-10 text-white max-h-[65vh]  md:max-h-[70vh] overflow-y-scroll scrollbar-hide' }>
            <p>holaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholahola</p> 
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
    </>
  )
}

export default Contact