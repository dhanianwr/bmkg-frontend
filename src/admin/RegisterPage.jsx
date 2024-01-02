import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import img from '../assets/logo-bmkg-no-text.png'

export const RegisterPage = () => {

    const [name, setName] = useState('');
    const [nip, setNip] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Register = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                name: name,
                nip: nip,
                password: password,
                confPassword: confPassword
            });
            navigate("/warb96987stametbwi");
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    }

  return (
    <>
        <div className='loginPage'>
            <div className='konten-login'>
                <div className='text-login mb-5'>
                <h2 className='text-center fw-bold'>
                    <img className='logo-bmkg-login' src={img}/>
                    REGISTRASI ADMINISTRATOR
                </h2>
            </div>
                <div className='bg-login-form'>
                    <p className='text-center'>{msg}</p>
                    <form onSubmit={Register} className='text-center'>
                        <div className="mb-4">
                            <input type="text" className="form-control" id="validationCustom01" placeholder='Nama Lengkap Anda' value={name}  onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="mb-4">
                            <input type="text" className="form-control" id="exampleInputEmail1" placeholder='No NIP Anda' value={nip}  onChange={(e) => setNip(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password Anda' value={password}  onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Masukan Kembali Password Anda' value={confPassword}  onChange={(e) => setConfPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary">REGISTRASI</button>
                    </form>
                </div>
            </div>
            </div>
    </>
  )
}
