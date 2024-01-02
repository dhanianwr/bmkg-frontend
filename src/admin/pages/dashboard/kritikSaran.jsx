import React, { useEffect, useState } from "react";
// import useSWR from "swr";
import axios from "axios";
import { mutate } from "swr";
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Row } from "react-bootstrap";
import { Button } from '@material-tailwind/react'

export function KritikSaran() {

  const [kritiksaran, setKritiksaran] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 20;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = kritiksaran.slice(firstIndex, lastIndex);
  const npage = Math.ceil(kritiksaran.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  useEffect(() => {
    fetcher()
  },[])

  //GET METHOD
  const fetcher = async () => {
    const response = await axios.get("http://localhost:5000/kritik-saran");
    setKritiksaran(response.data)
  };

  const deleteKritik = async (kritikId) => {
    await axios.delete(
      `http://localhost:5000/kritik-saran/${kritikId}`
    );
    mutate("kritik-saran");
    alert("Data Berhasil Dihapus");
    refreshPage();
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
            <h6 className="text-blueGray-700 pl-5 text-xl">Kritik dan Saran</h6>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-5 px-6 h-full w-full ">
          {records.map((kritik, index) => {
            return (
              <Card key={kritik.id} className="w-full max-w-[48rem] flex-row">
                <CardBody>
                  <Typography variant="h4" className="uppercaseuppercase mb-2">
                    {kritik.nama}
                  </Typography>
                  <Typography variant="h6" className="mb-4 text-[#a3a3a3]">
                    {kritik.email} || {kritik.nohp}
                  </Typography>
                  <Typography variant="h5" className="uppercaseuppercase mb-2">
                    Kritik
                  </Typography>
                  <Typography variant="paragraph" className="mb-8 font-normal">
                  {kritik.kritik}
                  </Typography>
                  <Typography variant="h5" className="uppercaseuppercase mb-2">
                    Saran
                  </Typography>
                  <Typography variant="paragraph" className="mb-8 font-normal">
                  {kritik.saran}
                  </Typography>
                  <Button
                      color="red"
                      onClick={() => deleteKritik(kritik.id)}
                      className=" shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    >
                      Hapus
                    </Button>
                </CardBody>
              </Card>
            );
          })}
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

export default KritikSaran;
