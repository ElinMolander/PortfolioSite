import {useNav} from "../hooks/useNav.jsx"
import './home.scss'

function Home(props) {
  const homeRef = useNav("Home")
  function handleContactClick() {
     document.getElementById("contactSection").scrollIntoView({ behavior: "smooth"})
    }
function handleAboutClick(){
        document.getElementById("aboutSection").scrollIntoView({ behavior: "smooth", block: "end"})
     }
    return (
        <section id="homeSection" className="light-section" ref={homeRef} >
            <div className="home-content">
            <img src={props.img}  onClick={handleAboutClick} className="portrait"></img>
                 <h2>Hi! My name is Elin Molander. 
                     A Front end developer with a passion for Games and Illustration.
                When I´m not developing I love to dance or taking long bike trips.</h2>
            </div>
            <span className="filled-button" onClick={handleContactClick}> Contact</span>
        </section>
       
    )
}

export default Home