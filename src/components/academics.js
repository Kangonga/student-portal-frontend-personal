import { Route, Routes, Link } from 'react-router-dom'
import DoneUnits from './doneUnits'
import RegisterCourse from './registerCourse'
import Searchbar from './searchbar'
export default function Academics({units,addUnit,setFormData ,formdata}){
    return(
    <section id="academics">
        <nav>
            {/* <Link to="/dashboard/academics" className='academics-tabs'>Attempted Units</Link> */}
            <Link to="/dashboard/academics/doneUnits" className='academics-tabs'>Attempted Units</Link>
            <Link to="/dashboard/academics/register" className='academics-tabs'>Register New Units</Link>
            {/* <Link to="/academics/search" className='academics-tabs'>Searchbar</Link> */}
        </nav>
        <main>
            <Routes>
                <Route path='/' element={<DoneUnits units={units}/>}/>
                <Route path='/doneUnits' element={<DoneUnits units={units}/>}/>
                <Route path='/register' element={<RegisterCourse units={units}setFormData={setFormData} formdata={formdata}/>}/>
            </Routes>
        </main>
        
    </section>
        
    )
}