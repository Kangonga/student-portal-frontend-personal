import { Route, Routes, Link } from 'react-router-dom'
import DoneUnits from './doneUnits'
import RegisterCourse from './registerCourse'
import Searchbar from './searchbar'
export default function Academics(){
    return(
    <>
    <h1>Academics</h1>
        <Link to="/academics/doneUnits">DoneUnits</Link>
        <Link to="/academics/register">Register</Link>
        <Link to="/academics/search">Searchbar</Link>
        <Routes>
            <Route exact path='/doneUnits' element={<DoneUnits/>}/>
            <Route exact path='/register' element={<RegisterCourse/>}/>
            <Route exact path='/search' element={<Searchbar/>}/>
        </Routes>
    </>
        
    )
}