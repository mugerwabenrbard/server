import './Submenu.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Submenu = ({item}) => {
    const [subNav, setSubNav] = useState(false)

    const showSubNav = () => setSubNav(!subNav)
  return (
    <div className='sidebarItems'>
     <Link className='link' to= {item.path} onClick={item.subNav && showSubNav}>
            {item.icon}
            <span>{item.title}</span>
            {item.subNav && subNav ? item.iconOpen : item.subNav ? item.iconClosed: null}
    </Link>
    {subNav && item.subNav.map((item,index)=>{
        return <div className="wrap">
                    <Link className='subLink' to={item.path} key={index}>{item.icon} <span>{item.title}</span></Link>
                </div> 
    })}
    </div>
  )
}

export default Submenu