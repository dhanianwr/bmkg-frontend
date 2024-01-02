import React, { useEffect, useState } from "react";
import NavComp from "../components/navbar";
import Footer from "../components/footer";
import { Col, Container, Row } from "react-bootstrap";
import ModalComp from "../components/modalcomp";
import axios from "axios";
import ijenimg from "../assets/img/wisata/kawah-ijen.jpg";
import plengkungimg from "../assets/img/wisata/pantai-pengkung.png";
import pulaumerahimg from "../assets/img/wisata/pantai-pulau-merah.jpg";
import tabuhannimg from "../assets/img/wisata/tabuhan-island.jpg";
import telukijoimg from "../assets/img/wisata/green-bay.jpg";
import boomimg from "../assets/img/wisata/pantai-boom.jpg";
import lidarimg from "../assets/img/wisata/lidar-waterfall.jpg";

export default function DestinasiPage() {
  //TODAY
  const [ijentoday, setIjenToday] = useState([]);
  const [plengkungtoday, setPlengkungToday] = useState([]);
  const [redtoday, setRedToday] = useState([]);
  const [tabuhantoday, setTabuhanToday] = useState([]);
  const [greentoday, setGreenToday] = useState([]);
  const [boomtoday, setBoomToday] = useState([]);
  const [lidartoday, setLidarToday] = useState([]);

  //TOMORROW
  const [ijentomorrow, setIjenTomorrow] = useState([]);
  const [plengkungtomorrow, setPlengkungTomorrow] = useState([]);
  const [redtomorrow, setRedTomorrow] = useState([]);
  const [tabuhantomorrow, setTabuhanTomorrow] = useState([]);
  const [greentomorrow, setGreenTomorrow] = useState([]);
  const [boomtomorrow, setBoomTomorrow] = useState([]);
  const [lidartomorrow, setLidarTomorrow] = useState([]);

  useEffect(() => {
    //Today
    GetWisataIjenToday();
    GetWisataPlengkungToday();
    GetWisataGreenToday();
    GetWisataRedToday();
    GetWisataTabuhanToday();
    GetWisataLidarToday();
    GetWisataBoomToday();
    //Tomorrow
    GetWisataIjenTomorrow();
    GetWisataPlengkungTomorrow();
    GetWisataGreenTomorrow();
    GetWisataRedTomorrow();
    GetWisataTabuhanTomorrow();
    GetWisataBoomTomorrow();
    GetWisataLidarTomorrow();
  }, []);

  //Today
  const GetWisataIjenToday = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/wisatanama?name=Ijen+Carter"
      );
      setIjenToday(response.data);
    } catch (error) {
      console.log("gagal mendapatkan data", error);
    }
  };

  const GetWisataPlengkungToday = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/wisatanama?name=Plengkung+Beach"
      );
      setPlengkungToday(response.data);
    } catch (error) {
      console.log("gagal mendapatkan data", error);
    }
  };

  const GetWisataRedToday = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/wisatanama?name=Red+Island+Beach"
      );
      setRedToday(response.data);
    } catch (error) {
      console.log("gagal mendapatkan data", error);
    }
  };

  const GetWisataTabuhanToday = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/wisatanama?name=Tabuhan+Island"
      );
      setTabuhanToday(response.data);
    } catch (error) {
      console.log("gagal mendapatkan data", error);
    }
  };

  const GetWisataGreenToday = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/wisatanama?name=Green+Bay"
      );
      setGreenToday(response.data);
    } catch (error) {
      console.log("gagal mendapatkan data", error);
    }
  };

  const GetWisataBoomToday = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/wisatanama?name=Boom+Beach"
      );
      setBoomToday(response.data);
    } catch (error) {
      console.log("gagal mendapatkan data", error);
    }
  };

  const GetWisataLidarToday = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/wisatanama?name=Lidar+Waterfall"
      );
      setLidarToday(response.data);
    } catch (error) {
      console.log("gagal mendapatkan data", error);
    }
  };

  //Tomorrow
  const GetWisataIjenTomorrow = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/wisata-besok-name?name=Ijen+Carter"
      );
      setIjenTomorrow(response.data);
    } catch (error) {
      console.log("gagal mendapatkan data", error);
    }
  };

  const GetWisataPlengkungTomorrow = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/wisata-besok-name?name=Plengkung+Beach"
      );
      setPlengkungTomorrow(response.data);
    } catch (error) {
      console.log("gagal mendapatkan data", error);
    }
  };

  const GetWisataRedTomorrow = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/wisata-besok-name?name=Red+Island+Beach"
      );
      setRedTomorrow(response.data);
    } catch (error) {
      console.log("gagal mendapatkan data", error);
    }
  };

  const GetWisataTabuhanTomorrow = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/wisata-besok-name?name=Tabuhan+Island"
      );
      setTabuhanTomorrow(response.data);
    } catch (error) {
      console.log("gagal mendapatkan data", error);
    }
  };

  const GetWisataGreenTomorrow = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/wisata-besok-name?name=Green+Bay"
      );
      setGreenTomorrow(response.data);
    } catch (error) {
      console.log("gagal mendapatkan data", error);
    }
  };

  const GetWisataBoomTomorrow = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/wisata-besok-name?name=Boom+Beach"
      );
      setBoomTomorrow(response.data);
    } catch (error) {
      console.log("gagal mendapatkan data", error);
    }
  };

  const GetWisataLidarTomorrow = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/wisata-besok-name?name=Lidar+Waterfall"
      );
      setLidarTomorrow(response.data);
    } catch (error) {
      console.log("gagal mendapatkan data", error);
    }
  };

  window.onload = setInterval(today, 1000);
  function today() {
    var d = new Date();
    var date = d.getDate();
    var year = d.getFullYear();
    var month = d.getMonth();
    var monthArr = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    month = monthArr[month];
    document.getElementById("date").innerHTML =
      date + " " + month + ", " + year;
  }

  window.onload = setInterval(tomorrow, 1000);
  function tomorrow() {
    var e = new Date();
    var date = e.getDate() + 1;
    var year = e.getFullYear();
    var month = e.getMonth();
    var monthArr = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    month = monthArr[month];
    document.getElementById("tomorrow").innerHTML =
      date + " " + month + ", " + year;
  }

  return (
    <div>
      <NavComp />

      <div className="pt-5 pb-5 bg-wisata">
        <Container>
          <Row>
            <h5 className="text-center">
              <div className="fw-bold">
                Weather Forecast For Banyuwangi Tourism
              </div>
              Valid <span id="date"></span> (Today) and{" "}
              <span id="tomorrow"></span> (Tomorrow)
            </h5>
          </Row>
          <Row className="text-center pt-3 wisata">
            <Col xs={12} md={4} className="pb-4">
              <div className="img-wisata">
                <img src={ijenimg} alt="Ijen Creater Image" />
              </div>
              <h5 className="fw-bold">Ijen Creater</h5>
              <div>
                <ModalComp
                  buttontitle={"Today"}
                  modaltitle={"Today"}
                  weather={ijentoday.weather}
                  wind={ijentoday.wind}
                  temp={ijentoday.temp}
                  humidity={ijentoday.humidity}
                  wave={ijentoday.wave}
                />

                <ModalComp
                  buttontitle={"Tomorrow"}
                  modaltitle={"Tomorrow"}
                  weather={ijentomorrow.weather}
                  wind={ijentomorrow.wind}
                  temp={ijentomorrow.temp}
                  humidity={ijentomorrow.humidity}
                  wave={" - "}
                />
              </div>
            </Col>

            <Col xs={12} md={4} className="pb-4">
              <div className="img-wisata">
                <img src={plengkungimg} alt="Plengkung Beach Image" />
              </div>
              <h5 className="fw-bold">Plengkung Beach</h5>
              <div>
                <ModalComp
                  buttontitle={"Today"}
                  modaltitle={"Today"}
                  weather={plengkungtoday.weather}
                  wind={plengkungtoday.wind}
                  temp={plengkungtoday.temp}
                  humidity={plengkungtoday.humidity}
                  wave={plengkungtoday.wave}
                />

                <ModalComp
                  buttontitle={"Tomorrow"}
                  modaltitle={"Tomorrow"}
                  weather={plengkungtomorrow.weather}
                  wind={plengkungtomorrow.wind}
                  temp={plengkungtomorrow.temp}
                  humidity={plengkungtomorrow.humidity}
                  wave={plengkungtomorrow.wave}
                />
              </div>
            </Col>

            <Col xs={12} md={4} className="pb-4">
              <div className="img-wisata">
                <img src={pulaumerahimg} alt="Red Island Beach Image" />
              </div>
              <h5 className="fw-bold">Red Island Beach</h5>
              <div>
                <ModalComp
                  buttontitle={"Today"}
                  modaltitle={"Today"}
                  weather={redtoday.weather}
                  wind={redtoday.wind}
                  temp={redtoday.temp}
                  humidity={redtoday.humidity}
                  wave={redtoday.wave}
                />

                <ModalComp
                  buttontitle={"Tomorrow"}
                  modaltitle={"Tomorrow"}
                  weather={redtomorrow.weather}
                  wind={redtomorrow.wind}
                  temp={redtomorrow.temp}
                  humidity={redtomorrow.humidity}
                  wave={redtomorrow.wave}
                />
              </div>
            </Col>

            <Col xs={12} md={4} className="pb-4">
              <div className="img-wisata">
                <img src={tabuhannimg} alt="Tabuhan Island Image" />
              </div>
              <h5 className="fw-bold">Tabuhan Island</h5>
              <div>
                <ModalComp
                  buttontitle={"Today"}
                  modaltitle={"Today"}
                  weather={tabuhantoday.weather}
                  wind={tabuhantoday.wind}
                  temp={tabuhantoday.temp}
                  humidity={tabuhantoday.humidity}
                  wave={tabuhantoday.wave}
                />

                <ModalComp
                  buttontitle={"Tomorrow"}
                  modaltitle={"Tomorrow"}
                  weather={tabuhantomorrow.weather}
                  wind={tabuhantomorrow.wind}
                  temp={tabuhantomorrow.temp}
                  humidity={tabuhantomorrow.humidity}
                  wave={tabuhantomorrow.wave}
                />
              </div>
            </Col>

            <Col xs={12} md={4} className="pb-4">
              <div className="img-wisata">
                <img src={telukijoimg} alt="Image Green Bay" />
              </div>
              <h5 className="fw-bold">Green Bay</h5>
              <div>
                <ModalComp
                  buttontitle={"Today"}
                  modaltitle={"Today"}
                  weather={greentoday.weather}
                  wind={greentoday.wind}
                  temp={greentoday.temp}
                  humidity={greentoday.humidity}
                  wave={greentoday.wave}
                />

                <ModalComp
                  buttontitle={"Tomorrow"}
                  modaltitle={"Tomorrow"}
                  weather={greentomorrow.weather}
                  wind={greentomorrow.wind}
                  temp={greentomorrow.temp}
                  humidity={greentomorrow.humidity}
                  wave={greentomorrow.wave}
                />
              </div>
            </Col>

            <Col xs={12} md={4} className="pb-4">
              <div className="img-wisata">
                <img src={boomimg} alt="Image Boom Beach" />
              </div>
              <h5 className="fw-bold">Boom Beach</h5>
              <div>
                <ModalComp
                  buttontitle={"Today"}
                  modaltitle={"Today"}
                  weather={boomtoday.weather}
                  wind={boomtoday.wind}
                  temp={boomtoday.temp}
                  humidity={boomtoday.humidity}
                  wave={boomtoday.wave}
                />

                <ModalComp
                  buttontitle={"Tomorrow"}
                  modaltitle={"Tomorrow"}
                  weather={boomtomorrow.weather}
                  wind={boomtomorrow.wind}
                  temp={boomtomorrow.temp}
                  humidity={boomtomorrow.humidity}
                  wave={boomtomorrow.wave}
                />
              </div>
            </Col>

            <Col xs={12} md={4} className="pb-4">
              <div className="img-wisata">
                <img src={lidarimg} alt="Image Lidar" />
              </div>
              <h5 className="fw-bold">Lidar Waterfall</h5>
              <div>
                <ModalComp
                  buttontitle={"Today"}
                  modaltitle={"Today"}
                  weather={lidartoday.weather}
                  wind={lidartoday.wind}
                  temp={lidartoday.temp}
                  humidity={lidartoday.humidity}
                  wave={lidartoday.wave}
                />

                <ModalComp
                  buttontitle={"Tomorrow"}
                  modaltitle={"Tomorrow"}
                  weather={lidartomorrow.weather}
                  wind={lidartomorrow.wind}
                  temp={lidartomorrow.temp}
                  humidity={lidartomorrow.humidity}
                  wave={lidartomorrow.wave}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  );
}
