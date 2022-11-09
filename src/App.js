import './App.css';
import {Navigate, Route,Routes} from 'react-router-dom'
import Dashboard from './components/dashboard';
import Login from './components/login';
import ForgotPassword from './components/forgotPassword';
import { useState } from 'react';
import { useEffect } from 'react';
import { Password, StarRounded } from '@mui/icons-material';

function App() {
  const [users, setUsers] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [inCorrectDetails, setIncorrectDetails] = useState(false)
  const [units, setUnits] = useState([])
  const [s,setS] = useState('')
  function handleSub(e,user,password){
    e.preventDefault()
    let student =users?.filter(student=>student.name===user&&password===student.password)
    if (student.length > 0){
      setLoggedIn(true)
      setIncorrectDetails(false)
      setS(student)
    }
    else {
      setIncorrectDetails(true)
    }
  }
  useEffect(()=>{
    let studentsurl = "http://localhost:9292/students"
    let unitsurl = "http://localhost:9292/units"
    fetch(studentsurl)
    .then(resp=>resp.json())
    .then(data=>{
      setUsers(data)
    }); 
    fetch(unitsurl)
    .then(resp=>resp.json())
    .then(data=>setUnits(data))
  }
  ,[])
  return (
    <>
    <Routes>
    <Route path="/" element={<Login
      inCorrectDetails={inCorrectDetails}
      login={loggedIn}
      handleSub={handleSub}
      user={users}
      setUsers={setUsers}/>} />
      <Route path="/ForgotPassword" element={<ForgotPassword/>} />
      <Route path="/dashboard/*" element={<Dashboard login={loggedIn} setLogin={setLoggedIn} student={s[0]} units={units}/>}/>
      </Routes>
    </>
  );
}

export default App;
