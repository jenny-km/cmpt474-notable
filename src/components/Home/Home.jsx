import React, {useState} from "react";
import './Home.css';
import Navbar from '../Navbar/Navbar';




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
            <Navbar/>
            <div>
                
                
        
            </div>

        </div>
    )
}
export default Home;