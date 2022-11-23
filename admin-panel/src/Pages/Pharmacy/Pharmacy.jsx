import "./Pharmacy.scss"
import Navbar from '../../Component/Navbar/Navbar'
import Sidebar from '../../Component/Sidebar/Sidebar'
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
        name: 'Medicine Name',
        selector: row => row.title,
        sortable:true,
        filterable:true
    },
    {
        name: 'Category',
        selector: row => row.title,
        sortable:true,
        filterable:true
    },
    {
        name: 'Company Name',
        selector: row => row.title,
        sortable:true,
        filterable:true
    },
    {
        name: 'Purchase Date',
        selector: row => row.title,
        sortable:true,
        filterable:true
    },
    {
        name: 'Price',
        selector: row => row.title,
        sortable:true,
        filterable:true
    },
    {
        name: 'Expiry Date',
        selector: row => row.title,
        sortable:true,
        filterable:true
    },
    {
        name: 'Stock',
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


const Pharmacy = () => {
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
    <div className='pharmacy'>
        <Sidebar/>
        <div className="pharmacyContainer">
            <Navbar/>
            <div className="pharmacyList">
            <p className="title">MEDICINE LIST</p>
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

export default Pharmacy