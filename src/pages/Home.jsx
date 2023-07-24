import React, { useContext } from 'react'
import myPicture from '../assets/myPicture.png'
import spanish from '../assets/spanish.png'
import english from '../assets/english.png'
import light from '../assets/lightMode.png'
import darkMode from '../assets/darkMode.png'
import react from '../assets/react.png'
import css from '../assets/css.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import node from '../assets/node.png'
import typescript from '../assets/typescript.png'
import mongo from '../assets/mongo.png'
import git from '../assets/git.png'
import profileContext from '../context/ProfileContext'
import { Link } from 'react-router-dom'


const Home = () => {
    const {lightMode, setLightMode, spanishMode, setSpanishMode} = useContext(profileContext)

    console.log(lightMode)

    
    
  return (
    <div className={lightMode ? 'bg-gradient-to-b from-[#1C1B48] to-[#706DFF] min-h-screen ' : 'bg-gradient-to-b from-[black] via-black  to-[#002259]/90 min-h-screen ' }>
        <div className='flex gap-2 justify-end p-4 h-[5%]'>
            <img className='w-12 h-8 rounded cursor-pointer' onClick={()=>setSpanishMode(true)} src={spanish} alt="" />
            <img className='w-12 h-8 rounded cursor-pointer'  onClick={()=>setSpanishMode(false)} src={english} alt="" />
        </div>
        <div className='flex flex-col items-center justify-center mt-24 pb-10  border-b 2xl:w-[25%] mx-auto'>
            <img className='w-80 ' src={myPicture} alt="" />
            <h1 className='font-extrabold text-3xl text-white mt-6'>VÍCTOR JAUREGUI</h1>
            <h2 className={lightMode ? 'text-2xl text-gray-800' : 'text-2xl text-gray-500' }>Full Stack Developer</h2>
            <div className='grid grid-cols-9 mt-6 gap-2 items-center'>
                <img className='w-20' src={react} alt="" />
                <img className='w-12' src={html} alt="" />
                <img className='w-18' src={css} alt="" />
                <img className='w-16' src={javascript} alt="" />
                <img className='w-16' src={tailwind} alt="" />
                <img className='w-16' src={node} alt="" />
                <img className='w-16' src={typescript} alt="" />
                <img className='w-16' src={mongo} alt="" />
                <img className='w-16' src={git} alt="" />

            </div>
            <Link to="/about-me" >
                <button className={lightMode ? 'bg-[#FF00D6]/70 py-2 hover:bg-[#FF00D6] px-20 my-10  border border-white rounded text-white ':'bg-[#223343] py-2 hover:bg-[#FF00D6] px-20 my-10 border border-white rounded text-white '}>{spanishMode ? 'SABER MÁS' : 'KNOW MORE'}</button>
            </Link>
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

export default Home