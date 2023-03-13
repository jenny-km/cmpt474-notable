import React, {useState} from "react";
import './Upload.css';
import Navbar from '../Navbar/Navbar';




export const Upload = (props) => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

    }
    return(
        // body
        <div>
            {/* top bar */}
            <Navbar/>
            <div>
                <form className="login-form" onSubmit={handleSubmit}>
                    <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Email" id="email" className="email"/>
                    <br/>
                    <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password"/>
                    <br/>
                    <button type="submit">Log In</button>
                </form>
                
                
        
            </div>

        </div>
    )
}
export default Upload;