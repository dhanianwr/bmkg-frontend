import React from "react";
import NavComp from "../components/navbar";
import Footer from "../components/footer";
import { Col, Container, Row } from "react-bootstrap";

export default function VisimisiPage() {
  return (
    <div>
      <NavComp />

      <div className="bg-visimisi">
        <Container className="visimisi-item pt-5 pb-4">
          <Row>
            <Col className="visimisi mx-1">
              <h3 className="fw-bold text-center pt-2">Visi dan Misi</h3>
              <p className=" pt-3 pb-4">
                Dalam rangka mendukung dan mengemban tugas pokok dan fungsi
                serta memperhatikan kewenangan BMKG agar lebih efektif dan
                efisien, maka diperlukan aparatur yang profesional, bertanggung
                jawab dan berwibawa serta bebas dari Korupsi, Kolusi, dan
                Nepotisme (KKN), disamping itu harus dapat menjunjung tinggi
                kedisiplinan, kejujuran dan kebenaran guna ikut serta memberikan
                pelayanan informasi yang cepat, tepat dan akurat. Oleh karena
                itu kebijakan yang akan dilakukan BMKG Tahun 2010-2014 adalah
                mengacu pada Visi, Misi, dan Tujuan BMKG yang telah ditetapkan.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="visi mt-4 pt-3 mx-1">
              <h3 className="fw-bold text-center ">Visi</h3>
              <p className=" pt-3">
                Mewujudkan BMKG yang handal, tanggap dan mampu dalam rangka
                mendukung keselamatan masyarakat serta keberhasilan pembangunan
                nasional, dan berperan aktif di tingkat Internasional.
                Terminologi di dalam visi tersebut dapat dijelaskan sebagai
                berikut
              </p>
              <br/>
              <p className="">
                Pelayanan informasi meteorologi, klimatologi, kualitas udara,
                dan geofisika yang handal ialah pelayanan BMKG terhadap
                penyajian data, informasi pelayanan jasa meteorologi,
                klimatologi, kualitas udara, dan geofisika yang akurat, tepat
                sasaran, tepat guna, cepat, lengkap, dan dapat
                dipertanggungjawabkan
              </p>
              <br/>
              <p className="">
                Tanggap dan mampu dimaksudkan BMKG dapat menangkap dan
                merumuskan kebutuhan stakeholder akan data, informasi, dan jasa
                meteorologi, klimatologi, kualitas udara, dan geofisika serta
                mampu memberikan pelayanan sesuai dengan kebutuhan pengguna jasa
              </p>
            </Col>
            <Col className="misi mt-4 pt-3 mx-1">
              <h3 className="fw-bold text-center ">Misi</h3>
              <p className=" pt-3">
                Dalam rangka mewujudkan Visi BMKG, maka diperlukan visi yang
                jelas yaitu berupa langkah-langkah BMKG untuk mewujudkan Misi
                yang telah ditetapkan yaitu : Mengamati dan memahami fenomena
                meteorologi, klimatologi, kualitas udara dan geofisika.
                Menyediakan data, informasi dan jasa meteorologi, klimatologi,
                kualitas udara dan geofisika yang handal dan terpercaya.
                Mengkoordinasikan dan memfasilitasi kegiatan di bidang
                meteorologi, klimatologi , kualitas udara dan geofisika.
                Berpartisipasi aktif dalam kegiatan internasional di Bidang
                meteorologi, klimatologi , kualitas udara dan geofisika.
              </p>
              <br/>
              <p className="">
                Secara lebih rinci, maksud dari pernyataan misi di atas adalah
                sebagai berikut :{" "}
              </p>
              <br/>
              <li className="">
                Mengamati dan memahami fenomena meteorologi, klimatologi,
                kualitas udara, dan geofisika artinya BMKG melaksanakan
                operasional pengamatan dan pengumpulan data secara teratur,
                lengkap dan akurat guna dipakai untuk mengenali dan memahami
                karakteristik unsur-unsur meteorologi, klimatologi, kualitas
                udara, dan geofisika guna membuat prakiraan dan informasi yang
                akurat
              </li>
              <br/>
              <li className="">
                Menyediakan data, informasi dan jasa meteorologi, klimatologi,
                kualitas udara, dan geofisika kepada para pengguna sesuai dengan
                kebutuhan dan keinginan mereka dengan tingkat akurasi tinggi dan
                tepat waktu
              </li>
              <br/>
              <li className="">
                Mengkoordinasi dan Memfasilitasi kegiatan sesuai dengan
                kewenangan BMKG, maka BMKG wajib mengawasi pelaksanaan
                operasional, memberi pedoman teknis, serta berwenang untuk
                mengkalibrasi peralatan meteorologi, klimatologi, kualitas
                udara, dan geofisika sesuai dengan peraturan yang berlaku
              </li>
              <br/>
              <li className=" pb-4">
                Berpartisipasi aktif dalam kegiatan internasional artinya BMKG
                dalam melaksanakan kegiatan secara operasional selalu mengacu
                pada ketentuan internasional mengingat bahwa fenomena
                meteorologi, klimatologi, kualitas udara, dan geofisika tidak
                terbatas dan tidak terkait pada batas batas wilayah suatu negara
                manapun.
              </li>
            </Col>
          </Row>
          <Row>
            <Col className="pt-4">
              <p>
                Sumber :{" "}
                <a href="https://www.bmkg.go.id/profil/?p=visi-misi" target="_blank">
                  BMKG Pusat
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  );
}
