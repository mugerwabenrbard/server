import Navbar from '../../Component/Navbar/Navbar'
import Sidebar from '../../Component/Sidebar/Sidebar'
import './Payment.scss'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DataTable, {defaultThemes} from 'react-data-table-component';
import PrintIcon from '@mui/icons-material/Print';

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
        name: 'Title',
        selector: row => row.title,
        sortable:true,
        filterable:true
    },
    {
        name: 'Year',
        selector: row => row.year,
        sortable:true,
        filterable:true

    },
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

const Invoice = () => {
  return (
    <div className='invoice'>
        <Sidebar/>
        <div className="invoiceContainer">
            <Navbar/>
            <div className="invoiceData">
                <div className="header">
                    <p className="title">INVOICE</p>
                    <p className="invoiceNo">#217643</p>
                </div>
                <div className="body">
                    <div className="left">
                        <p className="logo">+ You Hospital</p>
                        <p>Lorem ipsum dolor,</p>
                        <p>Lorem ips dor,</p>
                        <p>Lorem dolor,</p>
                        <p>Lo ipsum dolor</p>
                    </div>
                    <div className="right">
                        <p className="tobill">TO BILL:</p>
                        <p className="name">John Doe</p>
                        <p>Lorem ipsum dolor,</p>
                        <p>Lorem ips dor,</p>
                        <p>Lorem dolor,</p>
                        <p>Lo ipsum dolor</p>
                        <p className="invoiceDate">Invoice Date: <CalendarMonthIcon className='icon'/>  <span>14th July 2022</span> </p>
                        <p className="status">Status: <span className='paid'>PAID</span></p>
                    </div>
                </div>
                <div className="table">
                    <DataTable
                        columns={columns}
                        data={data}
                        customStyles={customStyles}
                    />
                </div>
                <div className="calculation">
                    <p>Sub-Total: UGX. 320,000</p>
                    <p>Discount: UGX. 0</p>
                    <hr />
                <p className="total">Total : UGX. 320,000</p>
                </div>
                <button><PrintIcon/> <span>PRINT</span></button>
            </div>
        </div>
    </div>
  )
}

export default Invoice