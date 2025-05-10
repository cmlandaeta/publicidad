import {
  FaCheckCircle,
  FaUserTie,
  FaLightbulb,
  FaHandshake,
} from "react-icons/fa";

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
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="Carlos Landaeta"
                className="rounded-lg shadow-2xl w-full max-w-md border-4 border-white/30"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                <FaUserTie className="text-3xl" />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Hola, soy <span className="text-blue-300">Carlos Landaeta</span>
            </h3>

            <p className="text-lg mb-6 text-blue-100">
              Especialista en soluciones tecnológicas con más de X años de
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
                  Profesional con certificaciones en Full Stack, Linux, Python
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaLightbulb className="text-blue-300 text-xl mt-1 flex-shrink-0" />
                <p className="text-blue-100">
                  <strong className="text-white">Enfoque innovador:</strong>{" "}
                  Combino lo último en tecnología con soluciones prácticas y
                  funcionales
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaHandshake className="text-blue-300 text-xl mt-1 flex-shrink-0" />
                <p className="text-blue-100">
                  <strong className="text-white">Compromiso total:</strong>{" "}
                  Acompañamiento personalizado desde el diseño hasta la
                  implementación
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
