import { useState, createContext} from "react"


const NavContext = createContext()

const NavProvider = ({ childern }) => {

    const [activeLinkId, setActiveLinkId] = useState("")

    const providerValue = {
        activeLinkId,
        setActiveLinkId
    }
    return (
        
        <NavContext.Provider value={providerValue}>
            {childern}
        </NavContext.Provider>
    )
}


export default NavProvider