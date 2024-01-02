import React from "react";
import NavComp from "../components/navbar";
import Footer from "../components/footer";
import { Col, Container, Row } from "react-bootstrap";

export default function TugasfungsiPage() {
  return (
    <>
      <NavComp />
      <div className="bg-tugasfungsi pt-5 pb-5">
        <Container>
          <Row>
            <Col className="tugasfungsi">
              <h3 className="text-center fw-bold text-light pt-1">
                Tugas dan Fungsi
              </h3>
              <p className="text-center text-light pb-3 mt-3">
                BMKG mempunyai status sebuah Lembaga Pemerintah Non Departemen
                (LPND), dipimpin oleh seorang Kepala Badan.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="tugas mt-2">
              <h4 className="fw-bold pt-3 pb-3 ">Tugas</h4>
              <p className=" mx-3">
                BMKG mempunyai tugas :<br /><br/>
                Melaksanakan tugas pemerintahan di bidang Meteorologi,
                Klimatologi, Kualitas Udara dan Geofisika sesuai dengan
                ketentuan perundang-undangan yang berlaku.
              </p>

              <h4 className="fw-bold pt-4 pb-3 ">Fungsi</h4>
              <p className=" mx-3">
                Dalam melaksanakan tugas sebagaimana dimaksud di atas, Badan
                Meteorologi Klimatologi dan Geofisika menyelenggarakan fungsi :
              </p>
                <li className="pt-3">
                  Perumusan kebijakan nasional dan kebijakan umum di bidang
                  meteorologi, klimatologi, dan geofisika
                </li>
                <li className="pt-1">
                  Perumusan kebijakan teknis di bidang meteorologi, klimatologi,
                  dan geofisika
                </li>
                <li className="pt-1">
                  Koordinasi kebijakan, perencanaan dan program di bidang
                  meteorologi, klimatologi, dan geofisika
                </li>
                <li className="pt-1">
                  Pelaksanaan, pembinaan dan pengendalian observasi, dan
                  pengolahan data dan informasi di bidang meteorologi,
                  klimatologi, dan geofisika
                </li>
                <li className="pt-1">
                  Pelayanan data dan informasi di bidang meteorologi,
                  klimatologi, dan geofisika
                </li>
                <li className="pt-1">
                  Penyampaian informasi kepada instansi dan pihak terkait serta
                  masyarakat berkenaan dengan perubahan iklim
                </li>
                <li className="pt-1">
                  Penyampaian informasi dan peringatan dini kepada instansi dan
                  pihak terkait serta masyarakat berkenaan dengan bencana karena
                  faktor meteorologi, klimatologi, dan geofisika
                </li>
                <li className="pt-1">
                  Pelaksanaan kerja sama internasional di bidang meteorologi,
                  klimatologi, dan geofisika
                </li>
                <li className="pt-1">
                  Pelaksanaan penelitian, pengkajian, dan pengembangan di bidang
                  meteorologi, klimatologi, dan geofisika
                </li>
                <li className="pt-1">
                  Pelaksanaan, pembinaan, dan pengendalian instrumentasi,
                  kalibrasi, dan jaringan komunikasi di bidang meteorologi,
                  klimatologi, dan geofisika
                </li>
                <li className="pt-1">
                  Koordinasi dan kerja sama instrumentasi, kalibrasi, dan
                  jaringan komunikasi di bidang meteorologi, klimatologi, dan
                  geofisika
                </li>
                <li className="pt-1">
                  Pelaksanaan pendidikan dan pelatihan keahlian dan manajemen
                  pemerintahan di bidang meteorologi, klimatologi, dan geofisika
                </li>
                <li className="pt-1">
                  Pelaksanaan pendidikan profesional di bidang meteorologi,
                  klimatologi, dan geofisika
                </li>
                <li className="pt-1">
                  Pelaksanaan manajemen data di bidang meteorologi, klimatologi,
                  dan geofisika
                </li>
                <li className="pt-1">
                  Pembinaan dan koordinasi pelaksanaan tugas administrasi di
                  lingkungan BMKG
                </li>
                <li className="pt-1">
                  Pengelolaan barang milik/kekayaan negara yang menjadi tanggung
                  jawab BMKG
                </li>
                <li className="pt-1">Pengawasan atas pelaksanaan tugas di lingkungan BMKG</li>
                <li className="pt-1">
                  Penyampaian laporan, saran, dan pertimbangan di bidang
                  meteorologi, klimatologi, dan geofisika
                </li>
              <p className=" mx-3 pt-4">
                Dalam melaksanakan tugas dan fungsinya BMKG dikoordinasikan oleh
                Menteri yang bertanggung jawab di bidang perhubungan.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="mt-3">
          <p>
            Sumber{" "}
            <a
              href="https://www.bmkg.go.id/profil/?p=tugas-fungsi"
              target="_blank"
            >
              BMKG Pusat
            </a>
          </p>
        </Container>
      </div>

      <Footer />
    </>
  );
}
