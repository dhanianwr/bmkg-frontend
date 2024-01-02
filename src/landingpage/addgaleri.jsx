import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddGaleri() {
  const [name, setName] = useState("");
  const [foto, setFoto] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFoto(image);
    setPreview(URL.createObjectURL(image));
  };

  const createImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("foto", foto);
    try {
      await axios.post("http://localhost:5000/galeri", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/galeri");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={createImage}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
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
          <input type="file" id="myFile" name="filename" onChange={loadImage} />
        </div>
        {preview ? (
          <img
            src={preview}
            alt="preview Image"
            style={{ width: "20rem", height: "20rem" }}
          />
        ) : (
          ""
        )}

        <div className="mb-3 pt-3">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default AddGaleri;
