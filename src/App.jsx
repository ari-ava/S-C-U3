import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./pages/Home";
import Nosotras from "./pages/Nosotras";
import MisionVision from "./pages/MisionVision";
import Testimonios from "./pages/Testimonios";
import Foro from "./pages/Foro";
import Contactanos from "./pages/Contactanos";

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
          <Route path="/Contactanos" element={<Contactanos />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
