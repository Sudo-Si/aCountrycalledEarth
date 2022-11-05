import { NavLink } from "react-router-dom";




import { Link } from "react-router-dom";
import Products from "./Products";
import Home from "./Home";
import About from './About'
const  Navbar =()=>
{
    return (
        <nav className="navbar">

        <NavLink to ='/'
        className={({isActive}) =>{
            return {color: isActive ? 'red ': 'grey'};
        }}
        >
        
        </NavLink> 
        
        <div className="navbar">
      
        <div className="links">
           <NavLink to='/' className="lnk" element={<Home/>}>Home</NavLink>
           <NavLink to='/products' className="lnk" element={<Products/>}>Products</NavLink>
           <NavLink to='/about' className="lnk" element={<About/>}>About</NavLink>
        </div>
        </div>
        </nav>
        
        )
}
export default Navbar;