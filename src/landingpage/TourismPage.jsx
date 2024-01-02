import React, { useEffect, useState } from "react";
import axios from "axios";
import NavComp from "../components/navbar";
import Footer from "../components/footer";
import { Col, Container, Row } from "react-bootstrap";

export default function TourismPage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImage();
  }, []);

  const getImage = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/tourism-single"
      );
      setImages(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  window.onload = setInterval(today, 1000);
  function today() {
    var d = new Date();
    var date = d.getDate();
    var year = d.getFullYear();
    var month = d.getMonth();
    var monthArr = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    month = monthArr[month];
    document.getElementById("date").innerHTML =
      date + " " + month + ", " + year;
  }
  return (
    <div>
      <NavComp />

      <div className="bg-haritanpahujan pt-5 pb-5">
        <Container className="text-center">
          <Row>
            <div className="tittle-cuacahariini mb-3">
              <h1 className="fw-bold pt-1 text-light">
                Weather Forecast For Banyuwangi Tourism
              </h1>
              <p className="text-light"> Valid <span id="date"></span> (Today)</p>
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
