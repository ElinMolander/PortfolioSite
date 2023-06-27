import {useNav} from "../hooks/useNav.jsx"
import './home.scss'



function Home(props) {
  const homeRef = useNav("Home")
  function handleContactClick() {
     document.getElementById("myworkSection").scrollIntoView({ behavior: "smooth"})
    }
    function handleAboutClick(){
        document.getElementById("aboutSection").scrollIntoView({ behavior: "smooth", block: "end"})
    }
    return (
        <section id="homeSection" className="light-section" ref={homeRef} >
            <div className="home-content">
            <img src={props.img}  onClick={handleAboutClick} className="portrait"></img>
                <div>
                    <h1 className="headline-home">Hi!</h1>
                    <h2>  
                        My name is Elin Molander.<br/>
                        I'm a front-end developer with a passion for games and illustration.<br/>
                        When I'm not developing I love to dance or taking long bike trips.<br/>
                        I live in Gothenburg, Sweden.
                    </h2>
                </div>
        
               
            </div>
            <div className="cv-link-home">
                        <a href={props.cvPdf} className="outline-button home-cv-link" target = "_blank">
                            Download CV <br></br>
                            <img src={props.pil} className="pil"onClick={handleContactClick} ></img>
                           </a>
                           
                         
                        <button className="filled-button" onClick={handleContactClick}> My Work <br></br>
                                <img src={props.pil} className="pil"onClick={handleContactClick} ></img>
                        </button>
           
                        </div>   
        </section>
       
    )
}

export default Home