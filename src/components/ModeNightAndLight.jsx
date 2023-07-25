import React from 'react'
import { useContext } from 'react'
import profileContext from '../context/ProfileContext'
import light from '../assets/lightMode.png'
import darkMode from '../assets/darkMode.png'


const ModeNightAndLightPhone = () => {
    const {lightMode, setLightMode} = useContext(profileContext)
  return (
    <div className={lightMode ? 'flex gap-2 justify-center mt-4 w-fit bg-[#002259]/10 mx-auto px-2 py-1 rounded-full lg:hidden':'flex gap-2 justify-center mt-4 w-fit bg-gray-400 mx-auto px-2 py-1 lg:hidden rounded-full'}>
        <div className={lightMode ? 'flex gap-2 bg-white items-center px-4 py-1 rounded-full border cursor-pointer' : 'flex gap-2  items-center px-4 py-1 rounded-full cursor-pointer' } onClick={()=>setLightMode(true)}>
            <img className='w-4 h-4' src={light} alt="" />
        </div>
        <div className={!lightMode ? 'flex gap-2 bg-white items-center px-4 py-1 rounded-full border cursor-pointer' : 'flex gap-2  items-center px-4 py-1 rounded-full cursor-pointer' } onClick={()=>setLightMode(false)}>
            <img className='w-4 h-4' src={darkMode} alt="" />
        </div>
</div>
  )
}

export default ModeNightAndLightPhone