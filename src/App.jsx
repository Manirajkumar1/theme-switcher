import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './context/Theme'
import Themebtn from './components/Themebtn'
import Card from './components/Card'

const App = () => {
  const [themeMode, setThemeMode] =useState('light')

  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  // theme change

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
        {/* theme btn */}
        <Themebtn/>
        </div>
        <div className="w-full max-w-sm mx-auto">
       {/* card */}
       <Card/>
       </div>
       </div>
    </div>
    </ThemeProvider>
  )
}

export default App

