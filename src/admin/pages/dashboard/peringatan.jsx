import React, { useEffect, useState } from "react";
import axios from "axios";
import { mutate } from "swr";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import DatePicker from "react-datepicker";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Row } from "react-bootstrap";

const TABLE_HEAD = ["ID", "Tanggal", "Peringatan", "Action"];

export function Peringatan() {
  const [tanggal, setTanggal] = useState(new Date());
  const [peringatan, setPeringatan] = useState("");
  const [dataperingatan, setDataperingatan] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 30;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = dataperingatan.slice(firstIndex, lastIndex);
  const npage = Math.ceil(dataperingatan.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  useEffect(() => {
    fetcher();
  }, []);

  //GET METHOD
  const fetcher = async () => {
    const response = await axios.get("http://localhost:5000/peringatan");
    setDataperingatan(response.data)
  };
  // const { data } = useSWR("peringatan", fetcher);

  //POST METHOD
  const createPeringatan = async (e) => {
    let fixDate = tanggal.toISOString();
    e.preventDefault();
    const formData = new FormData();
    formData.append("peringatan", peringatan);
    formData.append("tanggal", fixDate);

    try {
      await axios.post("http://localhost:5000/peringatan", formData, {
        headers: {
          "Content-type": "application/json",
        },
      });
      refreshPage();
      alert("Data Peringatan Dini Berhasil Ditambahkan");
    } catch (error) {
      console.log(error);
    }
  };

  //DELETE METHOD
  const deletePeringatan = async (peringatanId) => {
    await axios.delete(`http://localhost:5000/peringatan/${peringatanId}`);
    mutate("peringatan");
    alert("Data Peringatan Dini Berhasil Dihapus");
    refreshPage();
  };

  //RefreshPage
  function refreshPage() {
    window.location.reload(setTimeout(refreshPage, 4000));
  }

  // if (!data) return console.log("");
  return (
    <div>
      <div className="bg-blueGray-100 relative mx-auto my-5 flex max-w-full flex-col break-words rounded-md border-t-[6px] border-t-cyan-500 shadow-lg">
        <div className="mb-0 rounded-t border-b-[1px] border-b-gray-300 bg-white p-2">
          <div className="flex justify-between text-center">
            <h6 className="text-blueGray-700 pl-5 text-xl">Input Peringatan</h6>
          </div>
        </div>
        <div className="flex-auto bg-[#ffffffe5] px-4 py-10 pt-0 lg:px-6">
          <form onSubmit={createPeringatan}>
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
                <Button
                  type="submit"
                  className="border-[#008d4c] bg-[#00a65a] hover:bg-[#008d4c] active:bg-[#12613c]"
                >
                  Simpan
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-blueGray-100 relative mx-auto my-5 flex max-w-full flex-col break-words rounded-md border-t-[6px] border-t-cyan-500 shadow-lg">
        <div className="mb-0 rounded-t border-b-[1px] border-b-gray-300 bg-white p-2">
          <div className="flex justify-between text-center">
            <h6 className="text-blueGray-700 pl-5 text-xl">Data Peringatan</h6>
          </div>
        </div>
        <div className="flex-auto bg-[#ffffffe5] px-4 py-10 pt-0 lg:px-6">
          <Card className="my-5 h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="text-center font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="">
                {records.map((peringatan, index) => {
                  var newTanggal = new Date(
                    peringatan.tanggal
                  ).toLocaleDateString("en-GB");
                  return (
                    <tr
                      key={peringatan.id}
                      className="h-20 even:bg-blue-gray-50/50"
                    >
                      <td className="w-[50px] p-4 text-center">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {index + 1}
                        </Typography>
                      </td>
                      <td className=" w-[150px] p-4 text-center">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {newTanggal}
                        </Typography>
                      </td>
                      <td className=" w-[150px] p-4 text-center">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {peringatan.peringatan}
                        </Typography>
                      </td>
                      <td className="w-[150px] p-4 text-center">
                        <Link
                          to={`/dashboard/edit-peringatan/${peringatan.id}`}
                        >
                          <Tooltip content="Edit">
                            <IconButton variant="text">
                              <PencilIcon className="h-4 w-4 rounded text-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10" />
                            </IconButton>
                          </Tooltip>
                        </Link>

                        <Tooltip content="Delete">
                          <IconButton
                            onClick={() => deletePeringatan(peringatan.id)}
                            variant="text"
                          >
                            <TrashIcon className="h-4 w-4 rounded text-[#ea4335] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>
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

export default Peringatan;
