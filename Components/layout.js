import About from "../pages/about"
import Navbar from "./Navbar"

const Layout = ({children}) => {
    return ( 
        <div>
            <Navbar />
            <br />
            {children}
        </div>
     );
}
 
export default Layout;