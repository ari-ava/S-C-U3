import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Inicio from "./pages/Inicio";
import Nosotras from "./pages/Nosotras";
import MisionVision from "./pages/MisionVision";
import Foro from "./pages/Foro";
import Testimonios from "./pages/Testimonios";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Inicio />
            </Layout>
          }
        />
        <Route
          path="/nosotras"
          element={
            <Layout>
              <Nosotras />
            </Layout>
          }
        />
        <Route
          path="/mision-vision"
          element={
            <Layout>
              <MisionVision />
            </Layout>
          }
        />
        <Route
          path="/foro"
          element={
            <Layout>
              <Foro />
            </Layout>
          }
        />
        <Route
          path="/testimonios"
          element={
            <Layout>
              <Testimonios />
            </Layout>
          }
        />
        <Route
          path="/contacto"
          element={
            <Layout>
              <Contacto />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
