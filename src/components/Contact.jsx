import useNav from "../hooks/useNav"

function Contact() {
    const contactRef = useNav()
    return (
        <section id="contactSection" ref={contactRef}>
            <h1>from contact</h1>
        </section>
       
    )
}

export default Contact