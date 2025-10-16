import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[80vh] bg-gradient-to-b from-orange-100 to-orange-50 px-6 py-16">
      
      {/* HERO */}
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-800 mb-6">
          Bienvenid@s a{" "}
          <span className="text-orange-600">Sembrando Conocimientos</span>
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Un espacio donde cultivamos ideas, compartimos aprendizajes y crecemos junt@s.
        </p>
      </div>

      {/* IMAGEN PRINCIPAL */}
      <div className="mt-12">
        <img
          src="/assets/img/ChatGPT Image 21 sept 2025, 19_46_22.png"
          alt="Logo principal de Sembrando Conocimientos"
          className="w-48 h-48 rounded-full shadow-lg border-4 border-orange-300"
        />
      </div>

      {/* FOOTER (solo para esta vista) */}
      <footer className="mt-16 text-orange-700 text-sm">
        © 2025 Sembrando Conocimientos | Todos los derechos reservados 🌱
      </footer>
    </div>
  );
};

export default Home;
