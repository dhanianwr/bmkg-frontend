import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/app.css";
import "./css/index.css";
import HomePage from "./landingpage/home";
import SejarahPage from "./landingpage/sejarah";
import VisimisiPage from "./landingpage/visimisi";
import TugasfungsiPage from "./landingpage/tugasfungsi";
import DaftarpegawaiPage from "./landingpage/daftarpegawai";
import CuacahariiniPage from "./landingpage/cuacaharini";
import CuacabesokPage from "./landingpage/cuacabesok";
import DestinasiPage from "./landingpage/destinasiwisata";
import AnalisisCurahHujan from "./landingpage/curahhujan";
import AnalisisSifatHujan from "./landingpage/sifathujan";
import PrakiraanCurahHujan from "./landingpage/prakiraacurahhujan";
import HariTanpaHujan from "./landingpage/haritanpahujan";
import NormalMusim from "./landingpage/normalmusim";
import BulletinPage from "./landingpage/bulletin";
import KritikSaran from "./landingpage/kritik-saran";
import PelayananData from "./landingpage/pelayanandata";
import JenisPelayananan from "./landingpage/jenispelayanan";
import GalleriPage from "./landingpage/galleri";
import Beritalengkap from "./landingpage/beritalengkap";
import BeritaPage from "./landingpage/berita";
import SignIn from "./admin/pages/auth/sign-in";
import SignUp from "./admin/pages/auth/sign-up";
import Dashboard from "./admin/layouts/dashboard";
import TourismPage from "./landingpage/TourismPage";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sejarah" element={<SejarahPage />} />
          <Route path="/visi-misi" element={<VisimisiPage />} />
          <Route path="/tugas-dan-fungsi" element={<TugasfungsiPage />} />
          <Route path="/daftar-pegawai" element={<DaftarpegawaiPage />} />
          <Route path="/cuaca-hari-ini" element={<CuacahariiniPage />} />
          <Route path="/cuaca-besok" element={<CuacabesokPage />} />
          <Route path="/destinasi-wisata" element={<DestinasiPage />} />
          <Route
            path="/analisis-curah-hujan"
            element={<AnalisisCurahHujan />}
          />
          <Route
            path="/analisis-sifat-hujan"
            element={<AnalisisSifatHujan />}
          />
          <Route
            path="/prakiraan-curah-hujan"
            element={<PrakiraanCurahHujan />}
          />
          <Route path="/hari-tanpa-hujan" element={<HariTanpaHujan />} />
          <Route path="/normal-musim" element={<NormalMusim />} />
          <Route path="/berita" element={<BeritaPage />} />
          <Route path='/berita-selengkapnya/:id' element={<Beritalengkap />} />
          <Route path="/buletin" element={<BulletinPage />} />
          <Route path="/kritik-dan-saran" element={<KritikSaran />} />
          <Route
            path="/jenis-layanan-dan-tarif"
            element={<JenisPelayananan />}
          />
          <Route path="/prosedur-pelayanan-data" element={<PelayananData />} />
          <Route path="/galeri" element={<GalleriPage />} />
          <Route path="/tourism" element={<TourismPage />} />

          {/* ADMIN */}
          <Route path="/stametbwi96987-sign_in" element={<SignIn/>} />
          <Route path="/stametbwi96987-sign_up" element={<SignUp/>} />
          <Route path="/dashboard/*" element={<Dashboard/>} />
          <Route path="*" element={<>Not Found</>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
