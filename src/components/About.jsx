import useNav from "../hooks/useNav"

function About() {
    const aboutRef = useNav()
    return (
        <section className="secondary-section" id="aboutSection" ref={aboutRef}>
            <h1>from About</h1>
        </section>
        
    )
}


export default About