import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import GambarFooter from "../assets/img/logo-bmkg-footer.jpg";
import playstore from "../assets/img/playstore.png";
import appstore from "../assets/img/appstore.png";
import { BsGlobe } from "react-icons/bs";

function Footer() {
  return (
    <div className="bg-footer">
      <Container className="text-light">
        <Row className="pt-5">
          <Col lg={3} md={6} className="footer1">
            <img src={GambarFooter} className="gambar-footer" />
            <h6 className="fw-bold">Kantor Banyuwangi</h6>
            <p>
              Jl. Jaksa Agung Suprapto | No.152 <br />
              Kab.Banyuwangi
              <br />
            </p>
            <hr />
            <h6 className="fw-bold">Call Center</h6>
            <p>(0333) 421888 / 410088</p>
            <hr />
            <h6 className="fw-bold">Email :</h6>
            <p>
              stamet.banyuwangi@bmkg.go.id
              <br />
              met_987@yahoo.com
            </p>
          </Col>

          <Col lg={3} md={6}>
            <div className="footer2">
              <h6 className="fw-bold">Tautan Terkait</h6>
              <a href="https://www.bmkg.go.id/" target="_blank">
                &gt; BMKG Pusat <br />
              </a>
              <a href="https://maritim.bmkg.go.id/" target="_blank">
                &gt; Cuaca Maritim
                <br />
              </a>
              <a href="https://aviation.bmkg.go.id/web/" target="_blank">
                &gt; Cuaca Penerbangan
                <br />
              </a>
              <a href="https://inatews.bmkg.go.id/" target="_blank">
                &gt; InaTEWS (Indonesia Tsunami Warning System)
                <br />
              </a>
              <a href="https://cews.bmkg.go.id/home.php" target="_blank">
                &gt; CEWS (CEWS Early Warning System)
                <br />
              </a>
              <a href="https://stmkg.ac.id/" target="_blank">
                &gt; Sekolah Meteorologi Klimatologi & Geofisika
                <br />
              </a>
              <a href="https://dataonline.bmkg.go.id/home" target="_blank">
                &gt; Data Online BMKG
                <br />
              </a>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="footer3">
              <h6 className="fw-bold">Aplikasi Mobile</h6>
              <p>Info BMKG - Cuaca Iklim, dan Gempa bumi Indonesia</p>
              <br />

              <p>
                Semua informasi mengenai Prakiraan Cuaca, Iklim, Kualitas Udara,
                dan Gempa bumi, yang terjadi di berbagai wilayah di Indonesia
                tercakup dalam satu aplikasi mobile
              </p>

              <p className="fw-bold mb-2">DONWLOAD SEKARANG !</p>
              <a
                href="https://play.google.com/store/apps/details?id=com.Info_BMKG&hl=id&gl=US&pli=1"
                target="_blank"
              >
                <img src={playstore} className="mb-2"></img>
              </a>
              <a
                href="https://apps.apple.com/id/app/info-bmkg/id1114372539?l=id"
                target="_blank"
              >
                <img src={appstore} className="mb-2"></img>
              </a>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="footer4">
              <h6 className="fw-bold">Social Media</h6>
              <div>
                <Button
                  href="https:linktr.ee/bmkg.bwi"
                  target="_blank"
                  className="bg-primary item-sosmed"
                >
                  <BsGlobe className="icon-sosmed" size="3.5rem" />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="copyright">
        <div className="item-copyright">
          <h6>@ 2023 Stasiun Meteorologi Kelas III Banyuwangi</h6>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
