import './Navbar.scss'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Badge from '@mui/material/Badge';
import { useSelector, useDispatch } from 'react-redux';
import {reset, logout } from '../../features/auth/authSlice'

const Navbar = () => {
  const dispatch = useDispatch()

  const {user} = useSelector(state=>state.auth)
  console.log()
  const handleLogout = () => {
    dispatch(logout())
    dispatch(reset())
  }
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          {user.data.username}
        </div>
        <div className="items">
          <div className="item">
          <Stack spacing={4} direction="row">
            <Badge color="success" badgeContent={1000} max={9}>
              <NotificationsNoneIcon/>
            </Badge>
          </Stack>
          </div>
          <div className="item">
            <Stack spacing={4} direction="row">
              <Badge color="success" badgeContent={1000} max={9}>
                <ChatBubbleOutlineIcon/>
              </Badge>
            </Stack>
          </div>
          <div className="item">
          <Stack direction="row">
            <Avatar alt="Ben Sharp" src="/images/bakground.jpg"/>
          </Stack>
          </div>
          {
            user ? (<LogoutIcon onClick={handleLogout} style={{cursor:'pointer'}} />) : (<></>)
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar