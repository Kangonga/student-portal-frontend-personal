import React, { useEffect, useState } from 'react'
import {Link, Navigate} from 'react-router-dom';
import Dashboard from './dashboard';


function Login() {
  const [errorMessages, setErrorMessages] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [users, setUsers] = useState([])

  useEffect(()=>{
    let url = "http://localhost:8000/students"
    fetch(url)
    .then(resp=>resp.json())
    .then(data=>{
      // console.log(data[0])
      setUsers(data)
    })
    console.log(users)
  }
  ,[])
  function handleChange(e){
    setUser(user=>e.target.value)
    console.log(user)
  }
  function handleSub(e){
    e.preventDefault()
    console.log(users)
  }
  const database = [
    {
      registrationNumber: "user1",
      password: "pass1"
    },
    {
      registrationNumber: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid registration number",
    pass: "invalid password"
  };


  //Prevent page reload
  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.registrationNumber === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
  // Code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


  // Login form
  const renderForm = (
    <div className="form">

      <form onSubmit={(e)=>{handleSubmit(e) ;handleSub(e)}} >
        <div className="input-container">
          <label>Registration number: </label>
          <input type="text"
            name="uname"
            value={user}
            onChange = {e=>handleChange(e)}
            placeholder="Type your Student Registration Number."
            required /> 
          {renderErrorMessage("uname")}
        </div>

        <div className="input-container">
          <label>Password: </label>
          <input type="password"
            name="pass"
            placeholder="Type your password."
            required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <button type="submit"><span>Login</span></button>
        </div>
      </form>

    </div>
  );



  return (
    <div className="app">
    
      <div className="login-form">
        <div className="title">Student Login</div>
        {isSubmitted ? 
         <Navigate to="/dashboard" />: renderForm}
     
     <Link to="/ForgotPassword">
        <p>Forgot your Password</p> 
        </Link>

      </div>

    </div>
  )
}

export default Login
