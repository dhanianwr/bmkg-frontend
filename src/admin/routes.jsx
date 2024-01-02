import { CuacaHariIni } from "./pages/dashboard/cuacaHariIni";
import { CuacaBesok } from "./pages/dashboard/cuacaBesok";
import { AnalisisCurahHujan } from "./pages/dashboard/analisisCurahHujan";
import { AnalisisSifatHujan } from "./pages/dashboard/analisisSifatHujan";
import { PrakiraanCurahHujan } from "./pages/dashboard/prakiraanCurahHujan";
import { HariTanpaHujan } from "./pages/dashboard/hariTanpaHujan";
import { NormalMusim } from "./pages/dashboard/NormalMusim";
import { Gallery } from "./pages/dashboard/gallery";
import { ImageCuaca } from "./pages/dashboard/imageCuaca";
import { Pegawai } from "./pages/dashboard/pegawai";
import { Wisata } from "./pages/dashboard/wisata";
import { Berita } from "./pages/dashboard/berita";
import { EditGallery } from './pages/edit/editGallery';
import { EditBerita } from './pages/edit/editBerita';
import { EditPegawai } from './pages/edit/editPegawai';
import { EditHariIni } from "./pages/edit/editHariIni";
import { EditBesok } from "./pages/edit/editBesok";
import { EditHI } from "./pages/edit/editHI";
import { EditBO } from "./pages/edit/editBO";
import { EditACH } from "./pages/edit/editACH";
import { EditASH } from "./pages/edit/editASH";
import { EditPCH } from "./pages/edit/editPCH";
import { EditHTH } from "./pages/edit/editHTH";
import { EditNM } from "./pages/edit/editNM";
import { Buletin } from "./pages/dashboard/buletin";
import { EditBuletin } from "./pages/edit/editBuletin";
import { KritikSaran } from "./pages/dashboard/kritikSaran";
import { Peringatan } from "./pages/dashboard/peringatan";
import { EditPeringatan } from "./pages/edit/editPeringatan";
import { WelcomePage } from "./pages/dashboard";
import { Tourism } from "./pages/dashboard/tourism";
import { EditTourism } from "./pages/edit/editTourism"

export const routes = [
  { name: "Cuaca Hari Ini", path: "/cuaca-hariini", element: <CuacaHariIni /> },
  { name: "Cuaca Besok", path: "/cuaca-Besok", element: <CuacaBesok /> },
  { name: "Analisis Curah Hujan", path: "/analisis-curah-hujan", element: <AnalisisCurahHujan /> },
  { name: "Analisis Sifat Hujan", path: "/analisis-sifat-hujan", element: <AnalisisSifatHujan /> },
  { name: "Prakiraan Sifat Hujan", path: "/prakiraan-sifat-hujan", element: <PrakiraanCurahHujan /> },
  { name: "Hari Tanpa Hujan", path: "/hari-tanpa-hujan", element: <HariTanpaHujan /> },
  { name: "Normal Musim", path: "/normal-musim", element: <NormalMusim /> },
  { name: "EditBerita", path: "/editBerita/:id", element: <EditBerita /> },
  { name: "EditBuletin", path: "/editBuletin/:id", element: <EditBuletin /> },
  { name: "EditPegawai", path: "/editPegawai/:id", element: <EditPegawai /> },
  { name: "Gallery", path: "/gallery", element: <Gallery /> },
  { name: "EditGallery", path: "/editGallery/:id", element: <EditGallery /> },
  { name: "EditWisataHariIni", path: "/editWisataHariIni/:id", element: <EditHariIni /> },
  { name: "EditWisataBesok", path: "/editWisataBesok/:id", element: <EditBesok /> },
  { name: "ImageCuaca", path: "/imageCuaca", element: <ImageCuaca /> },
  { name: "Pegawai", path: "/pegawai", element: <Pegawai /> },
  { name: "Wisata", path: "/wisata", element: <Wisata /> },
  { name: "Berita", path: "/berita", element: <Berita /> },
  { name: "Buletin", path: "/buletin", element: <Buletin /> },
  { name: "EditCuacaHariIni", path: "/editCuacaHariIni/:id", element: <EditHI /> },
  { name: "EditCuacaBesok", path: "/editCuacaBesok/:id", element: <EditBO /> },
  { name: "EditAnalisisCurahHujan", path: "/editAnalisisCurahHujan/:id", element: <EditACH /> },
  { name: "EditAnalisisSifatHujan", path: "/editAnalisisSifatHujan/:id", element: <EditASH /> },
  { name: "EditPrakiraanCurahHujan", path: "/editPrakiraanCurahHujan/:id", element: <EditPCH /> },
  { name: "EditHariTanpaHujan", path: "/editHariTanpaHujan/:id", element: <EditHTH /> },
  { name: "EditNormalMusim", path: "/editNormalMusim/:id", element: <EditNM /> },
  { name: "KritikSaran", path: "/kritik-saran", element: <KritikSaran /> },
  { name: "Peringatan", path: "/peringatan", element: <Peringatan /> },
  { name: "EditPeringatan", path: "/edit-peringatan/:id", element: <EditPeringatan /> },
  { name: "Welcome", path: "/Welcome", element: <WelcomePage /> },
  { name: "Tourism", path: "/tourism", element: <Tourism /> },
  { name: "EditTourism", path: "/edit-tourism/:id", element: <EditTourism/> },
];

export default routes;
