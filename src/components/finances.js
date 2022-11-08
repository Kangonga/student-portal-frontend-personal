export default function Finances(){
    return (
        <>
        <article id="finance-table" >
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th colSpan={2}>
                            Fincancial Information
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Name</td>
                            <td>Actual Name</td>
                        </tr>
                        <tr>
                            <td>Admission No.</td>
                            <td>Details</td>
                        </tr>
                        <tr>
                            <td>Total Paid overall</td>
                            <td>Actual balance</td>
                        </tr>
                        <tr>
                            <td>Semester</td>
                            <td>Actual semester</td>
                        </tr>
                        <tr>
                            <td>Semester Balance</td>
                            <td>debt remaining </td>
                        </tr>
                        
                        </tbody>
                        <tfoot>
                        
                        </tfoot>
                        
                    </table>
                </article>
        </>
    )
}
