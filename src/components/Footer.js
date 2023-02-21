import React from 'react'

export default function Footer() {
    
    const currYear = new Date().getFullYear();

    return(
        <footer>
            <p>Habari yako @ {currYear}</p>
            <img src={'/images/Footerlogo.png'} className='footer--image' alt='Kenya'/>
            <p>Karibu Tena</p>
        </footer>
    )
}