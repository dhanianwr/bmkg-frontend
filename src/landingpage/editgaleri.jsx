import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditGaleri() {
    const [title, setTitle] = useState('');
    const [foto, setFoto] = useState('');
    const [preview, setPreview] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        getImageById();
    },[]);

    const getImageById = async () => {
        const response = await axios.get(`http://localhost:5000/images/${id}`);
        setTitle(response.data.title);
        setFoto(response.data.foto);
        setPreview(response.data.url);
    };

   
    const loadImage = (e) => {
       const image = e.target.files[0];
       setFoto(image);
       setPreview(URL.createObjectURL(image));
    };
   
    const createImage = async (e) => {
       e.preventDefault();
       const formData = new FormData();
       formData.append("title", title);
       formData.append("foto", foto);
       try {
         await axios.patch(`http://localhost:5000/images/${id}`, formData, {
           headers: {
             "Content-type": "multipart/form-data"
           }
         });
         navigate('/galeri')
       } catch (error) {
         console.log(error)
       }
    }


  return (
    <div>

        <form onSubmit={createImage}>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Isi Keterangan Di Sini"
            aria-label=".form-control-lg example"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <div className="mb-3">
            <input
            type="file"
            id="myFile"
            name="filename"
            onChange={loadImage}
            />
        </div>
        {preview ? (
            <img src={preview} alt='preview Image' style={{ width: '20rem', height: '20rem' }} />
        ) : (
            ""
        )}

        <div className="mb-3 pt-3">
            <input type="Submit" />
        </div>
        </form>

    </div>
  )
}

export default EditGaleri