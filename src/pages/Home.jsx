import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import featuresData from "../data/features.json";
import testimonialsData from "../data/testimonials.json";
import coursesData from "../data/courses.json";

const Inicio = () => {
  const [features, setFeatures] = useState([]);
  const [stats, setStats] = useState(null);
  const [testimonials, setTestimonials] = useState([]);
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulación de carga de datos
    setTimeout(() => {
      setFeatures(featuresData.features);
      setStats(featuresData.stats);
      setTestimonials(testimonialsData.slice(0, 3)); // Solo 3 testimonios
      setFeaturedCourses(
        coursesData.filter((course) => course.featured).slice(0, 3)
      );
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando contenido...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* 🌱 Hero Section */}
      <section className="bg-gradient-to-r from-orange-400 to-yellow-300 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="fade-in">
            <h1 className="text-5xl font-bold mb-6">
              Bienvenida a <span className="text-green-800">Sembrando Conocimientos</span>
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Una comunidad educativa donde compartimos ideas, experiencias y aprendizajes para crecer juntas 🌿.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/foro"
                className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
              >
                🌸 Ir al Foro
              </Link>
              <Link
                to="/nosotras"
                className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition"
              >
                Conócenos
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <img
              src="/assets/hero-girl.png"
              alt="Educación y crecimiento"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* 🌾 Estadísticas */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Juntas hemos logrado grandes cosas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-orange-500">{stats.activeUsers}</div>
              <p className="text-gray-600">Participantes Activas</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-500">{stats.successRate}</div>
              <p className="text-gray-600">Proyectos Completados</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500">{stats.averageImprovement}</div>
              <p className="text-gray-600">Talleres Realizados</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-500">{stats.coursesCompleted}</div>
              <p className="text-gray-600">Iniciativas Educativas</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🌻 Cursos o Actividades Destacadas */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            🌟 Actividades Destacadas
          </h2>
          <p className="text-gray-600 mb-10">
            Aprende, comparte y crece junto a otras personas apasionadas por el conocimiento.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{course.description}</p>
                <Link
                  to="/foro"
                  className="text-orange-600 font-semibold hover:underline"
                >
                  Participar →
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/foro"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition"
            >
              Ver más actividades
            </Link>
          </div>
        </div>
      </section>

      {/* 🌼 Testimonios */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-yellow-400 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">💬 Historias que Inspiran</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <p className="italic mb-3">"{t.comment}"</p>
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-sm text-white/80">{t.role}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/contactanos"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              📝 Comparte tu experiencia
            </Link>
          </div>
        </div>
      </section>

      {/* 🌸 CTA final */}
      <section className="py-20 bg-green-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          ¿Lista para sembrar conocimiento con nosotras?
        </h2>
        <p className="text-lg mb-8">
          Únete a Sembrando Conocimientos y comparte tu pasión por aprender.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/contactanos"
            className="bg-white text-green-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Contáctanos
          </Link>
          <Link
            to="/misionvision"
            className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-green-700 transition"
          >
            Nuestra Misión y Visión
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
