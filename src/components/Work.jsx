import {useNav} from "../hooks/useNav.jsx"

function Work() {
   const workRef = useNav("Work")
    return (

        <section id="workSection" ref={workRef}>
            <h1>from work</h1>
        </section>
       
    )
}

export default Work