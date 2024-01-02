import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { mutate } from "swr";
import DOMPurify from "dompurify";
import {
  Button,
  Card,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import moment from "moment";
import DatePicker from "react-datepicker";
import { Editor } from "@tinymce/tinymce-react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Row } from "react-bootstrap";

const TABLE_HEAD = ["ID", "Dibuat", "Di Update", "Judul", "Tanggal", "Isi", "Gambar", "Action", ];

export function Berita() {
  const [tanggal, setTanggal] = useState(new Date());
  const [judul, setJudul] = useState("");
  const [content, setContent] = useState("");
  const [gambar, setGambar] = useState("");
  const [preview, setPreview] = useState("");
  const [berita, setBerita] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 20;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = berita.slice(firstIndex, lastIndex);
  const npage = Math.ceil(berita.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  useEffect(() => {
    fetcher();
  }, []);

  const fetcher = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/berita"
      );
      setBerita(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  //POST METHOD
    const createBerita = async (e) => {
    let fixDate = tanggal.toISOString();
    e.preventDefault();
    const formData = new FormData();
    formData.append("tanggal", fixDate);
    formData.append("judul", judul);
    formData.append("isi", content);
    formData.append("gambar", gambar);
    try {
      await axios.post("http://localhost:5000/berita", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      refreshPage()
      alert("Berita Berhasil Ditambahkan")
    } catch (error) {
      console.log(error);
    }
  };

  //DELETE METHOD
  const deleteBerita = async (beritaId) => {
    await axios.delete(`http://localhost:5000/berita/${beritaId}`);
    mutate("berita");
    alert("Berita Berhasil Dihapus");
    refreshPage()
  };

  //TANGGAL EVENT
  let newTanggal = moment(tanggal).format("DD-MM-YYYY");

  // TinyMCE EVENT
  const handleEditorChange = (content, editor) => {
    setContent(content);
  };

  //IMAGE EVENT
  const loadImage = (e) => {
    const image = e.target.files[0];
    const fileExtension = image.name.split(".").pop();
    if (
      fileExtension.toLowerCase() !== "jpg" &&
      fileExtension.toLowerCase() !== "jpeg" &&
      fileExtension.toLowerCase() !== "png"
    ) {
      alert("File Harus Memiliki Format JPG, PNG, Atau JPEG");
      return;
    }
    setGambar(image);
    setPreview(URL.createObjectURL(image));
  };

  //RefreshPage
  function refreshPage() {
    window.location.reload(setTimeout(refreshPage, 4000))
  }

//  if (!data) return console.log("");
  return (
    <div>
      <div className="bg-blueGray-100 relative mx-auto my-5 flex max-w-full flex-col break-words rounded-md border-t-[6px] border-t-cyan-500 shadow-lg">
        <div className="mb-0 rounded-t border-b-[1px] border-b-gray-300 bg-white p-2">
          <div className="flex justify-between text-center">
            <h6 className="text-blueGray-700 text-xl"> Input Berita</h6>
          </div>
        </div>
        <div className="flex-auto bg-[#ffffffe5] px-4 py-10 pt-0 lg:px-6">
          <form onSubmit={createBerita}>
            <div className="mt-6 flex flex-wrap">
              <div className="w-full px-4">
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
              <div className="w-full px-4">
                <div className="relative mb-3 w-full">
                  <label
                    className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                    htmlFor="grid-password"
                  >
                    Judul Berita
                  </label>
                  <input
                    type="text"
                    className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow ring-cyan-600 transition-all duration-150 ease-linear focus:outline-none focus:ring-2"
                    value={judul}
                    onChange={(e) => setJudul(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full px-4">
                <div className="relative mb-3 w-full">
                  <label
                    className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                    htmlFor="grid-password"
                  >
                    Isi Berita
                  </label>
                  <Editor
                    apiKey="l2f0db8ozt5uws06llfzcgbidwjl5snn5pmtqnp683uuozgo"
                    placeholder="Masukkan isi Berita"
                    onEditorChange={handleEditorChange}
                    init={{
                      menubar: false,
                      plugins:
                        "advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount",
                      toolbar:
                        "undo redo | blocks | bold italic underline | align | checklist numlist bullist indent outdent",
                    }}
                  />
                </div>
              </div>
              <div className="w-full px-4">
                <div className="relative mb-3 w-full">
                  <label
                    className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                    htmlFor="grid-password"
                  >
                    Gambar
                  </label>
                  <input
                    className="w-full cursor-pointer rounded-l-lg rounded-r border-0 bg-white text-sm shadow ring-cyan-600 transition-all duration-150 ease-linear focus:outline-none focus:ring-2"
                    type="file"
                    name="filename"
                    onChange={loadImage}
                  />
                  <p
                    className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                    id="file_input_help"
                  >
                    ** Size Gambar Maksimal 2 Mb
                  </p>
                  {preview ? (
                    <img
                      src={preview}
                      alt="preview Image"
                      className="h-48 w-48 object-cover pt-2"
                    />
                  ) : (
                    ""
                  )}
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
            <h6 className="text-blueGray-700 pl-5 text-xl">Data Berita</h6>
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
                {records.map((berita, index) => {
                  var newTanggal = new Date(berita.tanggal).toLocaleDateString(
                    "id-ID",
                    {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    }
                  );
                  var TanggalBikin = new Date(berita.createdAt).toLocaleDateString(
                    "id-ID",
                    {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit"
                    },
                  );
                  var TanggalUpdate = new Date(berita.updatedAt).toLocaleDateString(
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
                      key={berita.id}
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
                      <td className="w-[200px] p-4 text-center">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {berita.judul}
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
                      <td className="w-[350px] p-4">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(berita.isi.substring(0, 100) + '...'),
                          }}
                        ></div>
                      </td>
                      <td className="flex items-center justify-center p-4">
                        <img
                          src={berita.url}
                          alt={berita.title}
                          className="h-32 w-32 object-cover"
                        />
                      </td>
                      <td className="w-[150px] p-4 text-center">
                        <Link to={`/dashboard/editBerita/${berita.id}`}>
                          <Tooltip content="Edit">
                            <IconButton variant="text">
                              <PencilIcon className="h-4 w-4 rounded text-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10" />
                            </IconButton>
                          </Tooltip>
                        </Link>

                        <Tooltip content="Delete">
                          <IconButton
                            onClick={() => deleteBerita(berita.id)}
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

export default Berita;
