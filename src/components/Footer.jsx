import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";

export default function Footer() {
  const services = [
    { name: "Diseño Web", link: "#services" },
    { name: "Telecomunicaciones", link: "#services" },
    { name: "Call Center", link: "#services" },
    { name: "Sistemas PBX", link: "#services" },
    { name: "Desarrollo Full Stack", link: "#services" },
    { name: "CCTV y Seguridad", link: "#services" },
  ];

  const company = [
    { name: "Sobre Mí", link: "#about" },
    { name: "Proyectos", link: "#projects" },
    { name: "Testimonios", link: "#testimonials" },
    { name: "Blog", link: "#blog" },
    { name: "Contacto", link: "#contact" },
    { name: "Políticas", link: "#privacy" },
  ];

  const contactInfo = [
    { icon: <FiMail className="mr-2" />, text: "cmlandaeta@gmail.com.com" },
    { icon: <FiPhone className="mr-2" />, text: "+58 424 221 795" },
    { icon: <FiMapPin className="mr-2" />, text: "Caracas, Venezuela" },
    {
      icon: <FiClock className="mr-2" />,
      text: "Lun - Vie: 8:00 - 18:00",
    },
  ];

  const contactMethods = [
    {
      icon: <FaLinkedin className="text-xl" />,

      link: "https://www.linkedin.com/in/carlos-landaeta-dev/",
    },

    {
      icon: <FaInstagram className="text-xl" />,

      link: "https://www.instagram.com/landaetacm/",
    },
    {
      icon: <FaGithub className="text-xl" />,

      link: "https://github.com/cmlandaeta",
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Columna 1: Logo y descripción */}
          <div>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-white">
                Carlos Landaeta
              </span>
            </div>
            <p className="mb-6">
              Soluciones tecnológicas integrales para potenciar tu negocio y
              optimizar tus procesos.
            </p>
            <div className="flex space-x-4">
              {contactMethods.map((contact, index) => (
                <ul key={index}>
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {contact.icon}
                  </a>
                </ul>
              ))}
            </div>
          </div>

          {/* Columna 2: Servicios */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">
              Servicios
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.link}
                    className="hover:text-white transition-colors flex items-center"
                  >
                    <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Empresa */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">
              Empresa
            </h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="hover:text-white transition-colors flex items-center"
                  >
                    <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">
              Contacto
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-gray-400 mt-1">{info.icon}</span>
                  <span>{info.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Carlos Landaeta. Todos los
              derechos reservados.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              Términos de Servicio
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
