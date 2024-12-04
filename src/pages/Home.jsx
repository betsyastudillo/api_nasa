import { useState } from 'react';
import SearchBar from '../SearchBar'
import Header from '../components/Header'
import axios from "axios";
import {Link} from 'react-router-dom';
import '../App.css';

function Home () {
  const [error, setError] = useState('');
  const [datos, setDatos] = useState([]);
  const [verDetalles, setVerDetalles] = useState(false);
  
  const fetchNasa = async() =>{
    try {
      const {data} = await axios.get("https://api.nasa.gov/planetary/",{
        params: {
          apikey: '5xdxZLAh05HfhJOrYHyxJVVTd6bxpQSLSdX2zV',
        },
      });
      
      return data;
    } catch (error) {
      setError(data.Error)
    }
  
  }
  
  return(
    <div className="container">
      <section className='navbar'>
        <Header />
      </section>
      <section>
        <SearchBar onSearch={fetchNasa}/>
      </section>
      <section>
        <img src='../assets/nasagif10.gif' />
        <div className="content">
          <h2>¡Bienvenidos a la NasaPIO!</h2>
          <p>El lugar ideal para los amantes de la astrología.</p>
        </div>
      </section>
        <div className="card">
          <img>{fetchNasa().img}</img> 
          <h4>{fetchNasa().title}</h4>

          <button><Link to="./Details">Ver detalle</Link></button>
        </div>


    </div>   
  )
}

export default Home;

