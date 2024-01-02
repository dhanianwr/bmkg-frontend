import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddBuletin() {
    const [name, setName] = useState('');
    const [buletin, setBuletin] = useState('');
    const [preview, setPreview] = useState('');
    const navigate = useNavigate();
   
    const loadBuletin = (e) => {
       const buletin = e.target.files[0];
       setBuletin(buletin);
       setPreview(URL.createObjectURL(buletin));
    };
   
    const createBuletin = async (e) => {
       e.preventDefault();
       const formData = new FormData();
       formData.append("name", name);
       formData.append("buletin", buletin);
       try {
         await axios.post('http://localhost:5000/buletin', formData, {
           headers: {
             "Content-type": "multipart/form-data"
           }
         });
         navigate('/buletin')
       } catch (error) {
         console.log(error)
       }
    }


  return (
    <div>

        <form onSubmit={createBuletin}>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Isi Keterangan Di Sini"
            aria-label=".form-control-lg example"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div className="mb-3">
            <input
            type="file"
            id="myFile"
            name="filename"
            onChange={loadBuletin}
            />
        </div>
        {preview ? (
            <embed type="application/pdf" src={preview} width="600" height="400"></embed>
        ) : (
            ""
        )}

        <div className="mb-3 pt-3">
            <input type="submit" />
        </div>
        </form>

    </div>
  )
}

export default AddBuletin