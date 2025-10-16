<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react";
import products from "./data/products";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import ProductList from "./components/ProductList";

function App() {
  const [searchText, setSearchText] = useState("");
  const [colorFilter, setColorFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesColor = !colorFilter || product.color === colorFilter;
    const matchesCategory = !categoryFilter || product.category === categoryFilter;
    return matchesSearch && matchesColor && matchesCategory;
  });

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>📚 Catálogo Académico</h1>
      <SearchBar onSearch={setSearchText} />
      <Filters onColorChange={setColorFilter} onCategoryChange={setCategoryFilter} />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;





import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./pages/Home";
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Inicio from "./pages/Inicio";
>>>>>>> 21afdb0 (pruebas)
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./pages/Home";
>>>>>>> 01bd04b (---)
import Nosotras from "./pages/Nosotras";
import MisionVision from "./pages/MisionVision";
import Testimonios from "./pages/Testimonios";
import Foro from "./pages/Foro";
import Contactanos from "./pages/Contactanos"

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
