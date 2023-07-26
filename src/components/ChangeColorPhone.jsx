import React, {  useContext } from 'react'
import profileContext from '../context/ProfileContext'
import red from '../assets/colours/red.png'
import blue from '../assets/colours/blue.png'
import orange from '../assets/colours/orange.png'
import yellow from '../assets/colours/yellow.png'
import purple from '../assets/colours/purple.png'
import green from '../assets/colours/green.png'

const ChangeColorPhone = () => {
    const {colour, setColour} = useContext(profileContext)

  return (
    <div className='rounded-full flex py-1 px-2 mt-2 gap-6 items-center justify-center lg:hidden'>
                <img className={colour === "blue" ? 'rounded-full w-8 h-8 cursor-pointer border-2 border-blue-300' : 'rounded-full w-6 h-6 cursor-pointer'}  src={blue} alt="" onClick={()=>setColour("blue")} />
                <img className={colour === "yellow" ? 'rounded-full w-8 h-8 cursor-pointer border-2 border-blue-300' : 'rounded-full w-6 h-6 cursor-pointer'} src={yellow} alt="" onClick={()=>setColour("yellow")} />
                <img className={colour === "red" ? 'rounded-full w-8 h-8 cursor-pointer border-2 border-blue-300' : 'rounded-full w-6 h-6 cursor-pointer'} src={red} alt="" onClick={()=>setColour("red")} />
                <img className={colour === "green" ? 'rounded-full w-8 h-8 cursor-pointer border-2 border-blue-300' : 'rounded-full w-6 h-6 cursor-pointer'} src={green} alt="" onClick={()=>setColour("green")} />
                <img className={colour === "orange" ? 'rounded-full w-8 h-8 cursor-pointer border-2 border-blue-300' : 'rounded-full w-6 h-6 cursor-pointer'}  src={orange} alt="" onClick={()=>setColour("orange")} />
                <img className={colour === "purple" ? 'rounded-full w-8 h-8 cursor-pointer border-2 border-blue-300' : 'rounded-full w-6 h-6 cursor-pointer'}  src={purple} alt="" onClick={()=>setColour("purple")} />
            </div>
  )
}

export default ChangeColorPhone