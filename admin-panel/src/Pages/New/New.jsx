import './New.scss'
import Sidebar from '../../Component/Sidebar/Sidebar'
import Navbar from '../../Component/Navbar/Navbar'
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';

const New = ({title}) => {
  const [value, setValue] = useState(null);
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="bottom">
            <h1>{title}</h1>
            <form action="">
              <div className="formInput">
                <label>First Name</label>
                <input type="text" placeholder='First Name' />
              </div>
              <div className="formInput">
                <label>Last Name</label>
                <input type="text" placeholder='Last Name' />
              </div>
              <div className="formInput">
                <label>Gender</label>
                <input type="text" placeholder='Gender' />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="number" placeholder='+256 234567890' />
              </div>
              <div className="formInput" style={{paddingTop:'10px'}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    inputFormat="DD-MM-YYYY"
                    value={value}
                    label="Date Of Birth"
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
              <div className="formInput">
                <label>Age</label>
                <input type="number" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input email="text" placeholder='Email' />
              </div>
              <div className="formInput">
                <label>Marital Status</label>
                <input type="text" placeholder='Marital Status' />
              </div>
              <div style={{width: "100%"}}>
              <label>Address</label>
              <textarea name="" id="" rows="2"></textarea>
              </div>
              <div className="formInput">
                <label>Blood Group</label>
                <input type="text" placeholder='Blood Group' />
              </div>
              <div className="formInput">
                <label>Blood Pressure</label>
                <input type="text" placeholder='Blood Pressure' />
              </div>
              <button>SUBMIT</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default New