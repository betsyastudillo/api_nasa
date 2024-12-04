import { useEffect, useState } from "react";
import axios from 'axios';
import "../App.css"

function Home(){
  const[media, setMedia] = useState('');
  const[title, setTitle] = useState('');
  const[typeMedia, setTypeMedia] = useState('');
  const[explanation, setExplanation] = useState('');
  const[load, setLoad] = useState(false);

  const todayMedia = async() =>{
    setLoad(true);
    try {
      const response = await axios.get("https://api.nasa.gov/planetary/apod",{
        params:{
          api_key: 'Y06czpykESddBRa4cIbgjswg6QE6oHhSysYiZTNg',
        },
      });

      setMedia(response.data.url);
      setTitle(response.data.title);
      setExplanation(response.data.explanation);
      setTypeMedia(response.data.media_type);
    } catch (error) {
      console.error('Error al conectar con la api', error);
    } finally{
      setLoad(false);
    }
  };

  useEffect(()=>{
    todayMedia();
  },[]);

  return(
    <div className="container-title">
      <video className="video-ppal" src="../assets/nasagif10.gif"></video>
      <h1>Bienvenidos a la página de la NASA_PIO</h1>
      <p>
        Un lugar para amantes de la astronomía
      </p>
      {load && <p>Cargando la foto del día ... </p>}
      {!load && (
        <div>
          <h3>{title}</h3>
          {typeMedia === 'image' &&(
            <img src={media} alt={title}/>
          )}
          {typeMedia=== 'video'&&(
            <iframe width="560" height="315" src={media} title={title} allowFullScreen ></iframe>
          )}
          <p>{explanation}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
