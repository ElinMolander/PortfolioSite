import {useNav} from "../hooks/useNav.jsx"
import './contact.scss'

function Contact(props) {
    const contactRef = useNav("Contact")
    return (
        <section id="contactSection" className="contactSection" ref={contactRef}>
            <div className="contact-segments">
                <h1>Contact</h1>
                <h3 className="greeting-text"> Say Hi! </h3>
                
                <a href = "mailto: elin@elinmolander.com" className="outline-button">elin@elinmolander.com</a>
                <h3>More of my illustrations and animation at</h3>
                <a href="https://elinmolander.com/" className="filled-button">Illustration portfolio</a>
                <h3>We are making games at</h3>
                <a href="https://www.beardybird.com/" className="filled-button">Beardybird Games</a>
            </div>
            
                
                <div className="links-logo">
                            {/* <a href={props.linkProjectSite} target="_blank" className="projectLink">Visit site</a>  */}
                            <a href="https://github.com/ElinMolander/" target="_blank" className="logoLink">
                                <img src={props.gitLogo} className="link-logo" alt="GitHub"></img>
                            </a>
                            <a href="https://www.linkedin.com/in/elinmolander/" target="_blank" className="logoLink">
                                <img src={props.linkedin} className="link-logo" alt="linkedin"></img>
                            </a>
                            <a href="https://www.instagram.com/elinmoln/" target="_blank" className="logoLink">
                                <img src={props.instagram} className="link-logo" alt="instagram"></img>
                            </a>
                        </div>
           
            
        </section>
       
    )
}

export default Contact