import React, { useContext } from 'react'
import profileContext from '../context/ProfileContext'

const AboutMeEnglish = () => {
    const {lightMode} = useContext(profileContext)

  return (
    <div className={lightMode ? 'bg-white mt-4 2xl:mt-10 rounded p-6 2xl:p-10 text-[#002259] max-h-[65vh] md:max-h-[70vh] overflow-y-scroll scrollbar-hide' : 'bg-[#223343] border-2 mt-4 2xl:mt-10 rounded p-6 2xl:p-10 text-white max-h-[65vh] md:max-h-[70vh] overflow-y-scroll scrollbar-hide' }>
        <p className='2xl:text-2xl font-bold'>Hello, my name is Victor! Nice to meet you &#128075;</p>
        <br></br>
        <p className='2xl:text-xl'>First of all, I want to thank you for simply being here and taking the time to read about me. Believe me, it means a lot to me. </p>
        <br></br>
        <p className='2xl:text-xl'>I was born in the charming town of La Palma del Condado, a small village in Huelva. From an early age, my passion for sports became evident, leading me to decide to study Physical Activity and Sports Sciences. During my academic journey, fueled by my love for sports, I immersed myself in the fascinating world of football and became a physical trainer.</p>
        <br></br>
        <p className='2xl:text-xl'>After completing my university studies, I began my path towards professionalization. It was then when I realized there was an information gap between physical preparation in football and the tactical aspect. That's why, in 2016 (time flies!), in collaboration with a good friend, we founded a company focused on football training, where we aimed to inspire and guide current and future football coaches.</p>
        <br></br>
        <p className='2xl:text-xl'>Now, here comes the interesting part... &#128516;</p>
        <br></br>
        <p className='2xl:text-xl'>It was at that moment when, along with my brother (a web developer), I started self-learning to develop a platform for football coaches, using React and Node JS, among other tools, for the company. The experience was so rewarding that I decided to take it a step further and enrolled in a nearly year-long technological master's program at the Assembler Institute of Technology.</p>
        <br></br>
        <p className='2xl:text-xl'>The journey that has taken me from my passion for sports to the world of programming has been an enriching adventure, and I firmly believe that each step has prepared me for success in facing the opportunities that the future holds for me. I am ready to turn my dreams into reality and leave my mark in the world of technology!</p>
        <br></br>
        <p>PS: Besides sports, I love traveling, having good conversations with friends, and enjoying a beer. And what I love the most is combining all of this at least once a year.  </p>
    </div>
  )
}

export default AboutMeEnglish