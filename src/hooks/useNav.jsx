
import { useRef, useContext } from "react"
import NavContext from "../context/NavContext"
import useOnScreen from "./useOnScreen"


 const useNav = () => {
    const ref = useRef(null)
    const { setActiveLinkId } = useContext(NavContext)

    useOnScreen(ref)
    return ref
}
export default useNav