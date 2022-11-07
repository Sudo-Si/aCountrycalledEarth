import {useState} from 'react';
import{ useNavigate} from 'react-router-dom';
const  Login =({setUser})=>{
    const [name, setName]= useState('');
    const [email, setEmail]= useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(!name || !email) return;
        setUser({name:name, email:email});
        navigate('/dashboard');
        // console.log(name, email);
    };
    return( 
    <section> 
       
        <form className="form" onSubmit ={handleSubmit}>
        
        <h1>Login</h1>
          <label htmlFor="username"> username</label>
            <div className="form-row">
           
            <input type='text' className='form-input' id='name'
                value={name}
                onChange={(e)=> setName(e.target.value)}
            />     
            </div>     <label htmlFor="email"> email</label>
            <div className="form-row">
           
            <input type='text' className='form-input' id='email'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
            />     
            </div>
         
            <button type="">Login</button>
            
            
        </form>
    </section>)
}
export default Login;