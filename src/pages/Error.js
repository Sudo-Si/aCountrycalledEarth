
import { Link } from "react-router-dom";
import Home from './Home';
const  Error =()=>
{
    return <div>
                <h1> 404! </h1>
                <p>The page you are looking for cant be found</p>
                <button>   <Link to='/' className="btn" element={<Home/>}> Return to Home Page</Link></button>
                <section>
        

        </section>
            </div>
}
export default Error;