import axios from "axios";
import { useState, useEffect } from "react";
import NavComp from "../components/navbar";
import Footer from "../components/footer";
import GaleriComp from "../components/galeriComp";
import { Col, Container, Row } from "react-bootstrap";

export default function GalleriPage() {
  const [images, setImage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 12;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = images.slice(firstIndex, lastIndex);
  const npage = Math.ceil(images.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  useEffect(() => {
    getImage();
  }, []);

  const getImage = async () => {
    try {
      const response = await axios.get("http://localhost:5000/galeri");
      setImage(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };


  return (
    <>
      <NavComp />

      <div className="bg-galeri">
        <Container className="pb-5 pt-4">
          <h1 className="fw-bold pt-1 pb-4 text-center">
            GALERI BMKG Banyunwangi
          </h1>
          <Row>
            {records.map((image, index) => (
              <Col xs={3} md={3} className="pb-3" key={index}>
                <GaleriComp key={index} img={image.url} caption={image.name} />
              </Col>
            ))}
          </Row>
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
        </Container>
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
