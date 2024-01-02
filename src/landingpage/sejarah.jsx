import React from "react";
import NavComp from "../components/navbar";
import Footer from "../components/footer";
import { Container } from "react-bootstrap";

function SejarahPage() {
  return (
    <div className="bg-sejarah">
      <NavComp />
      <Container className="consejarah pb-5 pt-5">
        <div className="bg-tittle-sejarah mb-3">
          <h1 className="fw-bold text-center">SEJARAH</h1>
        </div>
        <div className="sejarah-item pt-4">
          <p>
            Sejarah pengamatan meteorologi dan geofisika di Indonesia dimulai
            pada tahun 1841 diawali dengan pengamatan yang dilakukan secara
            perorangan oleh Dr. Onnen, Kepala Rumah Sakit di Bogor. Tahun demi
            tahun kegiatannya berkembang sesuai dengan semakin diperlukannya
            data hasil pengamatan cuaca dan geofisika
          </p>
          <br/>
          <p>
            Pada tahun 1866, kegiatan pengamatan perorangan tersebut oleh
            Pemerintah Hindia Belanda diresmikan menjadi instansi pemerintah
            dengan nama Magnetisch en Meteorologisch Observatorium atau
            Observatorium Magnetik dan Meteorologi dipimpin oleh Dr. Bergsma.
          </p>
          <br/>
          <p>
            Pada tahun 1879 dibangun jaringan penakar hujan sebanyak 74 stasiun
            pengamatan di Jawa. Pada tahun 1902 pengamatan medan magnet bumi
            dipindahkan dari Jakarta ke Bogor. Pengamatan gempa bumi dimulai
            pada tahun 1908 dengan pemasangan komponen horisontal seismograf
            Wiechert di Jakarta, sedangkan pemasangan komponen vertikal
            dilaksanakan pada tahun 1928.
          </p>
          <br/>
          <p>
            Pada tahun 1912 dilakukan reorganisasi pengamatan meteorologi dengan
            menambah jaringan sekunder. Sedangkan jasa meteorologi mulai
            digunakan untuk penerangan pada tahun 1930. Pada masa pendudukan
            Jepang antara tahun 1942 sampai dengan 1945, nama instansi
            meteorologi dan geofisika diganti menjadi Kisho Kauso Kusho.
          </p>
          <br/>
          <p>
            Setelah proklamasi kemerdekaan Indonesia pada tahun 1945, instansi
            tersebut dipecah menjadi dua: Di Yogyakarta dibentuk Biro
            Meteorologi yang berada di lingkungan Markas Tertinggi Tentara
            Rakyat Indonesia khusus untuk melayani kepentingan Angkatan Udara.
            Di Jakarta dibentuk Jawatan Meteorologi dan Geofisika, dibawah
            Kementerian Pekerjaan Umum dan Tenaga.
          </p>
          <br/>
          <p>
            Pada tanggal 21 Juli 1947 Jawatan Meteorologi dan Geofisika diambil
            alih oleh Pemerintah Belanda dan namanya diganti menjadi
            Meteorologisch en Geofisiche Dienst. Sementara itu, ada juga Jawatan
            Meteorologi dan Geofisika yang dipertahankan oleh Pemerintah
            Republik Indonesia, kedudukan instansi tersebut di Jl. Gondangdia,
            Jakarta.
          </p>
          <br/>
          <p>
            Pada tahun 1949, setelah penyerahan kedaulatan negara Republik
            Indonesia dari Belanda, Meteorologisch en Geofisiche Dienst diubah
            menjadi Jawatan Meteorologi dan Geofisika dibawah Departemen
            Perhubungan dan Pekerjaan Umum. Selanjutnya, pada tahun 1950
            Indonesia secara resmi masuk sebagai anggota Organisasi Meteorologi
            Dunia (World Meteorological Organization atau WMO) dan Kepala
            Jawatan Meteorologi dan Geofisika menjadi Permanent Representative
            of Indonesia with WMO.
          </p>
          <br/>
          <p>
            Pada tahun 1955 Jawatan Meteorologi dan Geofisika diubah namanya
            menjadi Lembaga Meteorologi dan Geofisika di bawah Departemen
            Perhubungan, dan pada tahun 1960 namanya dikembalikan menjadi
            Jawatan Meteorologi dan Geofisika di bawah Departemen Perhubungan
            Udara.
          </p>
          <br/>
          <p>
            Pada tahun 1965, namanya diubah menjadi Direktorat Meteorologi dan
            Geofisika, kedudukannya tetap di bawah Departemen Perhubungan
            Udara.Pada tahun 1972, Direktorat Meteorologi dan Geofisika diganti
            namanya menjadi Pusat Meteorologi dan Geofisika, suatu instansi
            setingkat eselon II di bawah Departemen Perhubungan, dan pada tahun
            1980 statusnya dinaikkan menjadi suatu instansi setingkat eselon I
            dengan nama Badan Meteorologi dan Geofisika, dengan kedudukan tetap
            berada di bawah Departemen Perhubungan.Pada tahun 2002, dengan
            keputusan Presiden RI Nomor 46 dan 48 tahun 2002, struktur
            organisasinya diubah menjadi Lembaga Pemerintah Non Departemen
            (LPND) dengan nama tetap Badan Meteorologi dan Geofisika.
          </p>
          <br/>
          <p>
            Terakhir, melalui Peraturan Presiden Nomor 61 Tahun 2008, Badan
            Meteorologi dan Geofisika berganti nama menjadi Badan Meteorologi,
            Klimatologi, dan Geofisika (BMKG) dengan status tetap sebagai
            Lembaga Pemerintah Non Departemen.Pada tanggal 1 Oktober 2009
            Undang-Undang Republik Indonesia Nomor 31 Tahun 2009 tentang
            Meteorologi, Klimatologi dan Geofisika disahkan oleh Presiden
            Republik Indonesia, Susilo Bambang Yudhoyono. (unduh Penjelasan UU
            RI Nomor 31 Tahun 2009)
          </p>
        </div>
      </Container>
      
      <Container className="mb-5">
        <p>
            Sumber :{" "}
            <a href="https://www.bmkg.go.id/profil/?p=sejarah" target="_blank">BMKG Pusat</a>
          </p>
      </Container>

      <Footer />
    </div>
  );
}

export default SejarahPage;
