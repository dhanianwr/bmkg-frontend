import React, { useEffect, useState }from "react";
import NavComp from "../components/navbar";
import Footer from "../components/footer";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";

export default function CuacahariiniPage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImage();
  }, []);

  const getImage = async () => {
    try {
      const response = await axios.get("http://localhost:5000/cuacahariini-single");
      setImages(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div>
      <NavComp />

      <div className="bg-cuacahariini pt-5 pb-5">
        <Container className="text-center">
          <Row>
            <div className="tittle-cuacahariini mb-3">
              <h1 className="fw-bold pt-1 text-light">
                Prakiraan Cuaca Hari Ini
              </h1>
            </div>
          </Row>
          <Row>
            {images.map((index, i) => (
              <Col key={i}>
                <img className="gambar-prakiraan" src={index.url} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
