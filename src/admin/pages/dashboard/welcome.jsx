import React from 'react'
import axios from 'axios'
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const WelcomePage = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    Adminname();
  }, []);

  const Adminname = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setName(decoded.name);
    } catch (error) {
      if (error.response) {
        navigate("/stametbwi96987-sign_in");
      }
    }
  };
  return (
    <>
    <div className='text-left mt-4 mb-5 admin-page'>
      <p >Hi, <span className='fw-bold'>{name}</span></p>
      <p>Selamat Datang di Halaman Admin</p>
      <p>Website BMKG Banyuwangi</p>
    </div>
      
    </>
  )
}
