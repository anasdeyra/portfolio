import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import About from "./Components/Pages/About/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
