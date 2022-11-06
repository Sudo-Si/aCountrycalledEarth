import { NavLink } from "react-router-dom";
import Products from "./Products";
import Home from "./Home";
import Login from "./Login";

import About from './About'
const  Navbar =()=>
{
    return (
        <nav className="navbar">
        <NavLink 
        to ='/'
        className={({isActive}) =>(isActive ? 'link active': 'link')}
        >
        </NavLink> 
        
        <div className="navbar">
        <div className="links">
           <NavLink to='/' className="lnk" element={<Home/>}>Home</NavLink>
           <NavLink to='/products' className="lnk" element={<Products/>}>Products</NavLink>
           <NavLink to='/about' className="lnk" element={<About/>}>About</NavLink>
           <NavLink to='/login' className="lnk" element={<Login/>}>Login</NavLink>
        </div>
        </div>
        </nav>
        
        )
}
export default Navbar;