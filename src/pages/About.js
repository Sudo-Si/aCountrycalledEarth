import { Link } from "react-router-dom";
import Home from './Home'
// import Products from "./Products";
const  About =()=>
{
    return (
        <div>
            <h1>About</h1>
            <button>   <Link to='/' className="btn" element={<Home/>}> Return  Home</Link></button>
        </div>)
}
export default About;
