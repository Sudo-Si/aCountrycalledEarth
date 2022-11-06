
import { Link } from "react-router-dom";
import products from './data';
const  Products =()=>
{
    return (
    <section className="section"> 
    <h1>Products</h1>
  
    <div className="products"> 
    {products.map((product)=>{
        return <article key={product.id}>
            <h1>{product.name}</h1>
           <p><Link to ={`/products/${product.id}`}> more Info</Link></p> 
        </article>
    })}

    </div> 
    </section>
    );
};
export default Products;