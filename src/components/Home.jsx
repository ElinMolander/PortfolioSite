import {useNav} from "../hooks/useNav.jsx"

function Home() {
  const homeRef = useNav("Home")
    return (
        <section id="homeSection" ref={homeRef} >
            <h1>from Home</h1>
        </section>
       
    )
}

export default Home