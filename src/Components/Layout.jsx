import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-orange-50 text-gray-800">
      {/* HEADER */}
      <header className="bg-orange-200 text-orange-900 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <div className="flex items-center space-x-3">
            <img
              src="./assets/img/logo.png"
              alt="Logo"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-bold text-lg">Sembrando Conocimientos</span>
          </div>

          <nav>
            <ul className="flex space-x-6 font-medium">
              <li><Link to="/" className="hover:text-orange-600">Inicio</Link></li>
              <li><Link to="/Nosotras" className="hover:text-orange-600">Nosotras</Link></li>
              <li><Link to="/Mision-vision" className="hover:text-orange-600">Misión y Visión</Link></li>
              <li><Link to="/Foro" className="hover:text-orange-600">Foro</Link></li>
              <li><Link to="/Testimonios" className="hover:text-orange-600">Testimonios</Link></li>
              <li><Link to="/Contactanos" className="hover:text-orange-600">Contáctanos</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* CONTENIDO */}
      <main className="flex-grow">{children}</main>

      {/* FOOTER */}
      <footer className="bg-orange-200 text-center py-3 text-sm text-orange-800">
        © 2025 Sembrando Conocimientos 🌱 — Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default Layout;
