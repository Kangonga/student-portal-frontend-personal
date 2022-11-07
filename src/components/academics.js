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
            <Route path='/academics/doneUnits' element={<DoneUnits/>}/>
            <Route path='/academics/register' element={<RegisterCourse/>}/>
            <Route path='/academics/search' element={<Searchbar/>}/>
        </Routes>
    </>
        
    )
}