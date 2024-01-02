import React from "react";
import axios from "axios";
import NavComp from "../components/navbar";
import Footer from "../components/footer";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function KritikSaran() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [nohp, setNohp] = useState("");
  const [kritik, setKritik] = useState("");
  const [saran, setSaran] = useState("");
  const [captchaisDone, setCaptchaisDone] = useState(false);
  const key = "6LcdVz4pAAAAAJFfkPRxDN6Uw_910ZhmeCHpHxHM";

  function refreshPage() {
    window.location.reload(setTimeout(refreshPage, 4000));
  }

  const createKritik = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("email", email);
    formData.append("nohp", nohp);
    formData.append("kritik", kritik);
    formData.append("saran", saran);

    try {
      await axios.post("http://localhost:5000/kritik-saran", formData, {
        headers: {
          "Content-type": "application/json",
        },
      });
      refreshPage();
      myAllert();
    } catch (error) {
      console.log(error);
    }
  };

  function myAllert() {
    alert("Terimakasih Sudah Mengisi Kritik dan Saran");
  }

  function onChange() {
    setCaptchaisDone(true);
  }

  return (
    <>
      <NavComp />

      <div className="bg-kritik pt-5 pb-5">
        <Container>
          <Row>
            <h2 className="fw-bold text-center">KRITIK dan SARAN</h2>
            <Col>
              <Form onSubmit={createKritik}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Nama</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Tuliskan Nama Anda"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    required
                    placeholder="Tuliskan email Anda"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>No. Handphone</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Tuliskan Nomor Handphone Anda"
                    value={nohp}
                    onChange={(e) => setNohp(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Kritik</Form.Label>
                  <Form.Control
                    as="textarea"
                    required
                    placeholder="Tuliskan Kritik Anda Terhadap BMKG Kabupaten Banyuwangi"
                    rows={3}
                    value={kritik}
                    onChange={(e) => setKritik(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Saran</Form.Label>
                  <Form.Control
                    as="textarea"
                    required
                    placeholder="Tuliskan Saran Anda Terhadap BMKG Kabupaten Banyuwangi"
                    rows={3}
                    value={saran}
                    onChange={(e) => setSaran(e.target.value)}
                  />
                </Form.Group>

                <ReCAPTCHA
                  data-type="image"
                  sitekey={key}
                  onChange={onChange}
                />

                {captchaisDone && (
                  <Button
                    variant="danger"
                    className="bg-danger mt-2"
                    type="submit"
                  >
                    Submit
                  </Button>
                )}
              </Form>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
}
