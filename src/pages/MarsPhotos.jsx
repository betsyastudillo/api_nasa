import React, { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";

const MarsPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (date) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos`,
        {
          params: {
            earth_date: date,
            api_key: "Y06czpykESddBRa4cIbgjswg6QE6oHhSysYiZTNg", 
          },
        }
      );
      setPhotos(response.data.photos);
    } catch (error) {
      console.error("Error al traer fotos de marte:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Cargando...</p>}
      <div>
        {photos.length > 0 ? (
          photos.map((photo) => (
            <img
              key={photo.id}
              src={photo.img_src}
              alt={`Mars Rover - ${photo.rover.name}`}
            />
          ))
        ) : (
          !loading && <p>No se encontraron fotos para la fecha selecccionada.</p>
        )}
      </div>
    </div>
  );
};

export default MarsPhotos;