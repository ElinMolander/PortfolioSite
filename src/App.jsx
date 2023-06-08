
import Header from "./components/Header.jsx"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
import Work from "./components/Work.jsx"
import Home from "./components/Home"
import NavProvider from './context/NavContext'
import imgALArtbot from "./assets/SimpleMocupArtBot.jpg"
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
import quizzical from "./assets/simpleMocupQuizzical.gif"
import VAT from "./assets/Vat.jpeg"
import ColorScheme from "./assets/Color-scheme.png"
import tenzies from "./assets/tenzies.png"

function App() {
 return (
  <div>
    <NavProvider>
      <Header />
      <Home img={elinMolander} />
      <Work headline="AL, THE ART BOT" 
            technics={["Figma", "javaScript", "HTML",
             "CSS", "Github", "Illustrator", "Procreate"]}
            shortText="Turns your wishes into Art!"
            text="more text, more textmore textmore text
            more textmore textmore textmore textmore text"
            img={imgALArtbot}
            gitLogo={githubLogo}
            imgBlad={blad}
            linkGithub="https://github.com/ElinMolander/Art-bot"
            linkProjectSite="https://elinmolander.github.io/Art-bot/"
            awards={[{text:"Selected project", link:"Scrimba", src:"",key:1},
                    {text:"Featured by", 
                    link:"Svenska Tecknare",
                    src:"https://www.svenskatecknare.se/blog/2023/02/22/svara-pa-enkat-om-hur-ai-paverkar-dig-som-visuell-kreator/",
                     key:2}]}
            isLight={false}
        /> 
      <Work headline="Quizzical" 
            technics={["React", "javaScript", "HTML",
             "CSS", "Github","Figma"]}
            shortText="Test your knowlege!"
            text="A solo project were we got the design as a starting point. 
            Using Trivia API to generate questions and answers. 
            The solution was to do a lot of maping, and use react Hooks as 
            useEffect and useState. And I also used React Routers for making two pages,
            A intro page were you can chose topics and difficulty and The Questions Page."
            img={quizzical}
            gitLogo={githubLogo}
            imgBlad={blad}
            linkGithub="https://github.com/ElinMolander/Quizzical"
            linkProjectSite="https://silly-duckanoo-c6bcd3.netlify.app/"
            awards={[]}
            isLight={true}
        /> 
      <Work headline="Tenzies" 
            technics={["React", "javaScript", "HTML",
            "CSS", "Github","Figma"]}
            shortText="A digital remake of the dicegame Tenzies"
            text="more text, more textmore textmore text
            more textmore textmore textmore textmore text"
            img={tenzies}
            gitLogo={githubLogo}
            imgBlad={blad}
            linkGithub="https://github.com/ElinMolander/Tenzies"
            linkProjectSite="https://silly-duckanoo-c6bcd3.netlify.app/"
            awards={[]}
            isLight={false}
       /> 

      <Work headline="Color-scheme " 
            technics={["API","javaScript", "HTML",
            "CSS", "Github","Figma"]}
            shortText="get the right color"
            text="more text, more textmore textmore text
            more textmore textmore textmore textmore text"
            img={ColorScheme}
            gitLogo={githubLogo}
            imgBlad={blad}
            linkGithub="https://github.com/ElinMolander/Color-Scheme"
            linkProjectSite="https://elinmolander.github.io/Color-Scheme/"
            awards={[]}
            isLight={true}
      /> 


      <Work headline="VAT-Calculator" 
            technics={["javaScript", "HTML",
            "CSS", "Github","Figma"]}
            shortText="Calculate the right VAT"
            text="more text, more textmore textmore text
            more textmore textmore textmore textmore text"
            img={ VAT }
            gitLogo={githubLogo}
            imgBlad={blad}
            linkGithub="https://verdant-churros-c03694.netlify.app/"
            linkProjectSite="https://github.com/ElinMolander/VAT-calculator-SE"
            awards={[]}
            isLight={false}
      />
     <About img={elinMolander} 
             symbols={[{game},{pin},{bb},{pen},{bike}]}/>
      <Contact  gitLogo={githubLogo} 
                instagram={instagram} 
                linkedin={linkedin}/>
     
    </NavProvider>
  </div>
  )
}

export default App
