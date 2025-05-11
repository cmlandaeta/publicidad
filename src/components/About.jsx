import {
  FaCheckCircle,
  FaUserTie,
  FaLightbulb,
  FaHandshake,
  FaChartLine,
  FaProjectDiagram,
  FaAward,
} from "react-icons/fa";
import { FiCode, FiServer, FiSettings, FiClock } from "react-icons/fi";

export default function About() {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Video de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video/video.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
        <div className="absolute inset-0 bg-blue-900/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Quién te ayudará con tu solicitud?
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Conoce al profesional que estará contigo en cada paso del proceso
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Sección de elementos visuales */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              {/* 2. Estadísticas */}
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 ">
                <div className="text-center mb-6">
                  <FaUserTie className="text-4xl text-white mx-auto mb-3" />
                  <h4 className="text-white text-xl font-bold">
                    Carlos Landaeta
                  </h4>
                  <p className="text-blue-200">Consultor Tecnológico</p>
                </div>
              </div>

              {/* 1. Infografía de Habilidades */}
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <div className="flex justify-center text-blue-300 mb-3">
                  <FiCode className="text-2xl" />
                </div>
                <h4 className="text-white text-center text-sm font-semibold mb-2">
                  Mis Especialidades
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {["Full Stack Dev", "Linux", "VoIP", "CCTV"].map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center justify-center"
                    >
                      <FaCheckCircle className="text-blue-300 text-xs mr-1" />
                      <span className="text-white text-xs">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Timeline */}
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 col-span-2">
                <div className="flex justify-center text-blue-300 mb-3">
                  <FiClock className="text-2xl" />
                </div>
                <h4 className="text-white text-center text-sm font-semibold mb-3">
                  Mi Trayectoria
                </h4>
                <div className="flex justify-between text-xs">
                  <span className="text-blue-300">2008</span>
                  <span className="text-blue-300">2012</span>
                  <span className="text-blue-300">2016</span>
                  <span className="text-blue-300">2020</span>
                  <span className="text-blue-300">Ahora</span>
                </div>
                <div className="w-full bg-blue-900/40 h-1 rounded-full mt-1 mb-2">
                  <div className="bg-blue-400 h-1 rounded-full w-full"></div>
                </div>
              </div>

              {/* 4. Certificaciones */}
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 col-span-2">
                <div className="flex justify-center text-blue-300 mb-3">
                  <FaAward className="text-2xl" />
                </div>
                <h4 className="text-white text-center text-sm font-semibold mb-2">
                  Certificaciones
                </h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {["Redes", "Linux", "Python", "VoIP", "CCTV"].map((cert) => (
                    <span
                      key={cert}
                      className="text-white bg-blue-900/40 px-2 py-1 rounded-full text-xs"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sección de texto */}
          <div className="lg:w-1/2 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Hola, soy <span className="text-blue-300">Carlos Landaeta</span>
            </h3>

            <p className="text-lg mb-6 text-blue-100">
              Especialista en soluciones tecnológicas con más de 15 años de
              experiencia ayudando a empresas a optimizar sus procesos mediante
              innovación tecnológica.
            </p>

            <p className="text-lg mb-8 text-blue-100">
              Mi enfoque se basa en entender profundamente las necesidades de
              cada cliente para ofrecer soluciones personalizadas que generen
              resultados tangibles.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <FaCheckCircle className="text-blue-300 text-xl mt-1 flex-shrink-0" />
                <p className="text-blue-100">
                  <strong className="text-white">
                    Experiencia certificada:
                  </strong>{" "}
                  Profesional con certificaciones en Full Stack, Linux, Python,
                  CCTV, Redes, Telefonia VOIP y Tradicional.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaLightbulb className="text-blue-300 text-xl mt-1 flex-shrink-0" />
                <p className="text-blue-100">
                  <strong className="text-white">Innovador:</strong> Combino lo
                  último en tecnología con soluciones prácticas y funcionales.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaHandshake className="text-blue-300 text-xl mt-1 flex-shrink-0" />
                <p className="text-blue-100">
                  <strong className="text-white">Compromiso total:</strong>{" "}
                  Acompañamiento personalizado desde el diseño hasta la
                  implementación.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300"
              >
                Contáctame ahora
              </a>
              <a
                href="#services"
                className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300"
              >
                Ver mis servicios
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
