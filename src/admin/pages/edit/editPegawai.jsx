import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const TABLE_HEAD = ["Nama", "NIP", "Pangkat/Gol", "Jabatan", "Action"];

export function EditPegawai() {
  const [nama, setNama] = useState("");
  const [nip, setNip] = useState("");
  const [pangkat, setPangkat] = useState("");
  const [jabatan, setJabatan] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  //GET METHOD
  useEffect(() => {
    const getPegawaiById = async () => {
      const response = await axios.get(`http://localhost:5000/pegawai/${id}`);
      setNama(response.data.nama);
      setNip(response.data.nip);
      setPangkat(response.data.pangkat);
      setJabatan(response.data.jabatan);
    };
    getPegawaiById();
  }, [id]);

  //PATCH METHOD
  const UpdatePegawai = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("nip", nip);
    formData.append("pangkat", pangkat);
    formData.append("jabatan", jabatan);
    try {
      await axios.patch(`http://localhost:5000/pegawai/${id}`, formData, {
        headers: {
          "Content-type": "application/json",
        },
      });
      navigate("/dashboard/pegawai");
    } catch (error) {
      console.log(error);
    }
  };

  function Allert() {
    alert("Berhasil Memperbarui Data");
  }

  return (
    <div>
      <div className="bg-blueGray-100 relative mx-auto my-5 flex max-w-full flex-col break-words rounded-md border-t-[6px] border-t-cyan-500 shadow-lg">
        <div className="mb-0 rounded-t border-b-[1px] border-b-gray-300 bg-white p-2">
          <div className="flex justify-between text-center">
            <h6 className="text-blueGray-700 text-xl">Edit Data Pegawai</h6>
          </div>
        </div>
        <div className="flex-auto bg-[#ffffffe5] px-4 py-10 pt-0 lg:px-6">
          <form onSubmit={UpdatePegawai}>
            <div className="mt-6 flex flex-wrap">
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                    htmlFor="grid-password"
                  >
                    Nama
                  </label>
                  <input
                    type="text"
                    className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow ring-cyan-600 transition-all duration-150 ease-linear focus:outline-none focus:ring-2"
                    placeholder="Masukkan Nama"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                    htmlFor="grid-password"
                  >
                    NIP
                  </label>
                  <input
                    type="text"
                    className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow ring-cyan-600 transition-all duration-150 ease-linear focus:outline-none focus:ring-2"
                    placeholder="Masukkan NIP"
                    value={nip}
                    onChange={(e) => setNip(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                    htmlFor="grid-password"
                  >
                    Pangkat/Gol
                  </label>
                  <input
                    type="text"
                    className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow ring-cyan-600 transition-all duration-150 ease-linear focus:outline-none focus:ring-2"
                    placeholder="Masukkan Pangkat"
                    value={pangkat}
                    onChange={(e) => setPangkat(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                    htmlFor="grid-password"
                  >
                    Jabatan
                  </label>
                  <input
                    type="text"
                    className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow ring-cyan-600 transition-all duration-150 ease-linear focus:outline-none focus:ring-2"
                    placeholder="Masukkan Jabatan"
                    value={jabatan}
                    onChange={(e) => setJabatan(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="mr-6 flex-auto bg-[#ffffffe5] pt-10 lg:px-6">
              <div className="flex justify-end gap-4 text-center">
                <Button>
                  <Link to={`/dashboard/pegawai`}>Cancel</Link>
                </Button>
                <Button
                  type="submit"
                  onClick={Allert}
                  className="border-[#008d4c] bg-[#00a65a] hover:bg-[#008d4c] active:bg-[#12613c]"
                >
                  Simpan
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditPegawai;
