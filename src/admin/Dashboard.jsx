import React, { useState, useEffect } from 'react';
import axios from "axios";
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom';

const DashboardAdmin = () => {

 const [name, setName] = useState('');
 const [token, setToken] = useState('');
 const [expire, setExpire] = useState('');

 const navigate = useNavigate()

 useEffect(() => {
    refreshToken();
 }, []);

 const refreshToken = async() => {
    try {
      const response = await axios.get('http://localhost:5000/token');
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken)
      setName(decoded.name);
      setExpire(decoded.exp)
    } catch (error) {
      if(error.response){
        navigate('/warb96987stametbwi')
      }
    }
 }

 const axiosJWT = axios.create();

 axiosJWT.interceptors.request.use(async(config) => {
  const currentDate = new Date()
  if(expire * 1000 < currentDate.getTime()){
    const response = await axios.get('http://localhost:5000/token')
    config.headers.Authorization = `Bearer ${response.data.accessToken}`
    setToken(response.data.accessToken)
    const decoded = jwtDecode(response.data.accessToken)
    setName(decoded.name);
    setExpire(decoded.exp)
  }
  return config;
 }, (error) => {
  return Promise.reject(error);
 })

 const getUsers = async() => {
  const response = await axiosJWT.get('http://localhost:5000/users', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  console.log(response.data)
 }

 const Logout = async() => {
  try {
    await axios.delete('http://localhost:5000/logout')
    navigate('/warb96987stametbwi')
  } catch (error) {
    console.log(error);
  }
 }

 return (
    <div>
      <div>INI Dashboard ADMIN. WELCOME {name}</div>
      <button onClick={getUsers} className='mt-3'>Get Users</button>
      <button onClick={Logout}>Logout Disini</button>
    </div>

 )
}

export default DashboardAdmin