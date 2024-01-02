import React from "react";
import NavComp from "../components/navbar";
import Footer from "../components/footer";
import { Col, Container, Row } from "react-bootstrap";
import logobmkg from "../assets/logo-bmkg-no-text.png";
import { Bs1CircleFill } from "react-icons/bs";
import { Bs2CircleFill } from "react-icons/bs";
import { Bs3CircleFill } from "react-icons/bs";
import { Bs4CircleFill } from "react-icons/bs";
import { Bs5CircleFill } from "react-icons/bs";
import { Bs6CircleFill } from "react-icons/bs";

export default function PelayananData() {
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

      <div className="bg-pelayanan pt-5 pb-5">
        <div className="title-pelayanan">
          <img src={logobmkg} />
          <h3 className="fw-bold">
            STASIUN METEOROLOGI
            <br />
            KELAS III BANYUWANGI
          </h3>
        </div>
        <h4 className="fw-bold text-center mt-4">
          PROSEDUR LAYANAN DATA & INFORMASI
        </h4>

        <Container className="con-item-pelayanan-color mt-5 reveal">
          <Bs1CircleFill size="4.5rem" className="icon-left" />
          <h4 className="fw-bold">
            Pemohon datang ke loket pelayanan membawa surat <br />
            permohonan dan identitas diri
          </h4>
        </Container>

        <Container className="con-item-pelayanan reveal">
          <Bs2CircleFill size="4.5rem" className="icon-right" />
          <h4 className="fw-bold">
            Pemohon menyerahkan surat permohonan dan <br />
            kartu identitas serta mengisi formulir permohonan
          </h4>
        </Container>

        <Container className="con-item-pelayanan-color mt-5 reveal">
          <Bs3CircleFill size="4.5rem" className="icon-left" />
          <h4 className="fw-bold">
            Petugas pelayanan menyiapkan informasi yang <br />
            dibutuhkan serta invoice pembayaran PNBP <br />
            kepada pemohon
          </h4>
        </Container>

        <Container className="con-item-pelayanan reveal">
          <Bs4CircleFill size="4.5rem" className="icon-right" />
          <h4 className="fw-bold">
            Pemohon melakukan pembayaran PNBP sesuai invoice <br />
            melalui ATM/Bank/Pos dan menyertakan butki <br />
            pembayaran tersebut kepada petugas pelayanan
          </h4>
        </Container>

        <Container className="con-item-pelayanan-color mt-5 pt-3 reveal">
          <Bs5CircleFill size="4.5rem" className="icon-left" />
          <h4 className="fw-bold">Pemohon menerima Data dan Informasi</h4>
        </Container>

        <Container className="con-item-pelayanan mb-5 reveal">
          <Bs6CircleFill size="4.5rem" className="icon-right" />
          <h4 className="fw-bold">
            Pemohon mengisi survey Index Kepuasan Masyarakat <br />
            (IKM)
          </h4>
        </Container>
      </div>

      <Footer />
    </>
  );
}
