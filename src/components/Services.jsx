import {
  FiCode,
  FiServer,
  FiPhone,
  FiSettings,
  FiBarChart2,
  FiVideo,
  FiLock,
  FiCpu,
  FiZap,
} from "react-icons/fi";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Diseño de Páginas Web",
      description:
        "Desarrollo de sitios web modernos, responsivos y optimizados para SEO que representan tu marca profesionalmente.",
      icon: <FiCode className="text-3xl" />,
      color: "text-purple-600",
      benefits: [
        "Diseño 100% responsive",
        "Optimización SEO integrada",
        "Tiempos de carga rápidos",
      ],
    },
    {
      title: "Asesoría en Telecomunicaciones",
      description:
        "Soluciones personalizadas en infraestructura de redes y comunicaciones para optimizar tus operaciones.",
      icon: <FiServer className="text-3xl" />,
      color: "text-blue-600",
      benefits: [
        "Análisis de infraestructura",
        "Planificación escalable",
        "Soporte técnico especializado",
      ],
    },
    {
      title: "Infraestructura de Call Center",
      description:
        "Sistemas completos para centros de contacto con tecnología de punta, reporting avanzado y deteccion de Buzones de Voz..",
      icon: <FiPhone className="text-3xl" />,
      color: "text-green-600",
      benefits: [
        "Integración con CRM",
        "Reportes en tiempo real",
        "Alta disponibilidad",
      ],
    },
    {
      title: "Administración de PBX",
      description:
        "Configuración y mantenimiento de centrales telefónicas empresariales con máxima eficiencia.",
      icon: <FiSettings className="text-3xl" />,
      color: "text-yellow-600",
      benefits: [
        "Configuraciones avanzadas",
        "Monitoreo 24/7",
        "Actualizaciones periódicas",
      ],
    },
    {
      title: "Creación de IVR",
      description:
        "Diseño de menús interactivos personalizados para mejorar la experiencia del cliente.",
      icon: <FiBarChart2 className="text-3xl" />,
      color: "text-red-600",
      benefits: [
        "Flujos personalizados",
        "Integración con bases de datos",
        "Integracion con Agentes IA",
      ],
    },
    {
      title: "Sistemas de Inventario",
      description:
        "Soluciones de gestión de inventario con generación de reportes estadísticos en tiempo real.",
      icon: <FiCpu className="text-3xl" />,
      color: "text-indigo-600",
      benefits: [
        "Control de stock preciso",
        "Alertas automáticas",
        "Integración con puntos de venta",
      ],
    },
    {
      title: "CCTV y Control de Acceso",
      description:
        "Sistemas de seguridad integrados con análisis inteligente y monitoreo remoto.",
      icon: <FiVideo className="text-3xl" />,
      color: "text-pink-600",
      benefits: [
        "Grabación en la nube",
        "Reconocimiento facial",
        "Alertas en tiempo real",
      ],
    },
    {
      title: "Desarrollo Full Stack",
      description:
        "Aplicaciones web completas con arquitectura escalable y alto rendimiento.",
      icon: <FiCode className="text-3xl" />,
      color: "text-teal-600",
      benefits: [
        "Tecnologías modernas",
        "Arquitectura escalable",
        "Pruebas automatizadas",
      ],
    },
    {
      title: "Automatización de Procesos",
      description:
        "Implementación de RPA y sistemas inteligentes para aumentar tu productividad.",
      icon: <FiZap className="text-3xl" />,
      color: "text-orange-600",
      benefits: [
        "Reducción de errores",
        "Ahorro de tiempo",
        "Integración con sistemas existentes",
      ],
    },
  ];
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Soluciones Profesionales
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Servicios tecnológicos diseñados para impulsar tu negocio al
            siguiente nivel
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="p-6">
                <div
                  className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 ${service.color} bg-opacity-10`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Saber más
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {service.benefits.map((benefit, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
          >
            ¿Necesitas una solución personalizada?
          </a>
        </div>
      </div>
    </section>
  );
}
