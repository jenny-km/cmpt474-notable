import React, {useState} from "react";
import { Amplify } from 'aws-amplify';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import {Login} from './components/Login/Login';
import Register from './components/Register/Register';
import Upload from './components/Upload/Upload';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';

import { withAuthenticator } from '@aws-amplify/ui-react';
//import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);



function App() {

  // const[currentForm, setCurrentForm] = useState('login');

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }
  return (
    <>
  
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Login />} />
       </Routes>
      {/* {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      } */}
    
    </>
  );
}

export default App;
//export default withAuthenticator(App);