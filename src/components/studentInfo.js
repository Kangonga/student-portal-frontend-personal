import person from '../assets/person-logo.png';
export default function StudentInfo(){
    return(
        <section id="student-info">

            <h2>Hello User</h2>
            <article id="basic-info">
                <figure id="student-image">
                    <img src={person} alt="person logo" className='person-logo'/>
                    <figcaption>
                    Student Image
                    </figcaption>
                </figure>

                <article >
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th colSpan={2}>
                            Student Information
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Admission No.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Names</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>ID/Passport</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td>Date Of Birth</td>
                            <td></td>
                        </tr>
                        </tbody>
                        <tfoot>
                        
                        </tfoot>
                        
                    </table>
                </article>

            </article>
        </section>
        )
}