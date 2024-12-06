import { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import './MarsPhotos.css'

const MarsPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false); 
  const [currentPage, setCurrentPage] = useState(1); 
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const photosPerPage = 6;


  const handleSearch = async (date) => {
    setLoading(true);
    setHasSearched(true);
    
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
      console.log(response)
      setPhotos(response.data.photos);
      setCurrentPage(1);
    } catch (error) {
      console.error("Error al traer fotos de marte:", error);
    } finally {
      setLoading(false);
    }
  };

  // Lógica para paginación
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  const nextPage = () => {
    if (currentPage < Math.ceil(photos.length / photosPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="search">
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Cargando...</p>}
      <div className="card">
        {currentPhotos.length > 0 ? (
          <div className="photo-grid">
            {currentPhotos.map((photo) => (
              <div className="photo-card" key={photo.id}>
                <img
                  src={photo.img_src}
                  alt={`Mars Rover - ${photo.rover.name}`}
                />
                <p>Name: {photo.rover.name}</p>
                <p>Earth Date: {photo.earth_date}</p>
                <button onClick={() => setSelectedPhoto(photo)}>More Details</button>
              </div>
            ))}
          </div>
        ) : (
          !loading && hasSearched && photos.length === 0 && <p>No se encontraron fotos para la fecha selecccionada.</p>
        )}
      </div>

      {/* Paginación */}
      {photos.length > photosPerPage && (
        <div className="pagination">
          <button onClick={prevPage} disabled={currentPage === 1}>
            Anterior
          </button>
          <span>Página {currentPage}</span>
          <button
            onClick={nextPage}
            disabled={currentPage === Math.ceil(photos.length / photosPerPage)}
          >
            Siguiente
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedPhoto && (
        <div className="modal">
          <div className="modal-content">
            <h2>Detalles de la foto</h2>
            <img
              src={selectedPhoto.img_src}
              alt={`Mars Rover - ${selectedPhoto.rover.name}`}
              style={{ width: "100%" }}
            />
            <p><strong>Camera Name:</strong> {selectedPhoto.camera.full_name}</p>
            <p><strong>Landing Date:</strong> {selectedPhoto.rover.landing_date}</p>
            <p><strong>Launch Date:</strong> {selectedPhoto.rover.launch_date}</p>
            <p><strong>Total Photos:</strong> {selectedPhoto.rover.total_photos}</p>
            <button onClick={() => setSelectedPhoto(null)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarsPhotos;