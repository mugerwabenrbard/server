import './Dashboard.scss'
import Sidebar from '../../Component/Sidebar/Sidebar'
import Navbar from '../../Component/Navbar/Navbar'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Chart from '../../Component/Chart/Chart';
import Table from '../../Component/Table/Table';
import { useEffect } from 'react';
import jwt from 'jsonwebtoken';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate()
    // Check For User Token
    // useEffect(() => {
    //     const token = localStorage.getItem('token')

    //     if (token) {
    //         const user = jwt.decode(token)
    //         console.log(user)
    //         if (!user) {
    //             localStorage.removeItem(token)
    //             navigate('/')
    //         }
    //     }
    // }, [])
    
  return (
    <div className='dashboard'>
        <Sidebar/>
        <div className="dashboardContainer">
            <Navbar/>
            <div className="widgets">
                <div className="widget">
                    <p className="title">Patients</p>
                    <div className="chart"> <Chart width={200} height={100}/> </div>
                    <p className="count">345 Patients</p>
                    <p className="percent"><span>Total 14% increase</span> <ArrowDropDownIcon/></p>
                </div>
                <div className="widget">
                    <p className="title">Rooms Occupied</p>
                    <div className="chart"><Chart width={200} height={100}/></div>
                    <p className="count">62 Beds</p>
                    <p className="percent"><span>Total 14% increase</span> <ArrowDropUpIcon/></p>
                </div>
                <div className="widget">
                    <p className="title">Pharmacy</p>
                    <div className="chart"><Chart width={200} height={100}/></div>
                    <p className="count">2468 Medicines</p>
                    <p className="percent"><span>Total 14% increase</span> <ArrowDropDownIcon/></p>
                </div>
                <div className="widget">
                    <p className="title">Laboratory</p>
                    <div className="chart"><Chart width={200} height={100}/></div>
                    <p className="count">198 Lab Tests</p>
                    <p className="percent"><span>Total 14% increase</span> <ArrowDropUpIcon/></p>
                </div>
            </div>
            <div className="recents">
                <p className="tableTitle">Last 5 Bills</p>
                <Table/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard