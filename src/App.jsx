
import Header from "./components/Header.jsx"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
import Work from "./components/Work.jsx"
import Home from "./components/Home"
import NavProvider from './context/NavContext'
import imgALArtbot from "./assets/ALArtbot.jpg"
import githubLogo from "./assets/github-mark-white.png"
import blad from "./assets/blad.png"

function App() {
 return (
  <div>
    <NavProvider>
      <Header />
      <Home />
      <Work headline="Al, the Art-bot" 
            technics={["Figma", "javaScript", "HTML",
             "CSS", "Github", "Illustrator", "Procreate"]}
            text="Turns your wishes into Art!"
            img={imgALArtbot}
            gitLogo={githubLogo}
            imgBlad={blad}
            linkGithub="https://github.com/ElinMolander/Art-bot"
            linkProjectSite="https://elinmolander.github.io/Art-bot/"
            awards={[{text:"Selected student project", link:"Scrimba",key:1},
          {text:"Featured by", link:"Svenska Tecknare", key:2}]}
        /> 
       <Work headline="Test Något annat" 
            technics={["Figma", "java Script", "HTML",
             "CSS", "Github", "Illustrator", "Procreate"]}
            text="Turns your wishes into Art!"
            img={imgALArtbot}
            gitLogo={githubLogo}
            imgBlad={blad}
            linkGithub="https://github.com/ElinMolander/Art-bot"
            linkProjectSite="https://elinmolander.github.io/Art-bot/"
            awards={["Selected student project Scrimba", "Featured by Svenska Tecknare"]}
      /> 
      
      <Contact />
      <About />
    </NavProvider>
  </div>
  )
}

export default App
