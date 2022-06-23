import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Gallery from "./components/pages/gallery/Gallery";
import Navbar from "./components/features/navbar/Navbar";
import Header from "./components/features/header/Header";

function App() {
  return (
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
