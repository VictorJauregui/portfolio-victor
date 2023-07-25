import React, { useContext } from 'react'
import imgProfile from '../assets/myPicture.png'
import yelow from '../assets/burguerMenu/yelow.png'
import red from '../assets/burguerMenu/red.png'
import blue from '../assets/burguerMenu/blue.png'
import orange from '../assets/burguerMenu/orange.png'
import purple from '../assets/burguerMenu/purple.png'
import green from '../assets/burguerMenu/green.png'
import profileContext from '../context/ProfileContext';

const TopPhoneMenu = () => {

    const {colour, setMenuPhone, menuPhone} = useContext(profileContext)

    const handleOpenModalMenu = () => {
        if (menuPhone === false) {
            setMenuPhone(true)
        } else{
            setMenuPhone(false)
        }
    }

    const bgFullStack =
      (colour === 'red') ? '2xl:text-xl font-bold text-black transform rotate-3 transition duration-1000 bg-red-600 ' :
      (colour === 'green') ? '2xl:text-xl font-bold text-black transform rotate-3 transition duration-1000 bg-green-500 '  :
      (colour === 'yellow') ? '2xl:text-xl font-bold text-black transform rotate-3 transition duration-1000 bg-yellow-300 '  :
      (colour === 'purple') ? '2xl:text-xl font-bold text-black transform rotate-3 transition duration-1000 bg-[#FF00D6]'  :
      (colour === 'orange') ? '2xl:text-xl font-bold text-black transform rotate-3 transition duration-1000 bg-orange-500 '  :
      (colour === 'blue') ? '2xl:text-xl font-bold text-black transform rotate-3 transition duration-1000 bg-[#00E0FF] '  :
      '';

      const imgBurguer =
      (colour === 'red') ? `${red} ` :
      (colour === 'green') ? green   :
      (colour === 'yellow') ? yelow  :
      (colour === 'purple') ? purple  :
      (colour === 'orange') ? orange  :
      (colour === 'blue') ? blue :
      '';

      const borderBotonColor =
      (colour === 'red') ? 'flex items-center lg:hidden bg-[#002259]/40 fixed top-0 w-full h-[8vh] border-b border-red-600 transition duration-1000 ' :
      (colour === 'green') ? 'flex items-center lg:hidden bg-[#002259]/40 fixed top-0 w-full h-[8vh] border-b border-green-500 transition duration-1000 '  :
      (colour === 'yellow') ? 'flex items-center lg:hidden bg-[#002259]/40 fixed top-0 w-full h-[8vh] border-b border-yellow-300 transition duration-1000'  :
      (colour === 'purple') ? 'flex items-center lg:hidden bg-[#002259]/40 fixed top-0 w-full h-[8vh] border-b border-[#FF00D6] transition duration-1000'  :
      (colour === 'orange') ? 'flex items-center lg:hidden bg-[#002259]/40 fixed top-0 w-full h-[8vh] border-b border-orange-500 transition duration-1000 '  :
      (colour === 'blue') ? 'flex items-center lg:hidden bg-[#002259]/40 fixed top-0 w-full h-[8vh] border-b border-[#00E0FF] transition duration-1000' :
      '';
    
  return (
    <div className={borderBotonColor}>
        <img className='h-full py-2 pl-6' src={imgProfile} alt="" />
        <div className='flex flex-col justify-center ml-6  '>
            <p className='text-white font-extrabold text-2xl'>Víctor Jauregui</p>
            <p className={bgFullStack}>Full Stack Developer</p>
        </div>
        <div className='flex ml-auto  mr-6 '>
            <img className='w-8 h-4 cursor-pointer' src={imgBurguer} onClick={handleOpenModalMenu} alt="" />
        </div>
    </div>
  )
}

export default TopPhoneMenu