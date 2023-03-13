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
                 <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                 </ul>
                 
                </div>
            </div>
            <div>
                
                
        
            </div>

        </div>
    )
}
export default Home;