import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

// Importa los estilos de Swiper
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function Hero() {
  // Slides data
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Soluciones en Telecomunicaciones",
      subtitle: "Infraestructura, PBX, IVR y más",
      cta: "Conoce nuestros servicios",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Desarrollo Web Personalizado",
      subtitle: "Frontend y Backend a medida",
      cta: "Contáctanos",
    },
    {
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      title: "Sistemas de Seguridad",
      subtitle: "CCTV y Control de Acceso",
      cta: "Más información",
    },
    {
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      title: "Automatización de Procesos",
      subtitle: "Aumenta la eficiencia de tu negocio",
      cta: "Descubre cómo",
    },
  ];

  return (
    <section className="relative h-screen max-h-[800px]">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        pagination={{
          clickable: true,
          el: ".hero-pagination",
          bulletClass: "hero-bullet",
          bulletActiveClass: "hero-bullet-active",
        }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Imagen de fondo con overlay */}
              <div
                className="absolute inset-0 bg-black/40 z-10"
                style={{
                  background:
                    "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)",
                }}
              ></div>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />

              {/* Contenido del slide */}
              <div className="absolute inset-0 z-20 flex items-center">
                <div className="container mx-auto px-4 text-white">
                  <div
                    className="max-w-2xl"
                    data-swiper-parallax="-300"
                    data-swiper-parallax-duration="600"
                  >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 opacity-90">
                      {slide.subtitle}
                    </p>
                    <div className="flex gap-4">
                      <a
                        href="#services"
                        className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300"
                      >
                        {slide.cta}
                      </a>
                      <a
                        href="#contact"
                        className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300"
                      >
                        Contacto
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Paginación personalizada */}
      <div className="container mx-auto px-4">
        <div className="hero-pagination absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-2"></div>
      </div>

      {/* Efecto de scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 hidden md:block">
        <div className="animate-bounce w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white mt-2 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
