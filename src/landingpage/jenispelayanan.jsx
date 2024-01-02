import NavComp from '../components/navbar'
import Footer from '../components/footer'
import { Container, Table } from 'react-bootstrap'

export default function JenisPelayananan() {
  return (
    <>
        <NavComp/>

            <div className='bg-jenis-tarif pt-5 pb-5'>
                <h5 className='text-center'><div className='fw-bold mb-1'>Jenis Layanan dan Tarif<br/></div> 
                    Jenis Layanan dan tarif sesuai PP No. 47 Tahun 2018 tentang Jenis dan Tarif Atas Jenis Penerimaan Negara Bukan<br/>
                    Pajak yang berlaku di BMKG</h5>
                
                <Container className='mt-5'>
                    <p className='fw-bold'>Jenis Layanan : </p>
                    <li>Informasi Meteorologi, Klimatologi, dan Geofisika.</li>
                    <li>Jasa Konsultasi Meteorologi, Klimatologi, dan Geofisika.</li>
                    <li>Jasa Kalibrasi Alat Meteorologi, Klimatologi, dan Geofisika.</li>
                    <li>Jasa Penggunaan Alat Meteorologi, Klimatologi, dan Geofisika.</li>
                    <li>Jasa Penyelenggaraan Sekolah Tinggi Meteorologi Klimatologi dan Geofisika.</li>
                    <li>Jasa Penyelenggaraan Pendidikan dan Pelatihan Meteorologi, Klimatologi, dan Geofisika.</li>
                    <li>Jasa Penggunaan Gedung untuk Kegiatan Pendidikan dan Pelatihan/Workshop/Seminar di Bidang Meteorologi, Klimatologi, dan Geofisika.</li>

                    <Table hover responsive='md' className='mt-5'>
                    <thead>
                        <tr>
                            <th colSpan={4} className='text-center'>Informasi Khusus Meteorologi, Klimatologi, dan Geofisika</th>
                        </tr>
                        <tr>
                            <th>No</th>
                            <th>JENIS PENERIMAAN NEGARA BUKAN PAJAK</th>
                            <th>SATUAN</th>
                            <th>TARIF</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Informasi Cuaca untuk Penerbangan</td>
                            <td>per route unit</td>
                            <td>4% dari biaya pelayanan jasa navigasi penerbangan</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Informasi Cuaca untuk Pelayaran</td>
                            <td>per route per hari</td>
                            <td>Rp 250.000,00</td>
                        </tr>
                        <tr>
                        <td>3</td>
                            <td>Informasi Cuaca untuk Pelabuhan</td>
                            <td>per dokumen per lokasi per hari</td>
                            <td>Rp 330.000,00</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Informasi Cuaca untuk Pengeboran Lepas Pantai</td>
                            <td>per lokasi per hari</td>
                            <td>Rp 225.000,00</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td colSpan={3}>Informasi Iklim untuk Agro Industri</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Analisis dan Prakiraan Hujan Bulanan</li></td>
                            <td>per buku</td>
                            <td>Rp 65.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Prakiraan Musim Kemarau</li></td>
                            <td>per buku</td>
                            <td>Rp 230.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Prakiraan Musim Hujan</li></td>
                            <td>per buku</td>
                            <td>Rp 230.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Atlas Kesesuaian Agroklimat</li></td>
                            <td>per buku</td>
                            <td>Rp 470.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Atlas Normal Temperatur Periode 1981-2010</li></td>
                            <td>per buku</td>
                            <td>Rp 1.500.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Atlas Windrose Wilayah Indonesia Periode 1981-2010</li></td>
                            <td>per buku</td>
                            <td>Rp 1.500.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Atlas Curah Hujan di Indonesia Rata-rata Periode 1981-2010</li></td>
                            <td>per buku</td>
                            <td>Rp 1.500.000,00</td>
                        </tr>
                        <tr>
                        <td>6</td>
                        <td colSpan={3}>Informasi Kualitas Udara Rata-rata Mingguan untuk Industri</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Particulate Matter (PM10)</li></td>
                            <td>per stasiun per tahun</td>
                            <td>Rp 70.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Particulate Matter (PM2.5)</li></td>
                            <td>per stasiun per tahun</td>
                            <td>Rp 70.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Sulfur Dioksida (SO2)</li></td>
                            <td>per stasiun per tahun</td>
                            <td>Rp 60.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Nitrogen Oksida (NOx)</li></td>
                            <td>per stasiun per tahun</td>
                            <td>Rp 60.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Ozon (O3)</li></td>
                            <td>per stasiun per tahun</td>
                            <td>Rp 60.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Karbon Monoksida (CO)</li></td>
                            <td>per stasiun per tahun</td>
                            <td>Rp 60.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Karbon Dioksida (CO2)</li></td>
                            <td>per sampel</td>
                            <td>Rp 80.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Methan (CH4)</li></td>
                            <td>per sampel</td>
                            <td>Rp 80.000,00</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td colSpan={3}>Informasi Peta Kegempaan Untuk Perencanaan Kontruksi</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Peta Kegempaan</li></td>
                            <td>per provinsi per tahun</td>
                            <td>Rp 250.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Peta Percepatan Tanah</li></td>
                            <td>per provinsi per tahun</td>
                            <td>Rp 250.000,00</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td colSpan={3}>Informasi Meteorologi, Klimatologi, dan Geofisika untuk Keperluan Klaim Asuransi</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Informasi Meteorologi</li></td>
                            <td>per lokasi per hari</td>
                            <td>Rp 175.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Informasi Geofisika</li></td>
                            <td>per lokasi per hari</td>
                            <td>Rp 185.000,00</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colSpan={4} className='text-center'>Informasi Khusus Meteorologi, Klimatologi, dan Geofisika Sesuai Permintaan</th>
                        </tr>
                        <tr>
                            <th>No</th>
                            <th>JENIS PENERIMAAN NEGARA BUKAN PAJAK</th>
                            <th>SATUAN</th>
                            <th>TARIF</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td colSpan={3}>Informasi Meteorologi</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Informasi Cuaca Khusus untuk Kegiatan Olah Raga</li></td>
                            <td>per lokasi per hari</td>
                            <td>Rp 100.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Informasi Cuaca Khusus untuk Kegiatan Komersial Outdoor/Indoor</li></td>
                            <td>per lokasi per hari</td>
                            <td>Rp 100.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Informasi Radar Cuaca (per 10 menit)</li></td>
                            <td>per lokasi per hari</td>
                            <td>Rp 70.000,00</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td colSpan={3}>Informasi Klimatologi</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan={3}>A. Informasi Iklim Maritim</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Peta Spasial Informasi Maritim</li></td>
                            <td>per peta per bulan</td>
                            <td>Rp 300.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Informasi Tabular dan Grafik Maritim</li></td>
                            <td>per tabel per bulan</td>
                            <td>Rp 350.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>B. Atlas Potensi Rawan Banjir</td>
                            <td>per atlas</td>
                            <td>Rp 350.000,00</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan={3}>Informasi Perubahan Iklim dan Kualitas Udara</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan={3}>A. Informasi Perubahan Iklim</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>1). Publikasi Berupa Informasi Perubahan Iklim dan Kualitas Udara</td>
                            <td>per buku</td>
                            <td>Rp 100.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan={3}>2). Atlas</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Kerentanan Perubahan Iklim</li></td>
                            <td>per atlas</td>
                            <td>Rp 450.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Potensi Energi Matahari di Indonesia</li></td>
                            <td>per atlas</td>
                            <td>Rp 300.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Potensi Energi Angin di Indonesia</li></td>
                            <td>per atlas</td>
                            <td>Rp 300.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan={3}>B. Pengambilan Sampel Kualitas Udara</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Sulfur Dioksida (SO2)</li></td>
                            <td>per sampel</td>
                            <td>Rp 30.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Nitrogen Oksida (NO2)</li></td>
                            <td>per sampel</td>
                            <td>Rp 30.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Karbon Dioksida (CO2)</li></td>
                            <td>per sampel</td>
                            <td>Rp 40.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Ozon (O3)</li></td>
                            <td>per sampel</td>
                            <td>Rp 30.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Suspended Particulate Matter (SPM)</li></td>
                            <td>per sampel</td>
                            <td>Rp 60.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Debu Particulate Matter (PM2.5)</li></td>
                            <td>per sampel</td>
                            <td>Rp 90.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Kimia Air Hujan</li></td>
                            <td>per sampel</td>
                            <td>Rp 230.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Methan (CH4)</li></td>
                            <td>per sampel</td>
                            <td>Rp 40.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>C. Pengujian Sampel Kualitas Udara</td>
                            <td>per atlas</td>
                            <td>Rp 470.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Sulfur Dioksida (SO2)</li></td>
                            <td>per sampel</td>
                            <td>Rp 20.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Nitrogen Oksida (NO2)</li></td>
                            <td>per sampel</td>
                            <td>Rp 20.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Karbon Dioksida (CO2)</li></td>
                            <td>per sampel</td>
                            <td>Rp 30.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Ozon (O3)</li></td>
                            <td>per sampel</td>
                            <td>Rp 20.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Suspended Particulate Matter (SPM)</li></td>
                            <td>per sampel</td>
                            <td>Rp 50.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Debu Particulate Matter (PM10)</li></td>
                            <td>per sampel</td>
                            <td>Rp 50.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Debu Particulate Matter (PM2.5)</li></td>
                            <td>per sampel</td>
                            <td>Rp 70.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Kimia Air Hujan</li></td>
                            <td>per sampel</td>
                            <td>Rp 240.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Methan (CH4)</li></td>
                            <td>per sampel</td>
                            <td>Rp 30.000,00</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td colSpan={3}>Informasi Perubahan Iklim dan Kualitas Udara</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Buku dan Peta Variasi Magnet Bumi (Epoch)</li></td>
                            <td>per buku</td>
                            <td>Rp 300.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Peta Tingkat Kerawanan Petir</li></td>
                            <td>per lokasi per tahun</td>
                            <td>Rp 200.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Waktu Terbit dan Terbenam Matahari atau Bulan</li></td>
                            <td>per lokasi per tahun</td>
                            <td>Rp 50.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Buku Almanak Badan Meteorologi Klimatologi dan Geofisika</li></td>
                            <td>per buku per tahun</td>
                            <td>Rp 150.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Buku Peta Ketinggian Hilal</li></td>
                            <td>per buku per tahun</td>
                            <td>Rp 150.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Titik Dasar Gaya Berat (Gravitasi)</li></td>
                            <td>per titik dasar gaya berat</td>
                            <td>Rp 150.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Kejadian Petir</li></td>
                            <td>per lokasi per hari</td>
                            <td>Rp 75.000,00</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colSpan={4} className='text-center'>JASA KONSULTASI METEOROLOGI, KLIMATOLOGI, DAN GEOFISIKA</th>
                        </tr>
                        <tr>
                            <th>No</th>
                            <th>JENIS PENERIMAAN NEGARA BUKAN PAJAK</th>
                            <th>SATUAN</th>
                            <th>TARIF</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td colSpan={3}>Jasa Konsultasi Meteorologi</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Informasi Meteorologi Khusus untuk Pendukung Kegiatan Proyek, Survei, dan Penelitian Komersial</td>
                            <td>per lokasi per hari</td>
                            <td>Rp 3.750.000,00</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td colSpan={3}>Jasa Konsultasi Klimatologi</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Analisis Iklim</td>
                            <td>per lokasi per hari</td>
                            <td>Rp 9.500.000,00</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan={3}>Jasa Konsultasi Geofisika</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Informasi Pendahuluan di Bidang Geofisika sebagai Pendukung Kegiatan Proyek, Survei, dan Penelitian Komersial</td>
                            <td>per lokasi per hari</td>
                            <td>Rp 12.300.000,00</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colSpan={4} className='text-center'>JASA KALIBRASI ALAT METEOROLOGI, KLIMATOLOGI, DAN GEOFISIKA</th>
                        </tr>
                        <tr>
                            <th>No</th>
                            <th>JENIS PENERIMAAN NEGARA BUKAN PAJAK</th>
                            <th>SATUAN</th>
                            <th>TARIF</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td colSpan={3}>Peralatan Sederhana Mekanik (Konvensional)</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Barometer Aneroid</li></td>
                            <td>per unit</td>
                            <td>Rp 400.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Barometer Air Raksa</li></td>
                            <td>per unit</td>
                            <td>Rp 400.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Barograph</li></td>
                            <td>per unit</td>
                            <td>Rp 400.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Thermometer Bola Basah</li></td>
                            <td>per unit</td>
                            <td>Rp 285.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Thermometer Bola Kering</li></td>
                            <td>per unit</td>
                            <td>Rp 285.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Thermometer Maksimum</li></td>
                            <td>per unit</td>
                            <td>Rp 285.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Thermometer Minimum</li></td>
                            <td>per unit</td>
                            <td>Rp 285.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Thermometer Tanah</li></td>
                            <td>per unit</td>
                            <td>Rp 285.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Thermometer Apung</li></td>
                            <td>per unit</td>
                            <td>Rp 285.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Thermometer Minimum Rumput</li></td>
                            <td>per unit</td>
                            <td>Rp 285.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Thermohygrograph (2 sensor)</li></td>
                            <td>per unit</td>
                            <td>Rp 735.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Portable Weather Station (PWS) (5 sensor)</li></td>
                            <td>per unit</td>
                            <td>Rp 2.570.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Hygrometer (Kelembaban Udara)</li></td>
                            <td>per unit</td>
                            <td>Rp 450.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Camble Stokes</li></td>
                            <td>per unit</td>
                            <td>Rp 205.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Panci Penguapan</li></td>
                            <td>per unit</td>
                            <td>Rp 150.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Alat Penguapan Lengkap</li></td>
                            <td>per unit</td>
                            <td>Rp 2.020.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Cup Counter Anemometer</li></td>
                            <td>per unit</td>
                            <td>Rp 1.150.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Psycrometer Assman (2 sensor)</li></td>
                            <td>per unit</td>
                            <td>Rp 570.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Actinograph</li></td>
                            <td>per unit</td>
                            <td>Rp 205.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Penakar Hujan Obs</li></td>
                            <td>per unit</td>
                            <td>Rp 210.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Penakar Hujan Hellman</li></td>
                            <td>per unit</td>
                            <td>Rp 265.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Penakar Tipping Bucket</li></td>
                            <td>per unit</td>
                            <td>Rp 270.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Still Well</li></td>
                            <td>per unit</td>
                            <td>Rp 150.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Theodolite</li></td>
                            <td>per unit</td>
                            <td>Rp 200.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Thermohygrometer (2 sensor)</li></td>
                            <td>per unit</td>
                            <td>Rp 735.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Pyranometer</li></td>
                            <td>per unit</td>
                            <td>Rp 400.000,00</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td colSpan={3}>Peralatan Sederhana Elektronik (Otomatis)</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Anemometer (2 sensor)</li></td>
                            <td>per unit</td>
                            <td>Rp 1.235.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Digital Hand Anemometer (1 sensor)</li></td>
                            <td>per unit</td>
                            <td>Rp 1.150.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Digital Hand Anemometer (2 sensor)</li></td>
                            <td>per unit</td>
                            <td>Rp 1.235.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Digital Barometer</li></td>
                            <td>per unit</td>
                            <td>Rp 400.000,00</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan={3}>Peralatan Teknologi Canggih (Modern)</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Automatic Weather Station (AWS) (5 sensor)</li></td>
                            <td>per unit</td>
                            <td>Rp 2.240.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Automatic Weather Station (AWS) (6 sensor)</li></td>
                            <td>per unit</td>
                            <td>Rp 2.640.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Automatic Weather Station (AWS) (7 sensor)</li></td>
                            <td>per unit</td>
                            <td>Rp 3.040.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Automatic Weather Station (AWS) (11 sensor)</li></td>
                            <td>per unit</td>
                            <td>Rp 4.775.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Marine Automatic Weather Station (MAWS) (9 sensor)</li></td>
                            <td>per unit</td>
                            <td>Rp 3.475.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Automatic Weather Observation System (AWOS) (9 sensor)</li></td>
                            <td>per unit</td>
                            <td>Rp 4.790.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Agroclimate Automatic Weather System (AAWS) (11 sensor)</li></td>
                            <td>per unit</td>
                            <td>Rp 4.360.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Agroclimate Automatic Weather System (AAWS) (32 sensor)</li></td>
                            <td>per unit</td>
                            <td>Rp 6.600.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Sensor Runway Visual Range (RVR)</li></td>
                            <td>per unit</td>
                            <td>Rp 800.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Ceillometer (AWOS) (9 sensor)</li></td>
                            <td>per unit</td>
                            <td>Rp 950.000,00</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td colSpan={3}>Alat Meteorologi</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Barometer Standar</li></td>
                            <td>per unit</td>
                            <td>Rp 1.180.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Thermometer Standar</li></td>
                            <td>per unit</td>
                            <td>Rp 920.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Hygrometer Standar</li></td>
                            <td>per unit</td>
                            <td>Rp 2.010.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Anemometer Standar</li></td>
                            <td>per unit</td>
                            <td>Rp 1.650.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Anemometer Standar (2 sensor)</li></td>
                            <td>per unit</td>
                            <td>Rp 2.310.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Gelas Penakar Hujan Standar</li></td>
                            <td>per unit</td>
                            <td>Rp 810.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Pyranometer Standar</li></td>
                            <td>per unit</td>
                            <td>Rp 990.000,00</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td colSpan={3}>Alat Kualitas Udara</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>pH Meter</li></td>
                            <td>per unit</td>
                            <td>Rp 50.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Conductivity Meter</li></td>
                            <td>per unit</td>
                            <td>Rp 50.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Timbangan Analitik</li></td>
                            <td>per unit</td>
                            <td>Rp 100.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Ion Chromatograph (IC)</li></td>
                            <td>per unit</td>
                            <td>Rp 750.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Atomic Absorption Spectrophotometer (AAS)</li></td>
                            <td>per unit</td>
                            <td>Rp 500.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>High Volume Air Sampler (HVAS)</li></td>
                            <td>per unit</td>
                            <td>Rp 400.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Rainfall Water Sampler (RWS)</li></td>
                            <td>per unit</td>
                            <td>Rp 50.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Aerosol Sampler</li></td>
                            <td>per unit</td>
                            <td>Rp 50.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Pemantau Karbon Dioksida (CO2 Monitoring)</li></td>
                            <td>per unit</td>
                            <td>Rp 250.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Pemantau Sulfur Dioksida (SO2 Monitoring)</li></td>
                            <td>per unit</td>
                            <td>Rp 250.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Pemantau Nitrogen Dioksida (NO2 Monitoring)</li></td>
                            <td>per unit</td>
                            <td>Rp 250.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Ozon Analyzer</li></td>
                            <td>per unit</td>
                            <td>Rp 250.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Betha Attenuator Monitoring (BAM)</li></td>
                            <td>per unit</td>
                            <td>Rp 250.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Gelas Ukur</li></td>
                            <td>per unit</td>
                            <td>Rp 50.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Spectrophotometer</li></td>
                            <td>per unit</td>
                            <td>Rp 200.000,00</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td colSpan={3}>Alat Geofisika</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Portable Analog Seismograph</li></td>
                            <td>per unit</td>
                            <td>Rp 1.500.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Short Period Seismograph (SPS-1)</li></td>
                            <td>per unit</td>
                            <td>Rp 1.500.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Short Period Seismograph (SPS-3)</li></td>
                            <td>per unit</td>
                            <td>Rp 1.500.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Portable Digital Seismograph (3 Komponen)</li></td>
                            <td>per unit</td>
                            <td>Rp 1.750.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Digital Broadband Seismograph (3 Komponen)</li></td>
                            <td>per unit</td>
                            <td>Rp 1.750.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Digital Accelerograph (3 Komponen)</li></td>
                            <td>per unit</td>
                            <td>Rp 1.750.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Gravimeter</li></td>
                            <td>per unit</td>
                            <td>Rp 4.450.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Terrameter SAS 1000</li></td>
                            <td>per unit</td>
                            <td>Rp 280.000,00</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td colSpan={3}>Alat Ukur Kelistrikan Meteorologi, Klimatologi, dan Geofisika</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Multi Meter</li></td>
                            <td>per unit</td>
                            <td>Rp 260.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Clamp Meter</li></td>
                            <td>per unit</td>
                            <td>Rp 260.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Grounding Tester</li></td>
                            <td>per unit</td>
                            <td>Rp 300.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Oscilloscope</li></td>
                            <td>per unit</td>
                            <td>Rp 1.000.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Frequency Counter</li></td>
                            <td>per unit</td>
                            <td>Rp 1.000.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Function Generator</li></td>
                            <td>per unit</td>
                            <td>Rp 1.900.000,00</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colSpan={4} className='text-center'>JASA PENGGUNAAN ALAT METEOROLOGI, KLIMATOLOGI, DAN GEOFISIKA</th>
                        </tr>
                        <tr>
                            <th>No</th>
                            <th>JENIS PENERIMAAN NEGARA BUKAN PAJAK</th>
                            <th>SATUAN</th>
                            <th>TARIF</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td colSpan={3}>Peralatan Sederhana Mekanik (Konvensional)</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Barometer Aneroid</li></td>
                            <td>per minggu</td>
                            <td>Rp 60.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Barometer Air Raksa</li></td>
                            <td>per minggu</td>
                            <td>Rp 60.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Barograph</li></td>
                            <td>per minggu</td>
                            <td>Rp 70.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Thermometer Tanah</li></td>
                            <td>per minggu</td>
                            <td>Rp 55.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Thermohygrograph</li></td>
                            <td>per minggu</td>
                            <td>Rp 55.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Portable Weather Station (PWS)</li></td>
                            <td>per minggu</td>
                            <td>Rp 150.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Camble Stokes</li></td>
                            <td>per minggu</td>
                            <td>Rp 70.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Cup Counter Anemometer</li></td>
                            <td>per minggu</td>
                            <td>Rp 35.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Psychrometer Assman</li></td>
                            <td>per minggu</td>
                            <td>Rp 45.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Actinograph</li></td>
                            <td>per minggu</td>
                            <td>Rp 45.000,00</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td colSpan={3}>Peralatan Sederhana Elektronik (Otomatis)</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Anemometer</li></td>
                            <td>per minggu</td>
                            <td>Rp 190.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Digital Hand Anemometer</li></td>
                            <td>per minggu</td>
                            <td>Rp 90.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Digital Barometer</li></td>
                            <td>per minggu</td>
                            <td>Rp 160.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Teropong Rukyat (Low Grade)</li></td>
                            <td>per hari per unit</td>
                            <td>Rp 230.000,00</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan={3}>Peralatan Teknologi Canggih (Modern)</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Portable Automatic Weather Station (PAWS)</li></td>
                            <td>per minggu</td>
                            <td>Rp 700.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Portable Marine Automatic Weather Station (PMAWS)</li></td>
                            <td>per minggu</td>
                            <td>Rp 700.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Thermal Imager</li></td>
                            <td>per hari</td>
                            <td>Rp 150.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>System Grounding Tester</li></td>
                            <td>per hari</td>
                            <td>Rp 200.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Proton Magnetograph</li></td>
                            <td>per hari per unit</td>
                            <td>Rp 400.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Portable Digital Short Period Seismograph</li></td>
                            <td>per hari per unit</td>
                            <td>Rp 640.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Portable Digital Broadband Seismograph</li></td>
                            <td>per hari per unit</td>
                            <td>Rp 970.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Portable Digital Broadband Accelerographr</li></td>
                            <td>per hari per unit</td>
                            <td>Rp 735.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Mikrotremor Array</li></td>
                            <td>per hari per unit</td>
                            <td>Rp 4.000.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Mikrotremor Civil Engineering</li></td>
                            <td>per hari per unit</td>
                            <td>Rp 680.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Multichannel Analysis of Survace Wave (MASW)</li></td>
                            <td>per hari per unit</td>
                            <td>Rp 1.750.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Gravimeter</li></td>
                            <td>per hari per unit</td>
                            <td>Rp 600.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>GPS Geodesi</li></td>
                            <td>per hari per unit</td>
                            <td>Rp 270.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Deklinasi dan Inklinasi Magnetometer</li></td>
                            <td>per hari per unit</td>
                            <td>Rp 400.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Portable Digital Modular Area Direct Monitoring Automatic (Gray Wolf)</li></td>
                            <td>per hari</td>
                            <td>Rp 400.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Pengukur Partikulat Portable</li></td>
                            <td>per hari</td>
                            <td>Rp 83.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Magnetotellurik 5 CH</li></td>
                            <td>per hari</td>
                            <td>Rp 4.000.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Computing Server of Climate Change</li></td>
                            <td>per core per buah</td>
                            <td>Rp 300.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Teropong Rukhyat High Grade</li></td>
                            <td>per hari per unit</td>
                            <td>Rp 400.000,00</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colSpan={4} className='text-center'>JASA PENYELENGGARAAN SEKOLAH TINGGI METEOROLOGI KLIMATOLOGI DAN GEOFISIKA</th>
                        </tr>
                        <tr>
                            <th>No</th>
                            <th>JENIS PENERIMAAN NEGARA BUKAN PAJAK</th>
                            <th>SATUAN</th>
                            <th>TARIF</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Uang Pendaftaran dan Seleksi Masuk Sekolah Tinggi Meteorologi Klimatologi dan Geofisika</td>
                            <td>per orang</td>
                            <td>Rp 75.000,00</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Uang Pendaftaran dan Seleksi Masuk Sekolah Tinggi Meteorologi Klimatologi dan Geofisika</td>
                            <td>per orang per semester</td>
                            <td>Rp 4.500.000,00</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colSpan={4} className='text-center'>JASA PENYELENGGARAN PENDIDIKAN DAN PELATIHAN METEOROLOGI, KLIMATOLOGI, DAN GEOFISIKA</th>
                        </tr>
                        <tr>
                            <th>No</th>
                            <th>JENIS PENERIMAAN NEGARA BUKAN PAJAK</th>
                            <th>SATUAN</th>
                            <th>TARIF</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Pendidikan dan Pelatihan Teknis/Fungsional/Sertifikasi Meteorologi, Klimatologi, dan Geofisika Nonpegawai Badan Meteorologi, Klimatologi, dan Geofisika (10 hari dan minimal 30 orang)</td>
                            <td>per orang</td>
                            <td>Rp 5.500.000,00</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Modul Pendidikan dan Pelatihan Bidang Meteorologi, Klimatologi, atau Geofisika</td>
                            <td>per buku</td>
                            <td>Rp 100.000,00</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colSpan={4} className='text-center'>JASA PENGGUNAAN GEDUNG UNTUK KEGIATAN PENDIDIKAN DAN PELATIHAN/WORKSHOP/SEMINAR DI BIDANG METEOROLOGI, KLIMATOLOGI, DAN GEOFISIKA</th>
                        </tr>
                        <tr>
                            <th>No</th>
                            <th>JENIS PENERIMAAN NEGARA BUKAN PAJAK</th>
                            <th>SATUAN</th>
                            <th>TARIF</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Ruang Aula</td>
                            <td>per 8 jam</td>
                            <td>Rp 1.500.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Tambahan Penggunaan Ruang Aula</td>
                            <td>per jam</td>
                            <td>Rp 200.000,00</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Ruang Sinema</td>
                            <td>per 8 jam</td>
                            <td>Rp 1.500.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Tambahan Penggunaan Ruang Sinema</td>
                            <td>per jam</td>
                            <td>Rp 200.000,00</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Ruang Kelas</td>
                            <td>per 8 jam per ruang</td>
                            <td>Rp 400.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Tambahan Penggunaan Ruang Kelas</td>
                            <td>per jam</td>
                            <td>Rp 50.000,00</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Ruang Komputer</td>
                            <td>per 8 jam per ruang</td>
                            <td>Rp 400.000,00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Tambahan Penggunaan Ruang Komputer</td>
                            <td>per jam</td>
                            <td>Rp 50.000,00</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Kamar Asrama</td>
                            <td>per orang per hari</td>
                            <td>Rp 225.000,00</td>
                        </tr>
                    </tbody>
                    </Table>

                </Container>
            </div>

        <Footer/>
    </>
  )
}
