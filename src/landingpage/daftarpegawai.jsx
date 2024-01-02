import React, { useEffect, useState } from "react";
import { Container, Table, Col, Row } from "react-bootstrap";
import NavComp from "../components/navbar";
import Footer from "../components/footer";
import axios from "axios";

export default function DaftarpegawaiPage() {
  const [pegawai, setPegawai] = useState([]);

  useEffect(() => {
    getPegawai();
  }, []);

  const getPegawai = async () => {
    try {
      const response = await axios.get("http://localhost:5000/pegawai");
      setPegawai(response.data);
    } catch (error) {
      Console.log("Error mendapatkan data");
    }
  };

  return (
    <div>
      <NavComp />

      <div className="bg-pegawai pt-5 pb-5">
        <Container className="bg-tablepegawai">
          <Row>
            <Col>
              <div className="tittle-pegawai mb-2">
                <h3 className="fw-bold text-center pt-3 text-light">
                  Daftar Pegawai
                </h3>
                <h3 className="text-center pb-4 text-light">
                  Stasiun Meteorologi Banyuwangi
                </h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="tablepegawai">
              <div className="pb-2">
                <Table hover bordered responsive="md">
                  <thead className="text-center bg-info">
                    <tr>
                      <th>Nama</th>
                      <th>NIP</th>
                      <th>Pangkat/Gol</th>
                      <th>Jabatan</th>
                    </tr>
                  </thead>
                  {pegawai.map((index, i) => (
                    <tbody className="text-center" key={i}>
                      <tr>
                        <td>{index.nama}</td>
                        <td>{index.nip}</td>
                        <td>{index.pangkat}</td>
                        <td>{index.jabatan}</td>
                      </tr>
                    </tbody>
                  ))}
                </Table>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  );
}
