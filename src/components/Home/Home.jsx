import React, {useState} from "react";
import './Home.css';




export const Home = (props) => {
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
            <div className="top-bar">
                <div className="logo-container">
                 <img src='/images/notable-logo.png'  height="50"/>
                </div>
            </div>
            <div>
                
                
        
            </div>

        </div>
    )
}
export default Home;