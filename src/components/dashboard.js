import {Routes, Route, Link} from 'react-router-dom'
import Academics from './academics'
import StudentInfo from './studentInfo'
import DoneUnits from './doneUnits'
import RegisterCourse from './registerCourse'
import Searchbar from './searchbar'
export default function Dashboard (){
    return (
        <main id="container">
            <Panel />
            <MainBoard />
        </main>
    )
}
function Panel(){
    return (
        <section id="panel">
            <Link to ="/">Personal Information</Link>
            <Link to ="/academics">Academics</Link>
            <Link to ="/finances">Financials</Link>
            <Link to ="/announce">Announcements</Link>
            <Link to ="/logout">Log Out</Link>
        </section>
    )
}

function MainBoard(){
    return(
        <section id="mainboard">
            <Routes>
                <Route path="/" element={<StudentInfo />}/>
                <Route path="/academics/*" element={<Academics/>}/>
                <Route path="/finances" element={<h1>Finances</h1>} />
                <Route path="/announce" element={<h1>Announcements</h1>}/>
                <Route path="/logout" element={<StudentInfo/>}/>
                {/* <Route exact path='/academics/doneUnits' element={<DoneUnits/>}/>
                <Route exact path='/academics/register' element={<RegisterCourse/>}/>
                <Route exact path='/academics/search' element={<Searchbar/>}/> */}
            </Routes>
        </section>
    )
}