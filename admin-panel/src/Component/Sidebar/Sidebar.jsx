import './Sidebar.scss'
import { Link } from 'react-router-dom';
import { sideData } from '../Sidebars/SidebarData';
import Submenu from '../Sidebars/Submenu';

const Sidebar = () => {   
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
    </div>
  )
}

export default Sidebar