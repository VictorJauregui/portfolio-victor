import React, { useState } from 'react'
import profileContext from './ProfileContext'

const ProfileProvider = ({children}) => {
    const [lightMode, setLightMode] = useState(false)
    const [spanishMode, setSpanishMode] = useState(true)
    const [colour, setColour] = useState("blue")
    const [menuPhone, setMenuPhone] = useState(false)



  return (
    <profileContext.Provider
    value={{
        lightMode,
        setLightMode,
        setSpanishMode,
        spanishMode,
        colour,
        setColour,
        menuPhone,
        setMenuPhone

    }}
    >{children}</profileContext.Provider>
  )
}

export default ProfileProvider