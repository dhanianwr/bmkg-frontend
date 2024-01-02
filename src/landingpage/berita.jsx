import React, { useState, useEffect } from "react";
import NavComp from "../components/navbar";
import Footer from "../components/footer";
import { Button, Col, Container, Row } from "react-bootstrap";
import DOMPurify from "dompurify";
import axios from "axios";

function BeritaPage() {
  const [berita, setBerita] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = berita.slice(firstIndex, lastIndex);
  const npage = Math.ceil(berita.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  useEffect(() => {
    getBerita();
  }, []);

  const getBerita = async () => {
    try {
      const response = await axios.get("http://localhost:5000/berita");
      setBerita(response.data);
    } catch (error) {
      console.log("gagal mendapatkan data", error);
    }
  };

  return (
    <>
      <NavComp />

      <div className="pb-5 bg-berita">
        <h1 className="fw-bold text-center pt-5 pb-5">BERITA</h1>
        <Container>
          {records.map((index, i) => {
            var newTanggal = new Date(index.tanggal).toLocaleDateString("id-ID", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            });
            return (
              <Row className="coloumn-berita pb-3" key={i}>
                <Col lg={4}>
                  <img src={index.url} id="img-berita" />
                </Col>
                <Col lg={8}>
                  <h5>
                    <div className="fw-bold pt-2">{index.judul}</div>
                    {newTanggal}
                  </h5>
                  <div
                    className="truncate-berita pt-2"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        index.isi.substring(0, 180) + "..."
                      ),
                    }}
                  ></div>
                  <a href={`/berita-selengkapnya/${index.id}`}>
                    <Button className="bg-primary mt-2">Selengkapnya</Button>
                  </a>
                </Col>
              </Row>
            );
          })}
        </Container>
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
      </div>

      <Footer />
    </>
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

export default BeritaPage;
