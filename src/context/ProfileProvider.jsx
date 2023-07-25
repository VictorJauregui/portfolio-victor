import React, { useState } from 'react'
import profileContext from './ProfileContext'

const ProfileProvider = ({children}) => {
    const [lightMode, setLightMode] = useState(false)
    const [spanishMode, setSpanishMode] = useState(true)
    const [colour, setColour] = useState("blue")



  return (
    <profileContext.Provider
    value={{
        lightMode,
        setLightMode,
        setSpanishMode,
        spanishMode,
        colour,
        setColour

    }}
    >{children}</profileContext.Provider>
  )
}

export default ProfileProvider