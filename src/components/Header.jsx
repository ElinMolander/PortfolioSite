import React from 'react'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { NavContext } from '../context/NavContext'
import "./header.css"

function Header(){
    const { activeLinkId } = useContext(NavContext)
    const navLinks = ["Work", "About", "Contact"] 
//     const [isMobile, setIsMobile] = useState(false)
//     useEffect(()=> {
//         window.screen.with <= 760 ? setIsMobile(true) : setIsMobile(false)
//     }, [window.screen.width])

//     function detectWindowSize() {
//         window.innerWidth <= 760 ? setIsMobile(true) : setIsMobile(false)
//     }
//    window.onresize = detectWindowSize
  

    function handleHomeButton(){
       document.getElementById("homeSection").scrollIntoView({ behavior: "smooth", block: "end"})
    }

   const renderNavLinks = (content) => {
        const scrollToId = `${content.toLowerCase()}Section`
        function handleClickNav(){
        document.getElementById(scrollToId).scrollIntoView({
             behavior: "smooth", block:"start"})
    }
    const style = activeLinkId === content ? "activeClass": ""
        return (
           <ul className='noListStyle' key={content}>
               <li>
                   <button
                    onClick={handleClickNav}
                    className={style}
                   >{content}</button>
               </li>
           </ul>
       )
   }
    return (
        <header className='header'>
            <div className='container'>
                <div className='navContainer'>
                   <h1 onClick={handleHomeButton }
                     className={"logo"}
                     >Elin Molander</h1>
                     <nav>
                        {navLinks.map(nav => renderNavLinks(nav))}
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header