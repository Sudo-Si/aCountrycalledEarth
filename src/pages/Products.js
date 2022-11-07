
import { Link } from "react-router-dom";
import products from './data';
const  Products =()=>
{
    return (
    <section className="section"> 
  
    <div className="products"> 
    {products.map((product)=>{
        return <article className ="art" key={product.id}>
            <h1>{product.name}</h1>
            <img src={product.image} alt="product "/>
           <p><Link to ={`/products/${product.id}`}> more Info</Link></p> 
        </article>
    })}

    </div> 
    </section>
    );
};
export default Products;