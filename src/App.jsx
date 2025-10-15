import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./pages/Home";
import Nosotras from "./pages/Nosotras";
import MisionVision from "./pages/MisionVision";
import Testimonios from "./pages/Testimonios";
import Foro from "./pages/Foro"
import Contacto from "./pages/Contacto";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Nosotras" element={<Nosotras />} />
          <Route path="/MisionVision" element={<MisionVision />} />
          <Route path="/Testimonios" element={<Testimonios/>} />
          <Route path="/Foro" element={<Foro />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
