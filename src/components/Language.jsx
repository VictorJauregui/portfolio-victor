import React, { useContext } from 'react'
import spanish from '../assets/spanish.png'
import english from '../assets/english.png'
import profileContext from '../context/ProfileContext'

const Language = () => {
    const {setSpanishMode, spanishMode} = useContext(profileContext)

  return (
    <div className='absolute flex gap-2 justify-end p-4 h-[5%] w-full items-center '>
            <img className={spanishMode ? 'w-12 h-8 rounded cursor-pointer border-2 border-green-400': 'w-8 h-6 rounded cursor-pointer opacity-60 '} onClick={()=>setSpanishMode(true)} src={spanish} alt="" />
            <img className={!spanishMode ? 'w-12 h-8 rounded cursor-pointer border-2 border-green-400': 'w-8 h-6 rounded cursor-pointer opacity-60 '} onClick={()=>setSpanishMode(false)} src={english} alt="" />
        </div>
  )
}

export default Language