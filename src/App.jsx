
import Header from "./components/Header.jsx"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
import Work from "./components/Work.jsx"
import Home from "./components/Home"
import NavProvider from './context/NavContext'

function App() {
 return (
  <div>
    <NavProvider>
      <Header />
      <Home />
      <Work />
      <Contact />
      <About />
    </NavProvider>
  </div>
  )
}

export default App
