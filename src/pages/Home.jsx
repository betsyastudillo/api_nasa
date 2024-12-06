import "../App.css"
import Hero from "../components/Hero";
import ContentDay from "../components/ContentDay";
import MarsPhotos from "./MarsPhotos";

function Home(){
  
  
  return(
    <div>
      <Hero />
      <MarsPhotos />
      <ContentDay />
    </div>
  );
};

export default Home;
