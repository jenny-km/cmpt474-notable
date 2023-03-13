import React, {useState} from "react";
import { Amplify } from 'aws-amplify';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Upload from './components/Upload/Upload';
import Home from './components/Home/Home';

import { withAuthenticator } from '@aws-amplify/ui-react';
//import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);



function App() {
  const[currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div>
      {/* <Home/> */}
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    
    </div>
  );
}

export default App;
//export default withAuthenticator(App);