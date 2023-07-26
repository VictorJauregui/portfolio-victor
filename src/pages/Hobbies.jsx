import React, { useContext } from 'react'
import SidebarLeft from '../components/SidebarLeft'
import Language from '../components/Language'
import profileContext from '../context/ProfileContext';
import uno from '../assets/mountain/1.jpg'
import dos from '../assets/mountain/2.png'
import tres from '../assets/mountain/3.jpg'
import cuatro from '../assets/mountain/4.jpg'
import cinco from '../assets/mountain/5.png'
import seis from '../assets/mountain/6.png'
import siete from '../assets/mountain/7.png'
import ocho from '../assets/mountain/8.jpg'
import nueve from '../assets/mountain/9.jpg'
import diez from '../assets/mountain/10.png'
import once from '../assets/mountain/11.png'
import unotrip from '../assets/trip/12.png'
import dostrip from '../assets/trip/13.png'
import trestrip from '../assets/trip/14.png'
import cuatrotrip from '../assets/trip/15.png'
import cincotrip from '../assets/trip/16.png'
import seistrip from '../assets/trip/17.png'
import sietetrip from '../assets/trip/18.png'
import ochotrip from '../assets/trip/19.png'
import nuevetrip from '../assets/trip/20.png'
import dieztrip from '../assets/trip/21.png'
import oncetrip from '../assets/trip/22.png'
import docetrip from '../assets/trip/23.png'
import trecetrip from '../assets/trip/24.png'
import TopPhoneMenu from '../components/TopPhoneMenu';
import ModeNightAndLightPhone from '../components/ModeNightAndLight';
import ChangeColorPhone from '../components/ChangeColorPhone';
import SidebarPhone from '../components/SidebarPhone';

const Hobbies = () => {
    const { lightMode, spanishMode, colour, menuPhone  } = useContext(profileContext);

    const colorFont =
    (colour === 'red') ? 'font-extrabold text-3xl 2xl:text-5xl text-red-600 transition duration-1000' :
    (colour === 'green') ? 'font-extrabold text-3xl 2xl:text-5xl text-green-500 transition duration-1000'  :
    (colour === 'yellow') ? 'font-extrabold text-3xl 2xl:text-5xl text-yellow-300 transition duration-1000'  :
    (colour === 'purple') ? 'font-extrabold text-3xl 2xl:text-5xl text-[#FF00D6] transition duration-1000'  :
    (colour === 'orange') ? 'font-extrabold text-3xl 2xl:text-5xl text-orange-500 transition duration-1000'  :
    (colour === 'blue') ? 'font-extrabold text-3xl 2xl:text-5xl text-[#00E0FF] transition duration-1000'  :
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
    <TopPhoneMenu />
    <div className="mt-28 lg:mt-20 mx-4 sm:mx-6 md:mx-8 lg:mx-10 2xl:m-20 lg:w-3/4">
      <div className={colorFont}>
        <h2>Hobbies</h2>
      </div>
      <div className={lightMode ? 'bg-white mt-4 2xl:mt-10 rounded p-6 2xl:p-10 text-[#002259] max-h-[65vh] md:max-h-[70vh] overflow-y-scroll scrollbar-hide' : 'bg-[#223343] border-2 mt-4 2xl:mt-10 rounded p-6 2xl:p-10 text-white max-h-[65vh] md:max-h-[70vh] overflow-y-scroll scrollbar-hide' }>
        <p className='font-bold text-2xl'>{spanishMode ? "Deporte en la montaña" : "Sport in the mountain"}</p>
        <div className='flex overflow-x-scroll scrollbar-hide w-full gap-5 whitespace-no-wrap py-5 '>
            <img className='w-48 h-60 xl:h-80 xl:w-60 rounded' src={once} alt="" />
            <img className='w-48 h-60 xl:h-80 xl:w-60 rounded' src={diez} alt="" />
            <img className='w-48 h-60 xl:h-80 xl:w-60 rounded' src={dos} alt="" />
            <img className='w-48 h-60 xl:h-80 xl:w-60 rounded' src={cuatro} alt="" />
            <img className='w-48 h-60 xl:h-80 xl:w-60 rounded' src={uno} alt="" />
            <img className='w-48 h-60 xl:h-80 xl:w-60 rounded' src={tres} alt="" />
            <img className='w-48 h-60 xl:h-80 xl:w-60 rounded' src={seis} alt="" />
            <img className='w-48 h-60 xl:h-80 xl:w-60 rounded' src={cinco} alt="" />
            <img className='w-48 h-60 xl:h-80 xl:w-60 rounded' src={siete} alt="" />
            <img className='w-48 h-60 xl:h-80 xl:w-60 rounded' src={nueve} alt="" />

        </div>
        <p className='font-bold text-2xl mt-10'>{spanishMode ? "Viajar" : "Travel "}</p>
        <div className='flex overflow-x-scroll scrollbar-hide w-full gap-5 whitespace-no-wrap py-5 '>
            <img className='w-48 h-60 xl:h-80 xl:w-60 rounded' src={seistrip} alt="" />
            <img className='w-48 h-60 xl:h-80 xl:w-60 rounded' src={dostrip} alt="" />
            <img className='w-48 h-60 xl:h-80 xl:w-60 rounded' src={trestrip} alt="" />
            <img className='w-48 h-60 xl:h-80 xl:w-60 rounded' src={cuatrotrip} alt="" />
            <img className='w-48 h-60 xl:h-80 xl:w-60 rounded' src={cincotrip} alt="" />
            <img className='w-48 h-60 xl:h-80 xl:w-60 rounded' src={unotrip} alt="" />
            <img className='w-48 h-60 xl:h-80 xl:w-60 rounded' src={sietetrip} alt="" />
            <img className='w-48 h-60 xl:h-80 xl:w-60 rounded' src={ochotrip} alt="" />
            <img className='w-48 h-60 xl:h-80 xl:w-60 rounded' src={nuevetrip} alt="" />
            <img className='w-48 h-60 xl:h-80 xl:w-60 rounded' src={dieztrip} alt="" />
            <img className='w-48 h-60 xl:h-80 xl:w-60 rounded' src={oncetrip} alt="" />
            <img className='w-48 h-60 xl:h-80 xl:w-60 rounded' src={docetrip} alt="" />
            <img className='w-48 h-60 xl:h-80 xl:w-60 rounded' src={trecetrip} alt="" />

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

export default Hobbies