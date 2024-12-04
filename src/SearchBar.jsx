import { useState } from "react";

function SearchBar({onSearch}) {

    const [query, setQuery] = useState('');//almacena el texto ingresado

    const handLesSearch = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handLesSearch} style={{ marginBottom: '2px'}}>
            <input
            type="text"
            placeholder="Busca por títulos..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}// actualiza el estado del texto
            style={{width: '80%', padding: '10px'}}
            />
            <button type="submit" style={{padding:'10px'}}>
                Buscar
            </button>
        </form>
    );
};
export default SearchBar;