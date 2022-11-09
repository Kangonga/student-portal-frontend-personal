import {Routes, Route, Link} from 'react-router-dom'
import Academics from './academics'
import StudentInfo from './studentInfo'
import Finances from './finances';
import RequestQuoteRoundedIcon from '@mui/icons-material/RequestQuoteRounded';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';


import logo from '../assets/logo.jpg';
import { useEffect, useState } from 'react';

export default function Dashboard ({login, student, units}){
    // console.log("dashboard",student)
    return (
        <main id="container">
            <Panel login={login} student={student}/>
            <MainBoard student={student} units={units}/>
        </main>
    )
}
function Panel({setLogin}){
    function handleLogOut() {
        setLogin(false);
    }
    return (
        <section id="panel">
            <section id='panel-links'>
            <article className='logo-panel-background'>
            <img class="logo" src={logo} alt="logo"/>
            </article>
            <Link className="nav-link" to ="/dashboard"><div><GridViewOutlinedIcon/> Dashboard</div></Link>
            <Link className="nav-link" to ="/dashboard/academics/"><div><ImportContactsIcon/> Academics</div></Link>
            <Link className="nav-link" to ="/dashboard/finances"><div><RequestQuoteRoundedIcon/> Financials</div></Link>
            <Link onClick={handleLogOut} className="nav-link" to ="/"><div><ExitToAppRoundedIcon/> Log Out</div></Link>
            </section>    
        </section>
    )
}

function MainBoard({student, units}){
    console.log("mainboard: " ,student)
    return(
        <section id="mainboard">
            <article className="logo-background">
                Hokage<img class="logo" src={logo} alt="logo"/>University
            </article>
            <Routes>
                <Route path="/" element={<StudentInfo student={student}/>}/>
                <Route path="/dashboard" element={<StudentInfo student={student}/>}/>
                <Route path="/academics/*" element={<Academics student={student} units={units}/>}/>
                <Route path="/finances" element={<Finances student={student}/>} />   
                <Route path="/logout" element={<StudentInfo/>}/>
                {/* <Route exact path='/academics/doneUnits' element={<DoneUnits/>}/>
                <Route exact path='/academics/register' element={<RegisterCourse/>}/>
                <Route exact path='/academics/search' element={<Searchbar/>}/> */}
            </Routes>
        </section>
    )
}