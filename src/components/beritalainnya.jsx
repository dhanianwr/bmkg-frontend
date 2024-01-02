import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

export const Beritalainnya = () => {
    const [berita, setBerita] = useState([]);

    useEffect(() => {
        getBeritaTerbaru();
      }, []);

    const getBeritaTerbaru = async () => {
        try {
          const response = await axios.get("http://localhost:5000/berita-terbaru");
          setBerita(response.data);
        } catch (error) {
          console.log("gagal mendapatkan data", error);
        }
      };
    
  return (
    <div>
        <Container>
          <h4 className="fw-bold pt-4">
            Berita Terbaru
            <hr />
          </h4>
          <Row>
            {berita.map((index, i) => (
              <Col key={i}>
                <div className="berita-lainnya">
                <Link to={`/berita-selengkapnya/${index.id}`}>
                  <img
                    className="img-berita-lainnya"
                    src={index.url}
                  />
                 
                    <p className="text-center fw-bold pt-3 judul-berita-lainnya">{index.judul}</p>
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
    </div>
  )
}
