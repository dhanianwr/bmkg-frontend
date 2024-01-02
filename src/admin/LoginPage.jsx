import img from '../assets/logo-bmkg-no-text.png'
import { useNavigate } from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";

export const LoginPage = () => {

    const [nip, setNip] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();


    const Auth = async(e) => {
      e.preventDefault();
      try {
          await axios.post('http://localhost:5000/login', {
              nip: nip,
              password: password,
          });
          navigate("/admin-dashboard");
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
                    ADMINISTRATOR BMKG BANYUWANGI
                </h2>
            </div>
                <div className='bg-login-form'>
                    <p className='text-center'>{msg}</p>
                    <form onSubmit={Auth} className='text-center'>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">NIP</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={nip} onChange={(e) => setNip(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary">LOGIN</button>
                    </form>
                </div>
            </div>
            </div>
            

    </>
  )
}
