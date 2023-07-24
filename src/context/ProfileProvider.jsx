import React, { useState } from 'react'
import profileContext from './ProfileContext'

const ProfileProvider = ({children}) => {
    const [lightMode, setLightMode] = useState(false)
    const [spanishMode, setSpanishMode] = useState(true)



  return (
    <profileContext.Provider
    value={{
        lightMode,
        setLightMode,
        setSpanishMode,
        spanishMode
    }}
    >{children}</profileContext.Provider>
  )
}

export default ProfileProvider