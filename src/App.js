import{useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Error from './pages/Error'
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import SharedLayout from './pages/SharedLayout';
import Footer from './pages/Footer';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import './App.css'
function App() {
  const [user,setUser] =useState(null)
  return (
    <BrowserRouter>  
      <Routes>
        <Route path='/' element={<SharedLayout />}>
        <Route index element={<Home/>}/>
        <Route path='/products' element={<Products/>} />
        <Route path='/about' element={<About/>} />
        <Route path='products/:productId' element={<SingleProduct/>}/>
        <Route path='/login' element={<Login setUser ={setUser}>
          </Login>} />     
        <Route path='/Dashboard' element={<Dashboard user ={user}>
          </Dashboard>} />     
        {/* <Route path='/dashboard' element={<Dashboard/>} />      */}
        <Route path='*' element={<Error/>} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;