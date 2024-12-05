import "../App.css"
import Hero from "../components/Hero";
import ContentDay from "../components/ContentDay";
import SearchBar from "../components/SearchBar";

function Home(){
  
  return(
    <div>
      <Hero />
      <SearchBar/>
      {/* <div className="container-like">
        <div className="like-this">
          <h2>See more images</h2>
        </div>
      </div> */}
      <ContentDay />
    </div>
  );
};

export default Home;
