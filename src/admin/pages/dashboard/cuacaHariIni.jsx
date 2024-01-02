import React, { useState, useEffect } from "react";
import axios from "axios";
import { mutate } from "swr";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Row } from "react-bootstrap";
import DatePicker from "react-datepicker";

export function CuacaHariIni() {
  const [imagesHI, setImageHI] = useState([]);
  const [nameHI, setNameHI] = useState(new Date());
  const [fotoHI, setFotoHI] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 12;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = imagesHI.slice(firstIndex, lastIndex);
  const npage = Math.ceil(imagesHI.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  useEffect(() => {
    getImageHI();
  }, []);

  const getImageHI = async () => {
    try {
      const response = await axios.get("http://localhost:5000/cuacahariini");
      setImageHI(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  //POST METHOD
  const createCuacaHariIni = async (e) => {
    let fixDate = nameHI.toISOString();
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", fixDate);
    formData.append("foto", fotoHI);
    try {
      await axios.post("http://localhost:5000/cuacahariini", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      refreshPage();
      alert("Data Prakiraan Cuaca Hari Ini Berhasil Ditambahkan");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteImageHI = async (buletinId) => {
    await axios.delete(`http://localhost:5000/cuacahariini/${buletinId}`);
    mutate("cuacahariini");
    alert("Data Prakiraan Cuaca Hari Ini Berhasil Dihapus");
    refreshPage();
  };

  //EVENT IMAGE
  const loadImageHI = (e) => {
    const image = e.target.files[0];
    const fileExtension = image.name.split(".").pop();
    const maxFileSize = 2 * 1024 * 1024;
    if (
      fileExtension.toLowerCase() !== "jpg" &&
      fileExtension.toLowerCase() !== "jpeg" &&
      fileExtension.toLowerCase() !== "png"
    ) {
      alert("File Harus Memiliki Format JPG, PNG, Atau JPEG");
      return;
    }
    if (image.size > maxFileSize) {
      alert('Ukuran Gambar Harus Dibawah 2 MB');
      return;
    }
    setFotoHI(image);
  };

  //RefreshPage
  function refreshPage() {
    window.location.reload(setTimeout(refreshPage, 4000));
  }

  return (
    <div>
      <div className="bg-blueGray-100 relative mx-auto my-5 flex max-w-full flex-col break-words rounded-md border-t-[6px] border-t-cyan-500 shadow-lg">
        <div className="mb-0 rounded-t border-b-[1px] border-b-gray-300 bg-white p-2">
          <div className="flex justify-between text-center">
            <h6 className="text-blueGray-700 pl-5 text-xl">
              Input Cuaca Hari Ini
            </h6>
          </div>
        </div>
        <div className="flex-auto bg-[#ffffffe5] px-4 py-10 pt-0 lg:px-6">
          <div className="mt-6 flex-col">
            <form className="flex flex-wrap" onSubmit={createCuacaHariIni}>
              <div className="w-full px-4 lg:w-3/4">
                <div className="relative mb-3 w-full ">
                  <div className="flex lg:flex-wrap space-x-5">
                    <DatePicker
                      dateFormat="dd-MM-yyyy"
                      className="z-[100] w-full rounded bg-white text-sm shadow ring-cyan-600 focus:outline-none focus:ring-2"
                      selected={nameHI}
                      onChange={(date) => setNameHI(date)}
                      placeholderText="Masukkan Tanggal"
                    />
                    <input
                      className="h-10 w-full cursor-pointer rounded-l-lg rounded-r border-0 bg-white text-sm shadow ring-cyan-600 transition-all duration-150 ease-linear focus:outline-none focus:ring-2 lg:w-7/12"
                      type="file"
                      onChange={loadImageHI}
                    />
                  </div>
                </div>
              </div>
              <div className="h-10 w-full px-4 lg:mt-7 lg:w-1/5 mb-7">
                <Button
                  type="submit"
                  className="border-[#008d4c] bg-[#00a65a] hover:bg-[#008d4c] active:bg-[#12613c]"
                >
                  Simpan
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-blueGray-100 relative mx-auto my-5 flex max-w-full flex-col break-words rounded-md border-t-[6px] border-t-cyan-500 shadow-lg">
        <div className="mb-0 rounded-t border-b-[1px] border-b-gray-300 bg-white p-2">
          <div className="flex justify-between text-center">
            <h6 className="text-blueGray-700 pl-5 text-xl">Data Cuaca</h6>
          </div>
        </div>
        <div className="flex-auto bg-[#ffffffe5] lg:px-6">
          <div className="flex justify-between pb-4 text-center">
            <h4 className="mt-5 mb-2 rounded-b border-b-4 border-b-cyan-400 text-lg">
              Cuaca Hari Ini
            </h4>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-5 px-6 h-full w-full">
            {records.map((cuacaHI, index) => {
               var nama = new Date(cuacaHI.name).toLocaleDateString(
                "id-ID",
                {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                },
              );
              var TanggalBikin = new Date(cuacaHI.createdAt).toLocaleDateString(
                "id-ID",
                {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit"
                },
              );
              var TanggalUpdate = new Date(cuacaHI.updatedAt).toLocaleDateString(
                "id-ID",
                {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit"
                },
              );
              return (
                <Card
                  className="h-full w-52 border-r-2 border-b-2"
                  key={cuacaHI.id}
                >
                  <CardHeader shadow={false} floated={false} className="h-full">
                    <img
                      src={cuacaHI.url}
                      alt={cuacaHI.title}
                      className="h-60 w-full object-cover"
                    />
                  </CardHeader>
                  <CardBody className="px-4 pb-4">
                    <div className="mb-2 flex flex-col justify-between">
                      <Typography className="pb-6 text-center first-line:font-medium fw-bold">
                        {nama}
                      </Typography>
                      <Typography className="fw-bold text-xs text-[#a3a3a3]" >
                      Di Buat:
                      </Typography>
                      <Typography className="text-xs text-[#a3a3a3]" >
                      {TanggalBikin}
                      </Typography>
                      <Typography className="fw-bold text-xs text-[#a3a3a3]">
                        Di Update:
                      </Typography>
                      <Typography className="text-xs text-[#a3a3a3]">
                        {TanggalUpdate}
                      </Typography>
                    </div>
                  </CardBody>
                  <CardFooter className="flex flex-row gap-2 self-center pt-0">
                    <a
                      href={`/dashboard/editCuacaHariIni/${cuacaHI.id}`}
                    >
                      <Button className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100">
                        Edit
                      </Button>
                    </a>
                    <Button
                      color="red"
                      onClick={() => deleteImageHI(cuacaHI.id)}
                      className=" shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    >
                      Hapus
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      <Row>
        <nav className="mt-5">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a href="#" className="page-link" onClick={prevPage}>
                Prev
              </a>
            </li>
            {numbers.map((n, i) => (
              <li
                className={`page-item ${currentPage === n ? "active" : ""}`}
                key={i}
              >
                <a
                  href="#"
                  className="page-link"
                  onClick={() => changeCPage(n)}
                >
                  {n}
                </a>
              </li>
            ))}
            <li className="page-item">
              <a href="#" className="page-link" onClick={nextPage}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </Row>
    </div>
  );
  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
}

export default CuacaHariIni;
