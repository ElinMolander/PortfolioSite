import {useNav} from "../hooks/useNav.jsx"

function Contact() {
    const contactRef = useNav("Contact")
    return (
        <section id="contactSection" ref={contactRef}>
            <h1>from contact</h1>
        </section>
       
    )
}

export default Contact