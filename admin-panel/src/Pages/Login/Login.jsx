import './Login.scss'
import '../Payment/Payment.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import { login, reset } from '../../features/auth/authSlice'
import { useEffect } from 'react'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Login = () => {
  const [username, setUsername] = useState('')
    const [department, setDepartment] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = useSelector((state)=>state.auth)

    useEffect(()=>{
      if (isError) {
        toast.error('User Login Failed')
      }

      if (isSuccess || user) {
        navigate('/dashboard')
      }

      dispatch(reset)

    },[user, isError, isSuccess, message,navigate,dispatch])

    const loginUser = (e) =>{
        e.preventDefault()
        const userData = {username, department, password}

        dispatch(login(userData))
    }

    if (isLoading) {
      return  
        <Backdrop open>
          <CircularProgress color="inherit" />
        </Backdrop>
    }
  return (
    <div className='login' style={{backgroundImage: "url(/images/background.jpg)", backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}}>
      <div className="loginContainer">
        <p className="title">Welcome To HMS</p>
        <p className="title">LOGIN</p>
        <form onSubmit={loginUser}>
              <div className="formInput">
                  <label>Username</label>
                  <input type="text" onChange={e=>setUsername(e.target.value)} value={username} required/>
              </div>
              <div className="formInput">
                  <label>Department</label>
                  <select onChange={e=>setDepartment(e.target.value)} value={department} required>
                      <option value="" disabled>Choose Department</option>
                      <option value="Admin">Admin</option>
                      <option value="Doctor">Doctor</option>
                      <option value="Staff">Staff</option>
                  </select>
              </div>
              <div className="formInput">
                  <label>Password</label>
                  <input type="password" onChange={e=>setPassword(e.target.value)} required value={password}/>
              </div>
              <div className="btn">
                  <button>LOGIN</button>
              </div>
            </form>
      </div>
      
    </div>
  )
}

export default Login