import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { mutate } from "swr";
import {
  Button,
  Card,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Row } from "react-bootstrap";

const TABLE_HEAD = ["ID", "Dibuat", "Di Update", "Title", "Buletin", "Action"];

export function Buletin() {
  const [name, setName] = useState("");
  const [buletin, setBuletin] = useState("");
  const [databuletin, setDatabuletin] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 12;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = databuletin.slice(firstIndex, lastIndex);
  const npage = Math.ceil(databuletin.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);


  useEffect(() => {
    fetcher();
  }, []);

  //GET METHOD
  const fetcher = async () => {
    const response = await axios.get("http://localhost:5000/buletin");
    setDatabuletin(response.data)
  };
  // const { data } = useSWR("buletin", fetcher);

  //POST METHOD
  const createBuletin = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("buletin", buletin);
    try {
      await axios.post("http://localhost:5000/buletin", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      refreshPage()
      alert("Buletin Berhasil Ditambah")
    } catch (error) {
      console.log(error);
    }
  };

  //DELETE METHOD
  const deleteBuletin = async (buletinId) => {
    await axios.delete(`http://localhost:5000/buletin/${buletinId}`);
    mutate("buletin");
    alert("Data Buletin Berhasil Dihapus");
    refreshPage()
  };

  //EVENT File
  const loadFile = (e) => {
    const file = e.target.files[0];
    const fileExtension = file.name.split('.').pop();
    const maxFileSize = 10 * 1024 * 1024;
    if (fileExtension.toLowerCase() !== 'pdf') {
        alert('File Harus Memiliki Format PDF');
        return;
    }
    if (file.size > maxFileSize) {
      alert('Ukuran File Harus Dibawah 10 MB');
      return;
  }
    setBuletin(file);
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
            <h6 className="text-blueGray-700 pl-5 text-xl">Input Buletin</h6>
          </div>
        </div>
        <div className="flex-auto bg-[#ffffffe5] px-4 py-10 pt-0 lg:px-6">
          <form onSubmit={createBuletin}>
            <div className="mt-6 flex flex-wrap">
              <div className="w-full px-4">
                <div className="relative mb-3 w-full lg:w-4/5">
                  <label
                    className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                    htmlFor="grid-password"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow ring-cyan-600 transition-all duration-150 ease-linear focus:outline-none focus:ring-2"
                    placeholder="Title"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-4/5">
                <div className="relative mb-3 w-full">
                  <label
                    className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                    htmlFor="grid-password"
                  >
                    Buletin
                  </label>
                  <input
                    className="w-full cursor-pointer rounded-l-lg rounded-r border-0 bg-white text-sm shadow ring-cyan-600 transition-all duration-150 ease-linear focus:outline-none focus:ring-2"
                    type="file"
                    name="filename"
                    onChange={loadFile}
                  />
                  <p
                    className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                    id="file_input_help"
                  >
                    ** Size PDF maksimal 10Mb
                  </p>
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
            <h6 className="text-blueGray-700 pl-5 text-xl">Data Buletin</h6>
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
              <tbody>
                {records.map((buletin, index) => {
                  var TanggalBikin = new Date(buletin.createdAt).toLocaleDateString(
                    "id-ID",
                    {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit"
                    },
                  );
                  var TanggalUpdate = new Date(buletin.updatedAt).toLocaleDateString(
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
                    <tr
                      key={buletin.id}
                      className="text-center even:bg-blue-gray-50/50 "
                    >
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {index + 1}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {TanggalBikin}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {TanggalUpdate}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {buletin.name}
                        </Typography>
                      </td>
                      <td className="flex items-center justify-center p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {buletin.buletin}
                        </Typography>
                      </td>
                      <td className="w-[150px] p-4 text-center">
                        <Link to={`/dashboard/editBuletin/${buletin.id}`}>
                          <Tooltip content="Edit">
                            <IconButton variant="text">
                              <PencilIcon className="h-4 w-4 rounded text-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10" />
                            </IconButton>
                          </Tooltip>
                        </Link>

                        <Tooltip content="Delete">
                          <IconButton
                            onClick={() => deleteBuletin(buletin.id)}
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

export default Buletin;
