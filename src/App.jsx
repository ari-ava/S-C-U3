import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Inicio from "./pages/Inicio";
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
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotras" element={<Nosotras />} />
          <Route path="/mision-vision" element={<MisionVision />} />
          <Route path="/testimonios" element={<Testimonios />} />
          <Route path="/foro" element={<Foro />} />
          <Route path="/contactanos" element={<Contactanos />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
