import React from 'react'
import { useContext } from 'react'
import { NavContext } from '../context/NavContext'
import "./Header.css"

function Header(){

   const { activeLinkId } = useContext(NavContext)
   const navLinks = ["Work", "Contact", "About"] 
  
  
   function handleHomeButton(){
       document.getElementById("homeSection").scrollIntoView({ behavior: "smooth"})
    }
   const renderNavLinks = (content) => {
        const scrollToId = `${content.toLowerCase()}Section`
        function handleClickNav(){
        document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth"})
    }
   const style = activeLinkId === content ? "activeClass": ""
   
       return (
           <ul key={content}>
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
                    <h1 onClick={handleHomeButton}
                     
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