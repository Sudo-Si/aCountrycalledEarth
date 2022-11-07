import {  Outlet } from "react-router-dom";
// import products from './data';
const  Home =()=>
{
    return (
        <> 
       <h1> Shared Products</h1>
        <Outlet/>
         </>
    )
}
export default Home;