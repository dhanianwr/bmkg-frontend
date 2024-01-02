import React, { useEffect, useState } from "react";
import NavComp from "../components/navbar";
import { FaHouseFloodWater } from "react-icons/fa6";
import { MdSatelliteAlt } from "react-icons/md";
import { FaFireFlameCurved } from "react-icons/fa6";
import { RiWindyFill } from "react-icons/ri";
import { PiAirplaneFill } from "react-icons/pi";
import { TbRadar2 } from "react-icons/tb";
import { RiCompass3Fill } from "react-icons/ri";
import { RiCompassFill } from "react-icons/ri";
import { FaAnchor } from "react-icons/fa";
import { RiRadarFill } from "react-icons/ri";
import { LuWaves } from "react-icons/lu";
import { BsExclamationTriangleFill } from "react-icons/bs";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Footer from "../components/footer";
import logohero1 from "../assets/img/Logo-EVP.png";
import logohero2 from "../assets/img/Logo_BerAKHLAK.png";
import moto1 from "../assets/img/moto1.png";
import moto2 from "../assets/img/moto2.png";
import moto3 from "../assets/img/moto3.png";
import axios from "axios";
import Cardbuletin from "../components/cardbuletin";

function HomePage() {
  const [berita, setBerita] = useState([]);
  const [buletin, setBuletin] = useState([]);
  const [peringatan, setPeringatan] = useState([]);

  useEffect(() => {
    getBeritaTerbaru();
    getPeringatan();
    getBuletinTerbaru();
  }, []);

  const getBeritaTerbaru = async () => {
    try {
      const response = await axios.get("http://localhost:5000/berita-terbaru");
      setBerita(response.data);
    } catch (error) {
      console.log("gagal mendapatkan data", error);
    }
  };

  const getBuletinTerbaru = async () => {
    try {
      const response = await axios.get("http://localhost:5000/buletin-terbaru");
      setBuletin(response.data);
    } catch (error) {
      console.log("gagal mendapatkan data", error);
    }
  };

  const getPeringatan = async () => {
    try {
      const response = await axios.get("http://localhost:5000/peringatan-single");
      setPeringatan(response.data);
    } catch (error) {
      console.log("Gagal mendapatkan data", error);
    }
  };

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <>
      <NavComp />

      <div className="w-100" id="hero">
        <div className="logohero">
          <img className="logohero1" src={logohero1} />
          <img className="logohero2" src={logohero2} />
        </div>
        <div className="heroitem">
          <h3 className="fw-bold">STASIUN METEOROLOGI BANYUWANGI</h3>
        </div>
      </div>

      <div className="berita-cuaca">
        <Container className="reveal">
          <Row>
            <Col className="item-prakiraan" lg={5}>
              <h4 className="text-center text-light pt-2 fw-bold">
                Prakiraan Cuaca
              </h4>
              <div className="gelombang pb-2">
                <a
                  href="https://maritim.bmkg.go.id/prakiraan/satu_minggu_kedepan"
                  target="_blank"
                >
                  <h5 className="fw-bold d-flex align-items-center">
                    <FaHouseFloodWater
                      size="2.2rem"
                      color="white"
                      className="mx-4"
                    />
                    Prakiraan Tinggi Gelombang
                  </h5>
                </a>
              </div>

              <div className="satelit">
                <a href="https://satelit.bmkg.go.id/BMKG/" target="_blank">
                  <h5 className="fw-bold d-flex">
                    <MdSatelliteAlt
                      size="2.2rem"
                      color="white"
                      className="mx-4"
                    />
                    Satelit Citra
                  </h5>
                </a>
              </div>

              <div className="kebakaran">
                <a
                  href="https://www.bmkg.go.id/cuaca/kebakaran-hutan.bmkg?index=dc&wil=indonesia&day=obs"
                  target="_blank"
                >
                  <h5 className="fw-bold d-flex align-items-center">
                    <FaFireFlameCurved
                      size="2.2rem"
                      color="white"
                      className="mx-4"
                    />
                    Potensi Kebakaran Hutan
                  </h5>
                </a>
              </div>

              <div className="angin">
                <a
                  href="https://web.meteo.bmkg.go.id/id/prakiraan/angin-3000-ft"
                  target="_blank"
                >
                  <h5 className="fw-bold d-flex align-items-center">
                    <RiWindyFill size="2.2rem" color="white" className="mx-4" />
                    Prakiraan Angin
                  </h5>
                </a>
              </div>
            </Col>
            <Col lg={7}>
              <Carousel className="carousel-berita">
                {berita.map((beritas, i) => (
                  <Carousel.Item key={i}>
                    <img
                      className="gambar-berita"
                      src={beritas.url}
                      alt="slider berita"
                    />
                    <Carousel.Caption className="tulisan-carousel">
                      <a href={`berita-selengkapnya/${beritas.id}`}>
                        <h4>{beritas.judul}</h4>
                      </a>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
          <Row className="pt-3">
            <Col lg={2} md={3} xs={3} className="item-peringatan">
              <div className="peringatan-logo">
                <BsExclamationTriangleFill
                  size="3rem"
                  color="white"
                  className="tandaseru"
                />
                <h3 className="text-center">Peringatan Dini</h3>
              </div>
            </Col>
            <Col lg={10} md={9} xs={9} className="item-peringatan">
              {peringatan.map((index, i) => {
                var newTanggal = new Date(index.tanggal).toLocaleDateString(
                  "id-ID",
                  {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  }
                );
                return (
                  <div className="bg-peringatan" key={i}>
                    <p className="fw-bold">{newTanggal}</p>
                    <marquee className="peringatan-text">
                      <h1 className="fw-bold">{index.peringatan}</h1>
                    </marquee>
                  </div>
                );
              })}
            </Col>
          </Row>
        </Container>
      </div>

      <div className="bg-card-index">
        <Container className="reveal">
          <Row>
            <Col md={4} xs={6}>
              <div className="card-index">
                <a href="https://flightdocbwi.com/" target="_blank">
                  <PiAirplaneFill
                    className="icon-tafor"
                    size="6.5rem"
                    color="#164863"
                  />

                  <h2 className="fw-bold text-center">FLIGHT DOC</h2>
                </a>
              </div>
            </Col>

            <Col md={4} xs={6}>
              <div className="card-index">
                <a
                  href="https://web-aviation.bmkg.go.id/web/metar_speci.php"
                  target="_blank"
                >
                  <TbRadar2
                    className="icon-tafor"
                    size="6.5rem"
                    color="#164863"
                  />

                  <h2 className="fw-bold text-center">METAR SPECI</h2>
                </a>
              </div>
            </Col>

            <Col md={4} xs={6}>
              <div className="card-index">
                <a
                  href="http://202.90.199.132/aws-new/monitoring/3000000007"
                  target="_blank"
                >
                  <RiCompass3Fill
                    className="icon-tafor"
                    size="6.5rem"
                    color="#164863"
                  />

                  <h2 className="fw-bold text-center">AWS Maritim Ketapang</h2>
                </a>
              </div>
            </Col>

            <Col md={4} xs={6}>
              <div className="card-index">
                <a
                  href="http://202.90.199.132/aws-new/monitoring/5000000031"
                  target="_blank"
                >
                  <RiCompassFill
                    className="icon-tafor"
                    size="6.5rem"
                    color="#164863"
                  />

                  <h2 className="fw-bold text-center">AWS Digi Banyuwangi</h2>
                </a>
              </div>
            </Col>
            <Col md={4} xs={6}>
              <div className="card-index">
                <a
                  href="http://202.90.199.132/aws-new/monitoring/3000000046"
                  target="_blank"
                >
                  <RiCompassFill
                    className="icon-tafor"
                    size="6.5rem"
                    color="#164863"
                  />
                  <h2 className="fw-bold text-center">AWS Maritim Gilimanuk</h2>
                </a>
              </div>
            </Col>
            <Col md={4} xs={6}>
              <div className="card-index">
                <a href="http://maritim.bmkg.go.id/radar" target="_blank">
                  <RiRadarFill
                    className="icon-tafor"
                    size="6.5rem"
                    color="#164863"
                  />
                  <h2 className="fw-bold text-center">Radar Maritim</h2>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="bg-buletin">
        <Container className="reveal">
          <Row>
            {buletin.map((idx, i) => (
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
      </div>

      <div className="bg-moto">
        <Container className="pt-5">
          <Carousel md={12} className="reveal">
            <Carousel.Item>
              <img src={moto1} alt="moto"  />
            </Carousel.Item>
            <Carousel.Item>
              <img src={moto2} alt="moto"  />
            </Carousel.Item>
            <Carousel.Item>
              <img src={moto3} alt="moto"  />
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>

     

      <Footer />
    </>
  );
}

export default HomePage;
