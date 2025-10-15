import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Nosotras", href: "/nosotras" },
    { name: "Misión y Visión", href: "/mision-vision" },
    { name: "Foro", href: "/foro" },
    { name: "Testimonios", href: "/testimonios" },
    { name: "Contáctanos", href: "/contacto" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-orange-50">
      { }
      <header className="bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            { }
            <Link to="/" className="flex items-center space-x-2">
              { }
              <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl">🐱</span>
              </div>
              <span className="font-bold text-xl tracking-wide">
                Sembrando Conocimientos
              </span>
            </Link>

            { }
            <div className="hidden md:flex space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "border-b-2 border-white text-white"
                      : "text-orange-100 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            { }
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          { }
          {isMenuOpen && (
            <div className="md:hidden bg-orange-100 text-orange-800 rounded-lg mt-2 shadow-md">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 text-sm font-medium ${
                    isActive(item.href)
                      ? "bg-orange-300"
                      : "hover:bg-orange-200 transition-colors"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>

      { }
      <main className="flex-1 py-8">{children}</main>

      { }
      <footer className="bg-orange-500 text-white py-10 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            { }
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">🐱</span>
                </div>
                <span className="font-bold text-xl">
                  Sembrando Conocimientos
                </span>
              </div>
              <p className="text-orange-100">
                🌱 Promoviendo el aprendizaje y el crecimiento de nuestras
                comunidades a través del conocimiento compartido.
              </p>
            </div>

            { }
            <div>
              <h4 className="font-semibold mb-4">Explora</h4>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-orange-100 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            { }
            <div>
              <h4 className="font-semibold mb-4">Contáctanos</h4>
              <p className="text-orange-100">📧 contacto@sembrandoconocimientos.com</p>
              <p className="text-orange-100">📱 +51 999 999 999</p>
              <p className="text-orange-100">🌐 sembrandoconocimientos.pe</p>
            </div>
          </div>

          <div className="border-t border-orange-300 mt-8 pt-4 text-center text-orange-100">
            © 2025 Sembrando Conocimientos. Todos los derechos reservados 🌻
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
