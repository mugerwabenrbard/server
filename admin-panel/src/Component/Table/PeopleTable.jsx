import './Table.scss'
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';

const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name' },
    { field: 'gender', headerName: 'Gender' },
    {
      field: 'dob',
      headerName: 'DOB',
    },
    {
      field: 'address',
      headerName: 'Address',
    },
    {
        field: 'bloodGroup',
        headerName: 'Blood Group',
    },
    {
        field: 'treatment',
        headerName: 'Treatment',
    },
    {
        field: "Actions",
        renderCell: (cellvalues)=>{
            return (
                <div>
                    <span><EditIcon style={{color:'#201b56', cursor:'pointer', marginRight:'10px'}}/></span>
                    <span><DeleteOutlineSharpIcon style={{color:'red', cursor:'pointer'}}/></span>
                </div>
            )
        }
    }
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35},
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

const PeopleTable = () => {
    const actions = [<div>
        <EditIcon/>
        <DeleteOutlineSharpIcon/>
    </div>]
  return (
    <div style={{ height: 530}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  )
}

export default PeopleTable