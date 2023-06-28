
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
import pil from './assets/pil.png'
import cvPdf from './assets/Documents/CVElinMolander2023.pdf'

function App() {


 
 return (
  <div>
    <NavProvider>
      <Header />
      <Home img={elinMolander} pil={pil} cvPdf={cvPdf} />
      <Work headline="AL, THE ART BOT" 
            technics={["JavaScript", "HTML",
             "CSS", "Github", "Figma", "Illustrator", "Procreate"]}
            shortText="Turns your wishes into Art!"
            text="
              I wanted to make an Art bot where you can make a wish for a unique artwork.
              The AI models becomes better and better, but do they have a artistic feedom? This robot does!
              I wrote Al in JavaScript/html/css and had lots of fun with animations, Math.random and 
              filters. All artwork is by me (though Al might disagree)"
            img={imgALArtbot}
            gitLogo={githubLogo}
            imgBlad={blad}
            linkGithub="https://github.com/ElinMolander/Art-bot"
            linkProjectSite="https://elinmolander.github.io/Art-bot/"
            awards={[{text:"Selected project", link:"Scrimba", src:"https://scrimba.ck.page/scrimba-community-digest",key:1},
                    {text:"Featured by", 
                    link:"Svenska Tecknare",
                    src:"https://www.svenskatecknare.se/blog/2023/02/22/svara-pa-enkat-om-hur-ai-paverkar-dig-som-visuell-kreator/",
                     key:2}]}
            isLight={false}
        /> 
      <Work headline="Quizzical" 
            technics={["React", "API", "HTML",
             "CSS", "Github","Figma"]}
            shortText="Test your knowlege!"
            text="A project were I got the design as a starting point. 
            Quizzical uses a Trivia API to generate questions and answers. 
            The solution relies on a lot of mapping, and the React Hooks 
            useEffect and useState. I also used React Router to handle two separate pages:
            an intro page were you can choose topic + difficulty, and the quiz page."
            img={quizzical}
            gitLogo={githubLogo}
            imgBlad={blad}
            linkGithub="https://github.com/ElinMolander/Quizzical"
            linkProjectSite="https://silly-duckanoo-c6bcd3.netlify.app/"
            awards={[]}
            isLight={true}
        /> 
      <Work headline="Tenzies" 
            technics={["React", "HTML",
            "CSS", "Github","Figma"]}
            shortText="A digital remake of the dicegame Tenzies"
            text="React based ice dice game,
              This project is from my course in front-end development where we were given a design, which I put my own spin on.
              This was great project to get cosy with components in React and using the useEffects and useState Hooks.
              I decided to implement the dice visuals mainly in CSS as a challenge.
              Another fun thing I added was confetti when you win, who doesn't love confetti?"
            img={tenzies}
            gitLogo={githubLogo}
            imgBlad={blad}
            linkGithub="https://github.com/ElinMolander/Tenzies"
            linkProjectSite="https://earnest-sunshine-bdff6e.netlify.app/"
            awards={[]}
            isLight={false}
       /> 

      <Work headline="Color-scheme" 
            technics={["API","JavaScript", "HTML",
            "CSS", "Github","Figma"]}
            shortText="Find the right color"
            text="I worked with an open API (thecolorapi) to get nice-looking color schemes.
            This was a solo project in my frontend course at Scrimba, we were given the design and 
            had to implement it on our own. 
            I added making it compatible with mobile devices using Media Queries and CSS."
            img={ColorScheme}
            gitLogo={githubLogo}
            imgBlad={blad}
            linkGithub="https://github.com/ElinMolander/Color-Scheme"
            linkProjectSite="https://elinmolander.github.io/Color-Scheme/"
            awards={[]}
            isLight={true}
      /> 


      <Work headline="VAT Calculator" 
            technics={["JavaScript", "HTML",
            "CSS", "Github","Figma"]}
            shortText="Who doesn't love calculating VAT!?"
            text="VAT-calculator-SE
              I was missing a nice-looking VAT calculator,
              so I made one, I'm sure you can relate.
              It was a good exercise in basic JavaScript, and math. 
              I made all the fields possible to copy to clipboard, and as a bonus challenge
              made a Chrome extension of it (but I haven't published it). 
              Happy VAT Calculating!"
            img={ VAT }
            gitLogo={githubLogo}
            imgBlad={blad}
            linkGithub="https://verdant-churros-c03694.netlify.app/"
            linkProjectSite="https://github.com/ElinMolander/VAT-calculator-SE"
            awards={[]}
            isLight={false}
      />
     <About img={elinMolander} 
            symbols={[{game},{pin},{bb},{pen},{bike}]}
            cvPdf={cvPdf}
             />
      <Contact  gitLogo={githubLogo} 
                instagram={instagram} 
                linkedin={linkedin}/>
  </NavProvider>
  </div>
  )
}

export default App
