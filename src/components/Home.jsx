import useNav from "../hooks/useNav"

function Home() {
   const homeRef = useNav()
    return (
        <section id="homeSection" ref={homeRef}>
            <h1>from Home</h1>
        </section>
       
    )
}

export default Home