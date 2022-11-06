
import products from './data';
import Products from "./Products";
import { Link, useParams } from "react-router-dom";
const  SingleProduct =()=>{
  const {productId} = useParams();
  const product = products.find((product)=> product.id === productId);
  const {image, name}= product

    return (
    <section className="section product"> 
    <div className="sngl-prd">
     
<img className="img" src={image} alt=" Kiwi"/>
      <h1> {name}</h1>
    </div>
      
      <p>   <Link to='/products' className="btn" element={<Products/>}>Back to Products</Link></p>
      
    </section >)
}
export default SingleProduct;;