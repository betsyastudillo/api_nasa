import { useState } from "react";
import './SearchBar.css'

function SearchBar({onSearch}) {

  const [date, setDate] = useState('');

  const handLesSearch = (e) => {
    e.preventDefault();
    onSearch(date);
  };

  return (
    <div className="container-date">
      <h2>Busca imágenes por fecha</h2>
      <form 
        id="form-search" onSubmit={handLesSearch}>
        <input
        className="input-search"
        type="date"
        placeholder="Introduce una fecha..."
        value={date}
        onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">
            Buscar
        </button>
      </form>
    </div>
  );
};
export default SearchBar;