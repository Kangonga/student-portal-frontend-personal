import {Routes, Route, Link} from 'react-router-dom'
import Academics from './academics'
import StudentInfo from './studentInfo'

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
                <Route path="/logout" element={StudentInfo}/>
            </Routes>
        </section>
    )
}