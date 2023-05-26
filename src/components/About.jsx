import  {useNav}  from "../hooks/useNav"
import './about.css'



export default function About(props) {
const aboutRef = useNav("About")

function handleContactButton(){
    document.getElementById("contactSection").scrollIntoView({ behavior: "smooth", block: "end"})
 }
    return (
        <section className="about-section" id="aboutSection" ref={aboutRef}>
            <div className="about-content">
                <h1>About</h1>
                
                <img src={props.img} className="portrait" onClick={handleContactButton}></img>
                <h3 className="about-myName">Elin Molander</h3>
                <div>
                    <div className="about-rows">
                        <img src={props.symbols[0].game}></img>
                        <p>I´m a Front end developer with a expertise in illustration and games.</p>
                    </div>

                    <div className="about-rows">
                        <img src={props.symbols[1].bb}></img>
                        <p>I also love to make games and togheter with Erik Hallgren 
                            I have made some at Beardybird.</p>
                    </div>

                    <div className="about-rows">
                        <img src={props.symbols[2].pen}></img>
                        <p>I have been working as a Illustrator for 10 years. 
                            That means I´m very good at all the Adobe programs
                            and I also can animate as a bonus!</p>
                    </div>

                    <div className="about-rows">
                        <img src={props.symbols[3].bike}></img>
                        <p> When I´m not developing I love to dance lindy hop,
                            or taking long bike trips. </p>
                    </div>
                    <span className="filled-button " onClick={handleContactButton}> Contact</span>
                </div>
               

                 {/* <a href = "mailto: elin@elinmolander.com" className="filled-button">elin@elinmolander.com</a> */}
            </div>
         
        </section>
        
    )
}


