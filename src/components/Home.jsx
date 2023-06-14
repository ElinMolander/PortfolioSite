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
                 <h2>Hi!<br/>
                    My name is Elin Molander.<br/>
                    I'm a front-end developer with a passion for games and illustration.<br/>
                    When I'm not developing I love to dance or taking long bike trips.<br/>
                    I live in Gothenburg, Sweden.
                </h2>
            </div>
            <button className="filled-button" onClick={handleContactClick}> Contact</button>
        </section>
       
    )
}

export default Home