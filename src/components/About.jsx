import  {useNav}  from "../hooks/useNav"
import './about.scss'



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
                     <div className="tech-row">
                        <h5>Skills</h5>
                        <p> React, JavaScript, HTML, SCSS/CSS, Node.js,
                             API:s, Web Accessibility, Github, Figma, Photoshop, Illustrator, After Effects, Procreate, Blender, Unity.</p>
                    </div>
                    <div className="about-rows">
                        <img src={props.symbols[0].game}></img>
                        <p>I'm a Front-end developer with added expertise in illustration and games.</p>
                    </div>

                    <div className="about-rows">
                        <img src={props.symbols[1].pin}></img>
                        <p> Based in Göteborg and currently looking for a job as a developer.</p>
                    </div>
                    
                    <div className="about-rows">
                        <img src={props.symbols[2].bb}></img>
                        <p>I love to make games and have released two, together with Erik Hallgren,
                            we call ourselves Beardybird.</p>
                    </div>

                    <div className="about-rows">
                        <img src={props.symbols[3].pen}></img>
                        <p>I have been working as a Illustrator for 10 years. 
                            That also means I'm very good at all the Adobe programs
                            and I can animate as a bonus!</p>
                    </div>

                    <div className="about-rows">
                        <img src={props.symbols[4].bike}></img>
                        <p> When I'm not developing I love to dance Lindy Hop, being creative
                            and taking long bike trips. </p>
                    </div>
                   
                   
                </div>
                <span className="filled-button " onClick={handleContactButton}> Contact</span>

                 {/* <a href = "mailto: elin@elinmolander.com" className="filled-button">elin@elinmolander.com</a> */}
            </div>
         
        </section>
        
    )
}


