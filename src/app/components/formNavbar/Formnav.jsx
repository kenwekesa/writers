import React from 'react'
import './formnav.scss'
import './fornnav.css'
import frontmain from "../../images/logo512.png"

function Formnav() {
  return (
    <div className='formnav'>
        <div className='navtitle'><img src={frontmain} alt="logo" className='logimg'></img><p className='logpara'>Amzon Corp</p></div>
    </div>
  )
}

export default Formnav