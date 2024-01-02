import React, { useState, useEffect } from "react";
import NavComp from "../components/navbar";
import Footer from "../components/footer";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Cardbuletin from "../components/cardbuletin";

export default function BulletinPage() {
  const [buletin, setBuletin] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 8;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = buletin.slice(firstIndex, lastIndex);
  const npage = Math.ceil(buletin.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  useEffect(() => {
    getBuletin();
  }, []);

  const getBuletin = async () => {
    try {
      const response = await axios.get("http://localhost:5000/buletin");
      setBuletin(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <>
      <NavComp />

      <div className="bg-buletinpage pb-5">
        <Container>
          <Row>
            <h1 className="fw-bold text-center pt-5">
              Buletin BMKG Banyuwangi
            </h1>
            {records.map((idx, i) => (
              <Col key={i}>
                <Cardbuletin
                  file={idx.url}
                  tittle={idx.name}
                  link={idx.url}
                  button={"Klik Untuk Lihat Buletin"}
                />
              </Col>
            ))}
          </Row>
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
