import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/user'
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const [fName,setFname] = useState('');
  const rFName = (user)=>{
    setFname(user.firstName)
  }
  console.log("Auth--->", auth);
  useEffect(() => {
    if(auth?.user) rFName(auth?.user)
  }, [auth?.user])
  const handleLogout = ()=>{
    localStorage.removeItem('auth1');
    alert("Logout Successfully");
    navigate('/login')
  }
  return (
    <>
      <div>Welcome to Dashboard Page Mr. {fName? fName : "Unknown"} and your role is {auth?.user?.role === 0 ? "Employee" : auth?.user?.role ===1 ? "Manager" : "Guest"}</div>
      First Name : {auth?.user?.firstName}<br/>
      Last Name: {auth?.user?.lastName}<br/>
      Email: {auth?.user?.email}<br/>
      Role: {auth?.user?.role ===0 ? 'Employee' : ""}<br/>
      <button className='btn btn-primary' onClick={handleLogout}>{auth?.user && "Logout"}</button>
    </>
  )
}

export default Dashboard