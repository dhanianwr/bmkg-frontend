import React, { useEffect, useState } from "react";
import NavComp from "../components/navbar";
import Footer from "../components/footer";
import { Container, Row, Col } from "react-bootstrap";
import DOMPurify from "dompurify";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Beritalengkap() {
  const [judul, setJudul] = useState([]);
  const [isi, setIsi] = useState([]);
  const [tanggal, setTanggal] = useState([]);
  const [url, setUrl] = useState([]);
  const { id } = useParams();
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    getBeritaById();
    getBeritaTerbaru();
  }, []);

  const getBeritaById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/berita/${id}`);
      setJudul(response.data.judul);
      setIsi(response.data.isi);
      setTanggal(response.data.tanggal);
      setUrl(response.data.url);
      console.log(response);
    } catch (error) {
      console.log("gagal mendapatkan data", error);
    }
  };

  const getBeritaTerbaru = async () => {
    try {
      const response = await axios.get("http://localhost:5000/berita-terbaru");
      setBerita(response.data);
    } catch (error) {
      console.log("gagal mendapatkan data", error);
    }
  };

  var newTanggal = new Date(tanggal).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div>
      <NavComp />

      <div className="bg-beritalengkap pb-5">
        <Container>
          <h3 className="fw-bold text-center judul-selengkapnya pb-1 pt-5">
            {judul}
          </h3>
          <p className="text-center pb-4">{newTanggal} By Admin</p>
          <img className="img-berita-selengkapnya" src={url} />
          <div
            className="text-berita-selengkapnya pt-3"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(isi),
            }}
          ></div>
        </Container>

        <Container>
          <h4 className="fw-bold pt-5">
            Berita Terbaru
            <hr />
          </h4>
          <Row>
            {berita.map((index, i) => (
              <Col key={i}>
                <div className="berita-lainnya">
                  <img className="img-berita-lainnya" src={index.url} />
                  <p className="text-center fw-bold pt-3 judul-berita-lainnya">
                    <a href={`/berita-selengkapnya/${index.id}`}>
                      {index.judul}
                    </a>
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  );
}
