import Navbar from '../../Component/Navbar/Navbar'
import Sidebar from '../../Component/Sidebar/Sidebar'
import './PatientProfile.scss'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import PeopleTable from '../../Component/Table/PeopleTable';


const PatientProfile = () => {
  return (
    <div className='patientProfile'>
        <Sidebar/>
        <div className="patientProfileContainer">
            <Navbar/>
            <div className="container">
                <h3 className="title">Patient Profile</h3>
                <div className="columns">
                    <div className="left">
                        <Stack direction="row" className='avatar' spacing={2}>
                            <Avatar sx={{ bgcolor: deepOrange[500], width:150, height:150}}>MD</Avatar>
                        </Stack>

                        <div className="info">
                            <p className="infoTitle">About Patient</p>
                            <p className='desc'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores velit neque sint veniam exercitationem aspernatur dicta odit perferendis officia quas maxime consequuntur quo iure, autem fugiat cum! Debitis sequi maiores reprehenderit provident totam. Id inventore nam magni nemo. Commodi at vitae, dicta laudantium magni dolorem, veniam nostrum aliquam voluptates aspernatur aperiam? Iste excepturi velit dolor esse nulla repellendus blanditiis! Dignissimos sed temporibus.
                            </p>

                            <p className="heading">Email Address</p>
                            <p className="data">johndoe@gmail.com</p>
                            <p className="heading">Phone</p>
                            <p className="data">+256 756 800 061</p>
                            <p className="heading">Address</p>
                            <p className="data">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, vitae?</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="medicalIssues">
                            <h4>Medical Issues</h4>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        </div>
                        <div className="medicalIssues">
                            <h4>Past Medications</h4>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        </div>
                        <div className="visits">
                            <h4>Past Visits</h4>
                            <PeopleTable/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PatientProfile