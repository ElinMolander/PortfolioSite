import useNav from "../hooks/useNav"

function Work() {
    const workRef = useNav()
    return (

        <section id="workSection" ref={workRef}>
            <h1>from work</h1>
        </section>
       
    )
}

export default Work