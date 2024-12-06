import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Marsphotos from "./pages/MarsPhotos";

import "./App.css";


function App() {
  
  return(
    <BrowserRouter>
      <Header/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path='#mars-photos"' element ={<Marsphotos/>}/>
          </Routes>
    </BrowserRouter>
  );
};

export default App
