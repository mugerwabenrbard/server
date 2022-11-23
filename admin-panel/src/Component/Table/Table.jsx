import './Table.scss'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';

const Table = () => {
  return (
    <table className='table'>
        <thead>
            <tr>
                <th>Admission ID</th>
                <th>Patient</th>
                <th>Doctor Name</th>
                <th>Status</th>
                <th>Date</th>
                <th>Total</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>HGYU89</td>
                <td>John Doe</td>
                <td>Dr. Jane Doe</td>
                <td className='paid'>Paid</td>
                <td>02/ 10/ 2022</td>
                <td>340,000</td>
                <td>
                    <EditIcon className='icon edit'/>
                    <DeleteOutlineSharpIcon className='icon delete'/>
                </td>
            </tr>
            <tr>
                <td>HGYU89</td>
                <td>John Doe</td>
                <td>Dr. Jane Doe</td>
                <td className='unpaid'>Unpaid</td>
                <td>02/ 10/ 2022</td>
                <td>340,000</td>
                <td>
                    <EditIcon className='icon edit'/>
                    <DeleteOutlineSharpIcon className='icon delete'/>
                </td>
            </tr>
            <tr>
                <td>HGYU89</td>
                <td>John Doe</td>
                <td>Dr. Jane Doe</td>
                <td className='unpaid'>Unpaid</td>
                <td>02/ 10/ 2022</td>
                <td>340,000</td>
                <td>
                    <EditIcon className='icon edit'/>
                    <DeleteOutlineSharpIcon className='icon delete'/>
                </td>
            </tr>
            <tr>
                <td>HGYU89</td>
                <td>John Doe</td>
                <td>Dr. Jane Doe</td>
                <td className='paid'>Paid</td>
                <td>02/ 10/ 2022</td>
                <td>340,000</td>
                <td>
                    <EditIcon className='icon edit'/>
                    <DeleteOutlineSharpIcon className='icon delete'/>
                </td>
            </tr>
            <tr>
                <td>HGYU89</td>
                <td>John Doe</td>
                <td>Dr. Jane Doe</td>
                <td className='pending'>Pending</td>
                <td>02/ 10/ 2022</td>
                <td>340,000</td>
                <td>
                    <EditIcon className='icon edit'/>
                    <DeleteOutlineSharpIcon className='icon delete'/>
                </td>
            </tr>
            <tr>
                <td>HGYU89</td>
                <td>John Doe</td>
                <td>Dr. Jane Doe</td>
                <td className='unpaid'>Unpaid</td>
                <td>02/ 10/ 2022</td>
                <td>340,000</td>
                <td>
                    <EditIcon className='icon edit'/>
                    <DeleteOutlineSharpIcon className='icon delete'/>
                </td>
            </tr>
        </tbody>
    </table>
  )
}

export default Table