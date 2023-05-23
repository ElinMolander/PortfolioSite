import {useNav} from "../hooks/useNav.jsx"

function Home() {
  const homeRef = useNav("Home")
  function handleContactClick() {
     document.getElementById("contactSection").scrollIntoView({ behavior: "smooth"})
    }
    return (
        <section id="homeSection" className="secondary-section" ref={homeRef} >
            <div className="paragraphSection">
                 <h2>I´m a Front end developer with a passion for Games and Illustration.
                When I´m not developing I love to dance or taking long bike trips.</h2>
            </div>
            <button onClick={handleContactClick}> Contact</button>
        </section>
       
    )
}

export default Home