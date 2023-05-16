import  {useNav}  from "../hooks/useNav"

export default function About() {
const aboutRef = useNav("About")
    return (
        <section className="secondary-section" id="aboutSection" ref={aboutRef}>
            <h1>from About</h1>
        </section>
        
    )
}


