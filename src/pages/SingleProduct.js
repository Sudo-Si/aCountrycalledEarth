import Home from './Home';
import { Link } from "react-router-dom";
const  SingleProduct =()=>
{
    return <div> <h1>SingleProduct</h1>
      <button>   <Link to='/' className="btn" element={<Home/>}>Home</Link></button>
      
      </div>
}
export default SingleProduct;