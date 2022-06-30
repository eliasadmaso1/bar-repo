import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Gallery from "./components/pages/gallery/Gallery";
import Navbar from "./components/features/navbar/Navbar";
import Footer from "./components/features/footer/Footer";
import Menu from "./components/pages/menu/Menu";
import Feedback from './components/pages/feedback/FeedBack';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route exact path="/bar-repo" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/feedback" element={<Feedback />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
