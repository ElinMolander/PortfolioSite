
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
import VAT from "./assets/Vat.jpg"
import ColorScheme from "./assets/SimpleMocupColorScheme.jpg"
import tenzies from "./assets/SimpleMocupTenezies.jpg"

function App() {
 return (
  <div>
    <NavProvider>
      <Header />
      <Home img={elinMolander} />
      <Work headline="AL, THE ART BOT" 
            technics={["JavaScript", "HTML",
             "CSS", "Github", "Figma", "Illustrator", "Procreate"]}
            shortText="Turns your wishes into Art!"
            text=" JavaScript based Art-bot,
            Self initialised project, I wanted to make an Art-bot where
             you can make a wish for a unique artwork. The AI-generating processors becomes better and better
             but do they have a artistic feedom? This robot has! 
              The techside CSS with z-index as a exemple. Hade a lot of fun using 
              Animations in JavaScript and used a lot of Math.random and 
              Filtering in this project."
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
            technics={["React", "JavaScript", "HTML",
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
            technics={["React", "JavaScript", "HTML",
            "CSS", "Github","Figma"]}
            shortText="A digital remake of the dicegame Tenzies"
            text="React based ice dice game,
            This project is form my cores in front end development.
             Were I got the design from the cores but also change some aspects.
              This was great to get warm with components i React and other tech 
              as useEffects, useState.
            I made the design off the dice manly as a CSS challenge. 
            Fun thing was to implement confetti in the end game, 
            who doesn't love confetti?"
            img={tenzies}
            gitLogo={githubLogo}
            imgBlad={blad}
            linkGithub="https://github.com/ElinMolander/Tenzies"
            linkProjectSite="https://silly-duckanoo-c6bcd3.netlify.app/"
            awards={[]}
            isLight={false}
       /> 

      <Work headline="Color-scheme " 
            technics={["API","JavaScript", "HTML",
            "CSS", "Github","Figma"]}
            shortText="get the right color"
            text="Working with an open API (thecolorapi) to get nice-looking color schemes. This was a solo project in my frontend course at Scrimba, we were given the design and had to implement and come up with the code solution ourselves. 
            Also made it compatible for mobile with Media Queries and CSS."
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
            text="VAT-calculator-SE
            I was missing a nice-looking VAT calculator,
             so I made one.
              Using JavaScript, with some math skills. 
              Using all basic techniques as addEventListener, 
              functions, inputs. I made all the fields possible 
              to copy. As a bonus,
               I made a version as a Chrome extension 
               for now it is only accessible locally. Happy VAT Calculating!"
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
