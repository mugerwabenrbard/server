import './Sidebar.scss'
import { Link } from 'react-router-dom';
import { sideData } from '../Sidebars/SidebarData';
import Submenu from '../Sidebars/Submenu';
import { useSelector, useDispatch } from 'react-redux';
import {reset, logout } from '../../features/auth/authSlice'

const Sidebar = () => {  
    const dispatch = useDispatch()
    
    const {user} = useSelector(state=>state.auth)

    const logout = ()=>{
        dispatch(logout())
        dispatch(reset())
    } 
  return (
    <div className='sidebar'>
        <div className="top">
            <Link to='/' style={{textDecoration:"none"}}>
                <span className="logo">
                    ADMIN
                </span>
            </Link>
        </div>
        <hr />
        <div className="center">
            {sideData.map((item,index)=>{
                return <Submenu item= {item} key= {index}/>
            })}
        </div>
        <hr />
        <div className="top">
            <span className="logout" onClick={logout}>
                LOGOUT
            </span>
        </div>
    </div>
  )
}

export default Sidebar