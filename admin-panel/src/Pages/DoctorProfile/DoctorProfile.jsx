import './DoctorProfile.scss'
import Navbar from '../../Component/Navbar/Navbar'
import Sidebar from '../../Component/Sidebar/Sidebar'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Table from '../../Component/Table/PeopleTable'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const DoctorProfile = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className='doctorProfile'>
        <Sidebar/>
        <div className="doctorProfileContainer">
            <Navbar/>
            <div className="columns">
                <div className="left">
                    <div className="top">
                        <div className="header">
                            <h4>DR. JOHN DOE</h4>
                            <p>Senior Doctor</p>
                        </div>
                        <Stack direction="row" className='avatar' spacing={2}>
                            <Avatar sx={{ bgcolor: deepOrange[500], width:90, height:90}}>DR</Avatar>
                        </Stack>
                        <div className="body">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima?</p>
                            <p><LocalPhoneSharpIcon/> <span>+256 756 800 602</span></p>
                        </div>
                    </div>
                    <div className="bottom">
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="About" {...a11yProps(0)} />
                                <Tab label="Skills" {...a11yProps(1)} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <p className="heading">Email Address</p>
                                <p className="data">johndoe@gmail.com</p>
                                <p className="heading">Phone</p>
                                <p className="data">+256 756 800 061</p>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <li className='skill'>OPD</li>
                                <li className='skill'>OPERATIONS</li>
                                <li className='skill'>PATIENT VISIT</li>
                                <li className='skill'>RND</li>
                            </TabPanel>
                        </Box>
                    </div>
                </div>
                <div className="right">
                    <h4>Last Meetings</h4>
                    <Table/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DoctorProfile