import {
  FaPhoneAlt,
  FaClock,
  FaLinkedin,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Lógica de envío del formulario
    console.log(data);
  };

  const contactMethods = [
    {
      icon: <FaPhoneAlt className="text-2xl" />,
      title: "Contacto Directo",
      content: "+58 424 221 1795",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Oficina Principal",
      content: "Caracas, Venezuela",
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "WhatsApp Business",
      content: "+58 424 221 1795",
      link: "https://wa.me/+584242211795",
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Horario de Atención",
      content: "Lun-Vie: 8:00 - 18:00",
    },
  ];
  const contactMethods2 = [
    {
      icon: <FaLinkedin className="text-2xl" />,
      link: "https://www.linkedin.com/in/carlos-landaeta-dev/",
      class: "hover:text-blue-600 transition-colors",
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      link: "https://www.linkedin.com/in/carlos-landaeta-dev/",
      class: "hover:text-green-600 transition-colors",
    },
  ];
  // Marcas con las que trabajas
  const partnerBrands = [
    { name: "Hikvision", logo: "/brands/hikvision.jpg" },
    { name: "Ubiquiti", logo: "/brands/ubiquiti.png" },
    { name: "MikroTik", logo: "/brands/mikrotik.png" },
    { name: "Cisco", logo: "/brands/cisco.png" },
    { name: "Asterisk", logo: "/brands/asterisk.png" },
    { name: "FreeSWITCH", logo: "/brands/freeswitch.png" },
    { name: "Grandstream", logo: "/brands/grandstream.png" },
    { name: "Yealink", logo: "/brands/yealink.png" },
    { name: "Dahua", logo: "/brands/dahua.png" },
    { name: "3CX", logo: "/brands/3cx.png" },
    { name: "Issabel PBX", logo: "/brands/issabel.png" },
    { name: "Vicidial", logo: "/brands/vicidial.png" },
  ];

  return (
    <section id="contact" className="relative py-20 bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Hablemos sobre tu proyecto
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Completa el formulario o utiliza nuestros canales directos.
            Responderemos en menos de 24 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-blue-600 p-3 bg-blue-50 rounded-lg">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">
                        {method.title}
                      </h3>
                      {method.link ? (
                        <a
                          href={method.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {method.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{method.content}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Sección de Marcas */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                Marcas con las que trabajamos
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {partnerBrands.map((brand, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center p-3"
                  >
                    <div className="h-16 w-16 flex items-center justify-center">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-xs text-gray-600 mt-2 text-center">
                      {brand.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="flex justify-center gap-6 pt-8">
              {contactMethods2.map((contact, index) => (
                <ul key={index}>
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-60 ${contact.class} `}
                    aria-label="LinkedIn"
                  >
                    {contact.icon}
                  </a>
                </ul>
              ))}
            </div>
          </div>

          {/* Formulario */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-xl border border-gray-100"
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: true })}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    Este campo es requerido
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    Ingrese un email válido
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone")}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  rows="5"
                  {...register("message", { required: true })}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    Este campo es requerido
                  </p>
                )}
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="privacy"
                  {...register("privacy", { required: true })}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                  Acepto la política de privacidad
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
              >
                Enviar Mensaje
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
