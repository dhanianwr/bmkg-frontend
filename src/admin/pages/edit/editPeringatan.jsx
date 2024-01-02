import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import { Button } from "@material-tailwind/react";

export function EditPeringatan() {
  const [tanggal, setTanggal] = useState(new Date());
  const [peringatan, setPeringatan] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  //GET METHOD
  useEffect(() => {
    const getPeringatanById = async () => {
      const response = await axios.get(
        `http://localhost:5000/peringatan/${id}`
      );
      setPeringatan(response.data.peringatan);
    };

    getPeringatanById();
  }, [id]);

  //POST METHOD
  const updatePeringatan = async (e) => {
    let fixDate = tanggal.toISOString();
    e.preventDefault();
    const formData = new FormData();
    formData.append("tanggal", fixDate);
    formData.append("peringatan", peringatan);
    try {
      await axios.patch(`http://localhost:5000/peringatan/${id}`, formData, {
        headers: {
          "Content-type": "application/json",
        },
      });
      navigate("/dashboard/peringatan");
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
            <h6 className="text-blueGray-700 pl-5 text-xl">Edit Peringatan</h6>
          </div>
        </div>
        <div className="flex-auto bg-[#ffffffe5] px-4 py-10 pt-0 lg:px-6">
          <form onSubmit={updatePeringatan}>
            <div className="mt-6 flex flex-wrap">
              <div className="w-full px-4">
                <div className="relative mb-3 w-full lg:w-4/5">
                  <label
                    className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                    htmlFor="grid-password"
                  >
                    Peringatan
                  </label>
                  <input
                    type="text"
                    className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow ring-cyan-600 transition-all duration-150 ease-linear focus:outline-none focus:ring-2"
                    placeholder="Masukkan Peringatan"
                    value={peringatan}
                    onChange={(e) => setPeringatan(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-4/5">
                <div className="relative mb-3 w-full">
                  <label
                    className="text-blueGray-600 mb-2 block text-sm font-bold"
                    htmlFor="grid-password"
                  >
                    Tanggal
                  </label>
                  <DatePicker
                    dateFormat="dd-MM-yyyy"
                    className="z-[100] w-full rounded bg-white px-3 py-3 text-sm shadow ring-cyan-600 focus:outline-none focus:ring-2"
                    selected={tanggal}
                    onChange={(date) => setTanggal(date)}
                    placeholderText="Masukkan Tanggal"
                  />
                </div>
              </div>
            </div>
            <div className="mr-6 flex-auto bg-[#ffffffe5] pt-10 lg:px-6">
              <div className="flex justify-end gap-4 text-center">
                <Button>
                  <Link to={`/dashboard/peringatan`}>Cancel</Link>
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

export default EditPeringatan;
