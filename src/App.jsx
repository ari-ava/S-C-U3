import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";

import Home from "./pages/Home.jsx";
import Nosotras from "./pages/Nosotras.jsx";
import MisionVision from "./pages/MisionVision.jsx";
import Testimonios from "./pages/Testimonios.jsx";
import Foro from "./pages/Foro";
import Contactanos from "./pages/Contactanos.jsx";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
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
