import React from 'react'
import { Logo } from '../Layout/Logo'
import { Navbar } from '../Layout/Navbar'
import { Button } from '../Layout/Button'
import "../assets/css/styles.css"
export const Header = () => {
  return (
    <>


    <header>
        <Logo/>
        <Navbar/>
        <Button/>
        
    </header>
    
    </>
  )
}
