import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavComp() {
  return (
    <Navbar expand="xl" className="bg-nav-body shadow sticky-xl-top" id="navbar-ukuran">
      <Container>
      <Navbar.Brand href="/" className='fw-bold fs-4 d-flex'>
            <img
              alt=""
              src="../src/assets/logo-bmkg-no-text.png"
              width="36"
              className="align-top"
            />
           &nbsp; &nbsp; BMKG Banyuwangi
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className='fw-bold'>Beranda</Nav.Link>

            <NavDropdown title="Profil" id="basic-nav-dropdown" className='fw-bold'>
              <NavDropdown.Item href='/sejarah' className='fw-bold my-1'>Sejarah</NavDropdown.Item>
              <NavDropdown.Item href="/visi-misi" className='fw-bold my-1'>Visi & Misi</NavDropdown.Item>
              <NavDropdown.Item href="/tugas-dan-fungsi" className='fw-bold my-1'>Tugas & Fungsi</NavDropdown.Item>
              <NavDropdown.Item href="/daftar-pegawai" className='fw-bold my-1'>Pegawai</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Prakiraan Cuaca" id="basic-nav-dropdown" className='fw-bold'>
              <NavDropdown.Item href="/cuaca-hari-ini" className='fw-bold my-1'>Cuaca Hari Ini</NavDropdown.Item>
              <NavDropdown.Item href="/cuaca-besok" className='fw-bold my-1'>Cuaca Besok</NavDropdown.Item>
              <NavDropdown.Item href="/tourism" className='fw-bold my-1'>Destinasi Wisata</NavDropdown.Item>
              <NavDropdown.Item href="https://www.bmkg.go.id/cuaca/prakiraan-cuaca-indonesia.bmkg" target="_blank" className='fw-bold my-1'>Kota di Indonesia</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Info Iklim" id="basic-nav-dropdown" className='fw-bold'>
              <NavDropdown.Item href="/analisis-curah-hujan" className='fw-bold my-1'>Analis Curah Hujan</NavDropdown.Item>
              <NavDropdown.Item href="/analisis-sifat-hujan" className='fw-bold my-1'>Analis Sifat Hujan</NavDropdown.Item>
              <NavDropdown.Item href="/prakiraan-curah-hujan" className='fw-bold my-1'>Prakiraan Curah Hujan</NavDropdown.Item>
              <NavDropdown.Item href="/hari-tanpa-hujan" className='fw-bold my-1'>Hari Tanpa Hujan</NavDropdown.Item>
              <NavDropdown.Item href="/normal-musim" className='fw-bold my-1'>Normal Musim</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Publik" id="basic-nav-dropdown" className='fw-bold'>
              <NavDropdown.Item href="/berita" className='fw-bold my-1'>Berita</NavDropdown.Item>
              <NavDropdown.Item href="/buletin" className='fw-bold my-1'>Buletin</NavDropdown.Item>
              <NavDropdown.Item href="https://eskm.bmkg.go.id/survey/436911/0/2/2023-12/2023/0" target="_blank" className='fw-bold my-1'>Survey IKM</NavDropdown.Item>
              <NavDropdown.Item href="/kritik-dan-saran" className='fw-bold my-1'>Kritik & Saran</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Pelayanan Data" id="basic-nav-dropdown" className='fw-bold'>
              <NavDropdown.Item href="/jenis-layanan-dan-tarif" className='fw-bold my-1'>Jenis Pelayanan & Tarif</NavDropdown.Item>
              <NavDropdown.Item href="/prosedur-pelayanan-data" className='fw-bold my-1'>Prosedur Pelayanan Data</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/galeri" className='fw-bold'>Galeri</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComp;