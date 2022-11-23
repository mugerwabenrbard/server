import './Datatable.scss'
import Navbar from '../../Component/Navbar/Navbar'
import Sidebar from '../../Component/Sidebar/Sidebar'
import PeopleTable from '../../Component/Table/PeopleTable'
import DataTable, {defaultThemes} from 'react-data-table-component'
import { useMemo, useState } from 'react';
import FilterComponent from '../Payment/FilterComponent';

const customStyles = {
	header: {
		style: {
			minHeight: '56px',
		},
	},
	headRow: {
		style: {
			borderTopStyle: 'solid',
			borderTopWidth: '1px',
			borderTopColor: defaultThemes.default.divider.default,
		},
	},
	headCells: {
		style: {
            fontSize: '16px',
            // border:'1px solid black',
			'&:not(:last-of-type)': {
				borderRightStyle: 'solid',
				borderRightWidth: '1px',
				borderRightColor: defaultThemes.default.divider.default,
			},
		},
	},
	cells: {
		style: {
            fontSize: '16px',
            // border:'1px solid black',
			'&:not(:last-of-type)': {
				borderRightStyle: 'solid',
				borderRightWidth: '1px',
				borderRightColor: defaultThemes.default.divider.default,
			},
		},
	},
};

const columns = [
    {
        name: 'Name',
        selector: row => row.title,
        sortable:true,
        filterable:true
    },
    {
        name: 'Gender',
        selector: row => row.title,
        sortable:true,
        filterable:true
    },
    {
        name: 'Address',
        selector: row => row.title,
        sortable:true,
        filterable:true
    },
    {
        name: 'Mobile',
        selector: row => row.title,
        sortable:true,
        filterable:true
    },
    {
        name: 'Birth Date',
        selector: row => row.title,
        sortable:true,
        filterable:true
    },
    {
        name: 'Blood Group',
        selector: row => row.title,
        sortable:true,
        filterable:true
    },
    {
        name: 'Treatment',
        selector: row => row.title,
        sortable:true,
        filterable:true
    },
    {
      name: 'Actions',
      selector: row => row.title,
      sortable:true,
      filterable:true
  }
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]

const Datatable = ({title}) => {
  const [filterText, setFilterText] = useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
	const filteredItems = data.filter(
		item => item.title && item.title.toLowerCase().includes(filterText.toLowerCase()),
	);

	const subHeaderComponentMemo = useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
		);
	}, [filterText, resetPaginationToggle]);
  return (
    <div className='datatable'>
        <Sidebar/>
        <div className="datatableContainer">
            <Navbar/>
            <div className="datatableTable">
            <p className="title">PATIENTS LIST</p>
                <DataTable
                    columns={columns}
                    data={filteredItems}
                    selectableRows
                    pagination
                    paginationComponentOptions={{selectAllRowsItem:true}}
                    fixedHeader
                    fixedHeaderScrollHeight='200px'
                    paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                    subHeader
                    subHeaderComponent={subHeaderComponentMemo}
                    customStyles={customStyles}
                />
            </div>
            </div>
        </div>
  )
}

export default Datatable