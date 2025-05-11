import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiCode } from "react-icons/fi"; // Icono para tu título profesional
const ws = "https://wa.me/+584242211795";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);

      // Detectar sección activa
      const sections = ["home", "services", "about", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* WhatsApp flotante */}
      <a
        href={ws}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 sm:mr-4 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 "
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {/* Header principal */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <a
              href="#home"
              className={`transition-colors duration-300 ${
                scrolled ? "text-blue-600" : "text-white"
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              <div className="flex items-center">
                <FiCode
                  className={`text-2xl mr-2 ${
                    scrolled ? "text-blue-600" : "text-white"
                  }`}
                />
                <div>
                  <div className="text-xl font-bold leading-tight">
                    Carlos Landaeta
                  </div>
                  <div
                    className={`text-xs font-medium ${
                      scrolled ? "text-gray-600" : "text-white/80"
                    }`}
                  >
                    Software Engineer | Full Stack Developer
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                scrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/20"
              }`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`font-medium transition-colors duration-300 ${
                activeSection === "home"
                  ? "text-blue-600"
                  : scrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`font-medium transition-colors duration-300 ${
                activeSection === "services"
                  ? "text-blue-600"
                  : scrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`font-medium transition-colors duration-300 ${
                activeSection === "about"
                  ? "text-blue-600"
                  : scrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Sobre Mí
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`font-medium transition-colors duration-300 ${
                activeSection === "contact"
                  ? "text-blue-600"
                  : scrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Contacto
            </button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className={`md:hidden py-2 px-4 shadow-lg transition-all duration-300 ${
              scrolled ? "bg-white" : "bg-gray-900/90 backdrop-blur-md"
            }`}
          >
            <button
              onClick={() => scrollToSection("home")}
              className={`block py-2 w-full text-left ${
                activeSection === "home"
                  ? "text-blue-600"
                  : scrolled
                  ? "text-gray-300 hover:text-blue-600"
                  : "text-white hover:text-blue-400"
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`block py-2 w-full text-left ${
                activeSection === "services"
                  ? "text-blue-600"
                  : scrolled
                  ? "text-gray-300 hover:text-blue-600"
                  : "text-white hover:text-blue-400"
              }`}
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`block py-2 w-full text-left ${
                activeSection === "about"
                  ? "text-blue-600"
                  : scrolled
                  ? "text-gray-300 hover:text-blue-600"
                  : "text-white hover:text-blue-400"
              }`}
            >
              Sobre Mí
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`block py-2 w-full text-left ${
                activeSection === "contact"
                  ? "text-blue-600"
                  : scrolled
                  ? "text-gray-300 hover:text-blue-600"
                  : "text-white hover:text-blue-400"
              }`}
            >
              Contacto
            </button>
          </div>
        )}
      </header>
    </>
  );
}
