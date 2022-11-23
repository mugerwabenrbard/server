import SickIcon from '@mui/icons-material/Sick';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PeopleIcon from '@mui/icons-material/People';
import AddIcon from '@mui/icons-material/Add';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import SpeedIcon from '@mui/icons-material/Speed';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import EngineeringIcon from '@mui/icons-material/Engineering';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PaymentIcon from '@mui/icons-material/Payment';
import ReceiptIcon from '@mui/icons-material/Receipt';
import HotelIcon from '@mui/icons-material/Hotel';
import CookieIcon from '@mui/icons-material/Cookie';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import InventoryIcon from '@mui/icons-material/Inventory';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export const sideData = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <SpeedIcon className='icon'/>
    },
    {
        title:'Patients',
        path:'#',
        icon:<SickIcon className='icon'/>,
        iconClosed: <ArrowDropDownIcon className='icon'/>,
        iconOpen: <ArrowDropUpIcon className='icon'/>,
        subNav: [
            {
                title: 'Patients',
                path: '/patients',
                icon: <PeopleIcon className='icon'/>
            },
            {
                title: 'Add Patient',
                path: '/patients/add-patient',
                icon: <AddIcon className='icon'/>
            },
            {
                title: 'Edit Patients',
                path: '/patients/edit-patient',
                icon: <BorderColorIcon className='icon'/>
            },
            {
                title: 'Patient Profile',
                path: '/patients/patient-profile',
                icon: <PermContactCalendarIcon className='icon'/>
            }
        ]
    },
    {
        title:'Doctors',
        path:'#',
        icon:<Diversity1Icon className='icon'/>,
        iconClosed: <ArrowDropDownIcon className='icon'/>,
        iconOpen: <ArrowDropUpIcon className='icon'/>,
        subNav: [
            {
                title: 'Doctors',
                path: '/doctors',
                icon: <PeopleIcon className='icon'/>
            },
            {
                title: 'Add Doctor',
                path: '/doctors/add-doctor',
                icon: <AddIcon className='icon'/>
            },
            {
                title: 'Edit Doctor',
                path: '/doctors/edit-doctor/1',
                icon: <BorderColorIcon className='icon'/>
            },
            {
                title: 'Doctor Profile',
                path: '/doctors/doctor-profile',
                icon: <PermContactCalendarIcon className='icon'/>
            }
        ]
    },
    {
        title:'Staffs',
        path:'#',
        icon:<EngineeringIcon className='icon'/>,
        iconClosed: <ArrowDropDownIcon className='icon'/>,
        iconOpen: <ArrowDropUpIcon className='icon'/>,
        subNav: [
            {
                title: 'Staffs',
                path: '/staffs',
                icon: <PeopleIcon className='icon'/>
            },
            {
                title: 'Add Staff',
                path: '/staffs/add-staff',
                icon: <AddIcon className='icon'/>
            },
            {
                title: 'Edit Staff',
                path: '/staffs/edit-staff/1',
                icon: <BorderColorIcon className='icon'/>
            },
            {
                title: 'Staff Profile',
                path: '/staffs/staff-profile',
                icon: <PermContactCalendarIcon className='icon'/>
            }
        ]
    },
    {
        title:'Billing',
        path:'#',
        icon:<AccountBalanceWalletIcon className='icon'/>,
        iconClosed: <ArrowDropDownIcon className='icon'/>,
        iconOpen: <ArrowDropUpIcon className='icon'/>,
        subNav: [
            {
                title: 'Payments',
                path: '/payments',
                icon: <PaymentIcon className='icon'/>
            },
            {
                title: 'Add Payment',
                path: '/payments/add-payment',
                icon: <AddIcon className='icon'/>
            },
            {
                title: 'Invoice',
                path: '/payments/invoice',
                icon: <ReceiptIcon className='icon'/>
            }
        ]
    },
    {
        title:'Room Allotment',
        path:'#',
        icon:<HotelIcon className='icon'/>,
        iconClosed: <ArrowDropDownIcon className='icon'/>,
        iconOpen: <ArrowDropUpIcon className='icon'/>,
        subNav: [
            {
                title: 'Alloted Rooms',
                path: 'alloted-rooms',
                icon: <PaymentIcon className='icon'/>
            },
            {
                title: 'Add Allotment',
                path: 'add-allotment',
                icon: <AddIcon className='icon'/>
            },
            {
                title: 'Edit Allotment',
                path: 'edit-allotment',
                icon: <BorderColorIcon className='icon'/>
            }
        ]
    },
    {
        title:'Departments',
        path:'#',
        icon:<CookieIcon className='icon'/>,
        iconClosed: <ArrowDropDownIcon className='icon'/>,
        iconOpen: <ArrowDropUpIcon className='icon'/>,
        subNav: [
            {
                title: 'Department List',
                path: '/department-list',
                icon: <CookieIcon className='icon'/>
            },
            {
                title: 'Add Department',
                path: '/department-list/add-department',
                icon: <AddIcon className='icon'/>
            }
        ]
    },
    {
        title:'Pharmacy',
        path:'#',
        icon:<LocalPharmacyIcon className='icon'/>,
        iconClosed: <ArrowDropDownIcon className='icon'/>,
        iconOpen: <ArrowDropUpIcon className='icon'/>,
        subNav: [
            {
                title: 'Medicine List',
                path: '/pharmacy',
                icon: <LocalPharmacyIcon className='icon'/>
            },
            {
                title: 'Add Medicine',
                path: '/pharmacy/add-medicine',
                icon: <AddIcon className='icon'/>
            }
        ]
    },
    {
        title:'Inventory',
        path:'#',
        icon:<InventoryIcon className='icon'/>,
        iconClosed: <ArrowDropDownIcon className='icon'/>,
        iconOpen: <ArrowDropUpIcon className='icon'/>,
        subNav: [
            {
                title: 'Inventory List',
                path: '/inventory',
                icon: <InventoryIcon className='icon'/>
            },
            {
                title: 'Add Inventory',
                path: '/inventory/add-inventory',
                icon: <AddIcon className='icon'/>
            },  
            {
                title: 'Issued Items',
                path: '/inventory/issued-items',
                icon: <CheckBoxIcon className='icon'/>
            },
            {
                title: 'Issue Item',
                path: '/inventory/issue-item',
                icon: <AddIcon className='icon'/>
            }
        ]
    }
]