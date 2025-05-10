import { useEffect } from "react";
import axios from "axios";

function CaptureVisit() {
  useEffect(() => {
    // Llamada a la API para obtener datos del usuario

    const backUrl = import.meta.env.VITE_BK_URL + "/send-visit-data2";
    //const backUrl = "http://localhost:8000/send-visit-data";

    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        const visitorData = {
          ip: response.data.ip,
          country: response.data.country_name,
          city: response.data.city,
          region: response.data.region,
          timezone: response.data.timezone,
          latitude: response.data.latitude,
          longitude: response.data.longitude,
          time: new Date().toLocaleString(), // Hora local del visitante
          org: response.data.org,
          from: "Publicidad Portafolio",
          bg:#e7350e ,
          
        };

        // Enviar los datos al backend para el envío del correo
        axios
          .post(backUrl, visitorData)
          .then((response) => {
            console.log("S->");
          })
          .catch((error) => {
            console.error("Error al enviar los datos", error);
          });
      })
      .catch((error) => {
        console.error("Error al obtener los datos del usuario", error);
      });
  }, []);

  return null; // Este componente no necesita mostrar nada
}

export default CaptureVisit;
