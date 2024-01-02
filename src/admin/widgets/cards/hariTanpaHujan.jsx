import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@material-tailwind/react";

export function HariTanpaHujan() {
  const [nameHTH, setNameHTH] = useState("");
  const [fotoHTH, setFotoHTH] = useState([]);

  //POST METHOD
  const createHTH = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", nameHTH);
    formData.append("foto", fotoHTH);
    try {
      await axios.post("http://localhost:5000/hari-tanpa-hujan", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      refreshPage()
    } catch (error) {
      console.log(error);
    }
  };

  //EVENT IMAGE
  const loadImageHTH = (e) => {
    const image = e.target.files[0];
    setFotoHTH(image);
  };

  //RefreshPage
  function refreshPage() {
    window.location.reload(setTimeout(refreshPage, 4000));
  }

  function Allert() {
    alert("Data Hari Tanpa Hujan Berhasil Ditambahkan");
  }

  return (
    <div>
      <form className="flex flex-wrap" onSubmit={createHTH}>
        <div className="w-full px-4 lg:w-3/4">
          <div className="relative mb-3 w-full ">
            <label
              className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
              htmlFor="grid-password"
            >
              Hari Tanpa Hujan
            </label>
            <div className="flex lg:flex-wrap space-x-5">
              <input
                type="text"
                className="placeholder-blueGray-300 text-blueGray-600 h-10 w-2/5 rounded border-0 bg-white px-3 py-3 text-sm shadow ring-cyan-600 transition-all duration-150 ease-linear focus:outline-none focus:ring-2 lg:w-1/3"
                placeholder="Title"
                value={nameHTH}
                onChange={(e) => setNameHTH(e.target.value)}
              />
              <input
                className="h-10 w-full cursor-pointer rounded-l-lg rounded-r border-0 bg-white text-sm shadow ring-cyan-600 transition-all duration-150 ease-linear focus:outline-none focus:ring-2 lg:w-7/12"
                type="file"
                onChange={loadImageHTH}
              />
            </div>
          </div>
        </div>
        <div className="w-full px-4 lg:mt-7 lg:w-1/5 mb-7">
          <Button
            type="submit"
            onClick={Allert}
            className="border-[#008d4c] bg-[#00a65a] hover:bg-[#008d4c] active:bg-[#12613c]"
          >
            Simpan
          </Button>
        </div>
      </form>
    </div>
  );
}

export default HariTanpaHujan;
