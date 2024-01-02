import axios from "axios";
import { useState, useEffect } from "react";
import CardComp from "../components/card";

function TesGambar() {
  const [images, setImage] = useState([]);

  useEffect(() => {
    getImage();
  }, []);

  const getImage = async () => {
    try {
      const response = await axios.get("http://localhost:5000/images");
      setImage(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div>
      {images.map((idx) => (
        <CardComp key={idx.id} img={idx.url} tittle={idx.name} />
      ))}
    </div>

    // <div>
    //  {images.map((idx) => (
    //         <GaleriComp key={idx.id} img={idx.url} caption={idx.name} />
    //     ))}
    // </div>
  );
}

export default TesGambar;
