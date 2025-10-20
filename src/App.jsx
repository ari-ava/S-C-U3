import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../src/Components/Layout.jsx" 
import Home from "../src/pages/Home.jsx"
import Nosotras from "../src/pages/Nosotras.jsx";
import MisionVision from "../src/pages/MisionVision.jsx";
import Testimonios from "../src/pages/Testimonios.jsx";
import Foro from "../src/pages/Foro.jsx";
import Contactanos from "../src/pages/Contactanos.jsx";

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
