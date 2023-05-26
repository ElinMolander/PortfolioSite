
import Header from "./components/Header.jsx"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
import Work from "./components/Work.jsx"
import Home from "./components/Home"
import NavProvider from './context/NavContext'
import imgALArtbot from "./assets/ALArtbot.jpg"
import githubLogo from "./assets/github-mark-white.png"
import blad from "./assets/blad.png"
import elinMolander from "./assets/ElinMolander.jpg"
import bike from "./assets/bike.png"
import game from "./assets/game.png"
import pin from "./assets/pin.png"
import bb from "./assets/beardyBirdLogo.png"
import pen from "./assets/pen.png"
import linkedin from "./assets/linkedin.png"
import instagram from "./assets/instagram.png"

function App() {
 return (
  <div>
    <NavProvider>
      <Header />
      <Home img={elinMolander} />
      <Work headline="Al, the Art-bot" 
            technics={["Figma", "javaScript", "HTML",
             "CSS", "Github", "Illustrator", "Procreate"]}
            text="Turns your wishes into Art!"
            img={imgALArtbot}
            gitLogo={githubLogo}
            imgBlad={blad}
            linkGithub="https://github.com/ElinMolander/Art-bot"
            linkProjectSite="https://elinmolander.github.io/Art-bot/"
            awards={[{text:"Selected project", link:"Scrimba", src:"" ,key:1},
                    {text:"Featured by", 
                    link:"Svenska Tecknare",
                    src:"https://www.svenskatecknare.se/blog/2023/02/22/svara-pa-enkat-om-hur-ai-paverkar-dig-som-visuell-kreator/",
                     key:2}]}
        /> 
     
     <About img={elinMolander} 
             symbols={[{game},{bb},{pen},{bike}]}/>
      <Contact  gitLogo={githubLogo} 
                instagram={instagram} 
                linkedin={linkedin}/>
     
    </NavProvider>
  </div>
  )
}

export default App
