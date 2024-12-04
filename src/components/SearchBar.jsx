import React, { useState } from "react";

function SearchBar({onSearch}) {

    const [date, setDate] = useState('');

    const handLesSearch = (e) => {
        e.preventDefault();
        onSearch(date);
    };

    return (
        <form onSubmit={handLesSearch} style={{ marginBottom: '2px'}}>
            <input
            type="date"
            placeholder="Introduce una fecha..."
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{width: '90%', padding: '10px'}}
            />
            <button type="submit" style={{padding:'10px'}}>
                Buscar
            </button>
        </form>
    );
};
export default SearchBar;