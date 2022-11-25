import './Login.scss'
import '../Payment/Payment.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [username, setUsername] = useState('')
    const [department, setDepartment] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const loginUser = (e) =>{
        e.preventDefault()
        const user = {username, department, password}
        axios.post('http://localhost:5000/api/user/login', user).then((res)=>{
            const data = res.data
            if (data.message === "User Logged in Successfully") {
              // localStorage.setItem('token', data.token)
              navigate('/dashboard')
            }else(
              alert(data.message)
            )
        }).catch(err=>console.log(err))
    }
  return (
    <div className='login' style={{backgroundImage: "url(/images/background.jpg)"}}>
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