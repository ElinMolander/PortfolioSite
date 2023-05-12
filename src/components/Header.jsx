import React from 'react'
import { useContext } from 'react'
import "./Header.css"

function Header(){
    const { activeLinkId } = useContext(NavContext)
    console.log(activeLinkId)
   const navLinks = ["Work", "About", "Contact"] 

   const renderNavLInks = (content) => {
       const scrollToId = `${content.toLowerCase()}Section`
    function handleClickNav(){
        document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth"})
    }
       return (
           <ul key={content}>
               <li>
                   <button onClick={handleClickNav}>{content}</button>
               </li>
           </ul>
       )
   }
    return (
        <header className='header'>
            <div className='container'>
                <div className='navContainer'>
                    <button>Elin Molander</button>
                    <nav>
                        {navLinks.map(nav => renderNavLInks(nav))}
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header