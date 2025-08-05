"use client"
import { Badge } from "@/components/ui/badge"
import type React from "react"

import {
  Clock,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Star,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  ExternalLink,
} from "lucide-react"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState } from "react"

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTestimonioSlide, setCurrentTestimonioSlide] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Función para manejar la navegación suave
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false) // Cerrar menú móvil
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const aliados = [
    [
      {
        src: "https://www.uniajc.edu.co/wp-content/uploads/2023/08/Pma.png",
        alt: "PMA - Programa de Mejoramiento Académico",
        title: "PMA",
      },
      {
        src: "https://www.uniajc.edu.co/wp-content/uploads/2023/08/radio.png",
        alt: "Radio UNIAJC",
        title: "Radio UNIAJC",
      },
      {
        src: "https://www.uniajc.edu.co/wp-content/uploads/2016/12/Vicerrectoria-.png",
        alt: "Vicerrectoría Académica",
        title: "Vicerrectoría Académica",
      },
      {
        src: "https://www.uniajc.edu.co/wp-content/uploads/2016/12/bienestar.png",
        alt: "Bienestar Universitario",
        title: "Bienestar Universitario",
      },
    ],
    [
      {
        src: "https://www.uniajc.edu.co/wp-content/uploads/2023/08/Biblioteca.png",
        alt: "Biblioteca",
        title: "Biblioteca",
      },
      {
        src: "https://www.uniajc.edu.co/wp-content/uploads/2023/08/centro_idiomas.png",
        alt: "Centro de Idiomas",
        title: "Centro de Idiomas",
      },
      {
        src: "https://www.uniajc.edu.co/wp-content/uploads/2016/12/ID-UVI-Unicamacho-Azul.png",
        alt: "UNIAJC Virtual",
        title: "UNIAJC Virtual",
      },
      {
        src: "https://www.uniajc.edu.co/wp-content/uploads/2016/12/Ple.png",
        alt: "PLE",
        title: "PLE",
      },
    ],
  ]

  const testimonios = [
    {
      imagen: "https://www.uniajc.edu.co/wp-content/uploads/2017/03/Yulieth-FCE.jpg",
      nombre: "Julieth Vanessa Ortiz",
      titulo: "Egresada de Contaduría Pública",
      testimonio:
        "Mi carrera me enseño mucho ya que actualmente lo aplico constantemente en el ámbito personal y laboral. Gracias a la educación de la Institución Universitaria Antonio José Camacho he podido resolver muchos problemas y viviré muy agradecida con ella y los profesores porque gracias a ellos soy quien soy ahora.",
    },
    {
      imagen: "https://www.uniajc.edu.co/wp-content/uploads/2018/07/Dayana-Vanessa-FCE.jpg",
      nombre: "Dayana Vanessa López",
      titulo: "Egresada de Mercadeo y Negocios Internacionales",
      testimonio:
        "La Institución Universitaria Antonio José Camacho me aporto crecimiento en mi vida personal, familiar, profesional y laboral, esta me dio las bases para crecer a nivel económico y familiar, gracias a la UNIAJC",
    },
    {
      imagen: "https://www.uniajc.edu.co/wp-content/uploads/2017/02/Julieth-FEDV.jpg",
      nombre: "Julieth Carolina Restrepo Bedoya",
      titulo: "Egresada de la Especialización en Ergonomía",
      testimonio:
        "La especialización para mí fue una gran oportunidad para enfocarme en un área que es de gran interés y de poco conocimiento al nivel del mercado, es decir, es un plus para mi profesión, que complementa mi maestría como salubrista. Pienso que fue una oportunidad maravillosa de crecer, no tan solo como profesional, sino también como ser humano porque la Institución Universitaria Antonio José Camacho con su modelo humanista que lo permite.",
    },
    {
      imagen: "https://www.uniajc.edu.co/wp-content/uploads/2017/03/WhatsApp-Image-2025-04-29-at-4.02.29-PM.jpeg",
      nombre: "Silvia Vanessa Muñoz Ruíz",
      titulo: "Técnico Laboral en Información y Servicio al Cliente",
      testimonio:
        'La institución Universitaria Antonio José Camacho me abrió las puertas a la educación de la mano de un equipo profesoral inigualable, se encargaron de forjar conocimientos sólidos, con propuestas y escenarios que contribuyeron a mi formación del ser y el saber hacer. UNIAJC me dejó grandes enseñanzas y lazos inquebrantables, hoy disfruto de mi título como: "Técnico Laboral en Información y Servicio al Cliente" sintiéndome orgullosa de mi paso por la Universidad, lo cual me ha permitido aportar mis conocimientos en el ámbito en el que me desarrollo y deseando continuar con mi formación en la misma.',
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % aliados.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + aliados.length) % aliados.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextTestimonioSlide = () => {
    setCurrentTestimonioSlide((prev) => (prev + 1) % testimonios.length)
  }

  const prevTestimonioSlide = () => {
    setCurrentTestimonioSlide((prev) => (prev - 1 + testimonios.length) % testimonios.length)
  }

  const goToTestimonioSlide = (index: number) => {
    setCurrentTestimonioSlide(index)
  }

  const cronogramaNorte = [
    {
      fecha: "LUNES 11 DE AGOSTO 2025",
      titulo: "El pasado se ha ido",
      actividades: [
        {
          facultad: "Ciencias empresariales - Ciencias sociales y humanas",
          horario: "7:00 am",
          actividad: "El Viaje",
          area: "Bienestar",
          lugar: "Ágora Norte",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "Ciencias empresariales - Ciencias sociales y humanas",
          horario: "9:00 am",
          actividad: "Osadía",
          area: "UVI",
          lugar: "Ágora Norte",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "Ingenierías - Educación a distancia y virtual",
          horario: "10:00 am",
          actividad: "El Viaje",
          area: "Bienestar",
          lugar: "Ágora Norte",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "Ingenierías - Educación a distancia y virtual",
          horario: "12:00 pm",
          actividad: "Osadía",
          area: "UVI",
          lugar: "Ágora Norte",
          tipo: "Presencial",
          link: null,
        },
      ],
      estado: "completado",
    },
    {
      fecha: "MARTES 12 DE AGOSTO 2025",
      titulo: "Tienes que perder para aprender a ganar",
      actividades: [
        {
          facultad: "Ciencias empresariales - Ciencias sociales y humanas",
          horario: "7:00 am",
          actividad: "El Viaje",
          area: "Bienestar",
          lugar: "Ágora Norte",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "Ciencias empresariales - Ciencias sociales y humanas",
          horario: "9:00 am",
          actividad: "Osadía",
          area: "UVI",
          lugar: "Ágora Norte",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "Ingenierías - Educación a distancia y virtual",
          horario: "10:00 am",
          actividad: "El Viaje",
          area: "Bienestar",
          lugar: "Ágora Norte",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "Ingenierías - Educación a distancia y virtual",
          horario: "12:00 pm",
          actividad: "Osadía",
          area: "UVI",
          lugar: "Ágora Norte",
          tipo: "Presencial",
          link: null,
        },
      ],
      estado: "completado",
    },
    {
      fecha: "MIÉRCOLES 13 DE AGOSTO 2025",
      titulo: "Viví y aprendí de los tontos y los sabios",
      actividades: [
        {
          facultad: "Todas las Facultades",
          horario: "8:00 am",
          actividad: "Taller de Técnicas de Estudio",
          area: "Académica",
          lugar: "Aulas Múltiples Norte",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "Ciencias empresariales",
          horario: "10:00 am",
          actividad: "Presentación Plan de Estudios",
          area: "Decanatura",
          lugar: "Auditorio Norte",
          tipo: "Presencial",
          link: "https://meet.google.com/abc-defg-hij",
        },
        {
          facultad: "Ingenierías",
          horario: "2:00 pm",
          actividad: "Laboratorios Virtuales",
          area: "Tecnología",
          lugar: "Lab. Sistemas Norte",
          tipo: "Virtual",
          link: "https://meet.google.com/abc-defg-hij",
        },
      ],
      estado: "en-progreso",
    },
    {
      fecha: "JUEVES 14 DE AGOSTO 2025",
      titulo: "Canta conmigo aunque sea por hoy",
      actividades: [
        {
          facultad: "Todas las Facultades",
          horario: "9:00 am",
          actividad: "Taller Proyecto de Vida",
          area: "Bienestar",
          lugar: "Ágora Norte",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "Ciencias sociales y humanas",
          horario: "11:00 am",
          actividad: "Dinámicas de Integración",
          area: "Psicología",
          lugar: "Espacios Abiertos Norte",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "Educación a distancia",
          horario: "3:00 pm",
          actividad: "Plataforma Virtual",
          area: "Tecnología",
          lugar: "Virtual",
          tipo: "Virtual",
          link: "https://zoom.us/j/123456789",
        },
      ],
      estado: "pendiente",
    },
    {
      fecha: "VIERNES 15 DE AGOSTO 2025",
      titulo: "Sueña hasta que tus sueños se hagan realidad",
      actividades: [
        {
          facultad: "Todas las Facultades",
          horario: "8:00 am",
          actividad: "Conferencia de Liderazgo",
          area: "Rectoría",
          lugar: "Auditorio Principal Norte",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "Todas las Facultades",
          horario: "10:30 am",
          actividad: "Actividades Culturales",
          area: "Bienestar",
          lugar: "Plaza Central Norte",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "Todas las Facultades",
          horario: "2:00 pm",
          actividad: "Deportes y Recreación",
          area: "Deportes",
          lugar: "Canchas Norte",
          tipo: "Presencial",
          link: null,
        },
      ],
      estado: "pendiente",
    },
    {
      fecha: "SÁBADO 16 DE AGOSTO 2025",
      titulo: "Sigue soñando, sigue soñando, sigue soñando",
      actividades: [
        {
          facultad: "Todas las Facultades",
          horario: "9:00 am",
          actividad: "Feria de Servicios",
          area: "Administrativa",
          lugar: "Campus Norte Completo",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "Todas las Facultades",
          horario: "11:00 am",
          actividad: "Grupos Estudiantiles",
          area: "Bienestar",
          lugar: "Ágora Norte",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "Todas las Facultades",
          horario: "2:00 pm",
          actividad: "Evaluación y Cierre",
          area: "Académica",
          lugar: "Auditorio Norte",
          tipo: "Presencial",
          link: null,
        },
      ],
      estado: "pendiente",
    },
  ]

  const cronogramaSur = [
    {
      fecha: "LUNES 11 DE AGOSTO 2025",
      titulo: "El pasado se ha ido",
      actividades: [
        {
          facultad: "Ciencias empresariales - Ciencias sociales y humanas",
          horario: "7:00 am",
          actividad: "El Viaje",
          area: "Bienestar",
          lugar: "Ágora Norte",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "Ciencias empresariales - Ciencias sociales y humanas",
          horario: "9:00 am",
          actividad: "Osadía",
          area: "UVI",
          lugar: "Ágora Norte",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "Ingenierías - Educación a distancia y virtual",
          horario: "10:00 am",
          actividad: "El Viaje",
          area: "Bienestar",
          lugar: "Ágora Norte",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "Ingenierías - Educación a distancia y virtual",
          horario: "12:00 pm",
          actividad: "Osadía",
          area: "UVI",
          lugar: "Ágora Norte",
          tipo: "Presencial",
          link: null,
        },
      ],
      estado: "completado",
    },
    {
      fecha: "MARTES 12 DE AGOSTO 2025",
      titulo: "Tienes que perder para aprender a ganar",
      actividades: [
        {
          facultad: "Ciencias empresariales - Ciencias sociales y humanas",
          horario: "8:00 am",
          actividad: "Bienvenida Institucional",
          area: "Rectoría",
          lugar: "Auditorio Sur",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "Ciencias empresariales - Ciencias sociales y humanas",
          horario: "10:00 am",
          actividad: "El Viaje",
          area: "Bienestar",
          lugar: "Sala Múltiple Sur",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "Ingenierías - Educación a distancia y virtual",
          horario: "11:00 am",
          actividad: "Bienvenida Institucional",
          area: "Rectoría",
          lugar: "Auditorio Sur",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "Ingenierías - Educación a distancia y virtual",
          horario: "1:00 pm",
          actividad: "El Viaje",
          area: "Bienestar",
          lugar: "Sala Múltiple Sur",
          tipo: "Presencial",
          link: null,
        },
      ],
      estado: "completado",
    },
    {
      fecha: "MIÉRCOLES 13 DE AGOSTO 2025",
      titulo: "Viví y aprendí de los tontos y los sabios",
      actividades: [
        {
          facultad: "Todas las Facultades",
          horario: "9:00 am",
          actividad: "Orientación Académica",
          area: "Académica",
          lugar: "Aulas Sur",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "Ciencias empresariales",
          horario: "11:00 am",
          actividad: "Inducción Facultad",
          area: "Decanatura",
          lugar: "Sala de Juntas Sur",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "Ingenierías",
          horario: "3:00 pm",
          actividad: "Recorrido Laboratorios",
          area: "Tecnología",
          lugar: "Laboratorios Sur",
          tipo: "Presencial",
          link: null,
        },
      ],
      estado: "en-progreso",
    },
    {
      fecha: "JUEVES 14 DE AGOSTO 2025",
      titulo: "Canta conmigo aunque sea por hoy",
      actividades: [
        {
          facultad: "Todas las Facultades",
          horario: "8:30 am",
          actividad: "Taller de Adaptación",
          area: "Bienestar",
          lugar: "Sala Múltiple Sur",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "Ciencias sociales y humanas",
          horario: "10:30 am",
          actividad: "Actividades de Integración",
          area: "Psicología",
          lugar: "Patio Sur",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "Educación a distancia",
          horario: "2:30 pm",
          actividad: "Capacitación Virtual",
          area: "Tecnología",
          lugar: "Sala de Sistemas Sur",
          tipo: "Híbrido",
          link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting",
        },
      ],
      estado: "pendiente",
    },
    {
      fecha: "VIERNES 15 DE AGOSTO 2025",
      titulo: "Sueña hasta que tus sueños se hagan realidad",
      actividades: [
        {
          facultad: "Todas las Facultades",
          horario: "9:00 am",
          actividad: "Charla Motivacional",
          area: "Bienestar",
          lugar: "Auditorio Sur",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "Todas las Facultades",
          horario: "11:00 am",
          actividad: "Festival Cultural",
          area: "Cultura",
          lugar: "Patio Central Sur",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "Todas las Facultades",
          horario: "2:30 pm",
          actividad: "Actividades Deportivas",
          area: "Deportes",
          lugar: "Zona Deportiva Sur",
          tipo: "Presencial",
          link: null,
        },
      ],
      estado: "pendiente",
    },
    {
      fecha: "SÁBADO 16 DE AGOSTO 2025",
      titulo: "Sigue soñando, sigue soñando, sigue soñando",
      actividades: [
        {
          facultad: "Todas las Facultades",
          horario: "10:00 am",
          actividad: "Expo Servicios",
          area: "Administrativa",
          lugar: "Instalaciones Sur",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "Todas las Facultades",
          horario: "12:00 pm",
          actividad: "Presentación Grupos",
          area: "Bienestar",
          lugar: "Auditorio Sur",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "Todas las Facultades",
          horario: "3:00 pm",
          actividad: "Ceremonia de Cierre",
          area: "Rectoría",
          lugar: "Auditorio Sur",
          tipo: "Presencial",
          link: null,
        },
      ],
      estado: "pendiente",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen scroll-smooth">
      {/* Animated Dots Styles */}
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          25% { transform: translate(10px, -15px) scale(1.1); opacity: 1; }
          50% { transform: translate(-5px, -25px) scale(0.9); opacity: 0.8; }
          75% { transform: translate(15px, -10px) scale(1.05); opacity: 0.9; }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.8; }
          33% { transform: translate(-12px, 20px) scale(1.2); opacity: 1; }
          66% { transform: translate(8px, -15px) scale(0.8); opacity: 0.7; }
        }
        
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          20% { transform: translate(20px, 10px) scale(1.15); opacity: 0.9; }
          40% { transform: translate(-10px, -20px) scale(0.85); opacity: 1; }
          60% { transform: translate(15px, -5px) scale(1.1); opacity: 0.8; }
          80% { transform: translate(-5px, 15px) scale(0.95); opacity: 0.7; }
        }
        
        @keyframes float4 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.9; }
          50% { transform: translate(-20px, -30px) scale(1.3); opacity: 0.6; }
        }
        
        @keyframes float5 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          25% { transform: translate(25px, -10px) scale(0.7); opacity: 1; }
          75% { transform: translate(-15px, 25px) scale(1.4); opacity: 0.8; }
        }
        
        @keyframes float6 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          25% { transform: translate(10px, -15px) scale(1.1); opacity: 1; }
          50% { transform: translate(-5px, -25px) scale(0.9); opacity: 0.8; }
          75% { transform: translate(15px, -10px) scale(1.05); opacity: 0.9; }
        }
        
        @keyframes float7 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.8; }
          33% { transform: translate(-12px, 20px) scale(1.2); opacity: 1; }
          66% { transform: translate(8px, -15px) scale(0.8); opacity: 0.7; }
        }
        
        @keyframes float8 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          20% { transform: translate(20px, 10px) scale(1.15); opacity: 0.9; }
          40% { transform: translate(-10px, -20px) scale(0.85); opacity: 1; }
          60% { transform: translate(15px, -5px) scale(1.1); opacity: 0.8; }
          80% { transform: translate(-5px, 15px) scale(0.95); opacity: 0.7; }
        }

        .floating-dot-1 { animation: float1 8s ease-in-out infinite; }
        .floating-dot-2 { animation: float2 6s ease-in-out infinite 1s; }
        .floating-dot-3 { animation: float3 10s ease-in-out infinite 2s; }
        .floating-dot-4 { animation: float4 7s ease-in-out infinite 0.5s; }
        .floating-dot-5 { animation: float5 9s ease-in-out infinite 1.5s; }
        .floating-dot-6 { animation: float6 11s ease-in-out infinite 3s; }
        .floating-dot-7 { animation: float7 5s ease-in-out infinite 2.5s; }
        .floating-dot-8 { animation: float8 8s ease-in-out infinite 4s; }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

 <header className="bg-white shadow-sm border-gray-200 relative z-20">
    <div className="flex items-center justify-between">
     

      {/* Botón menú móvil */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden p-2 rounded-md text-[#1e3a5f] hover:bg-gray-100 transition-colors"
        aria-label="Abrir menú"
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </div>

    {/* Menú móvil */}
    {isMobileMenuOpen && (
      <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
        <nav className="flex flex-col space-y-4 pt-4">
          <a
            href="#cronograma"
            onClick={(e) => handleNavClick(e, "cronograma")}
            className="text-[#1e3a5f] hover:text-[#ffd700] transition-colors font-medium cursor-pointer py-2 px-4 rounded-md hover:bg-gray-50"
          >
            Cronograma
          </a>
          <a
            href="#testimonios"
            onClick={(e) => handleNavClick(e, "testimonios")}
            className="text-[#1e3a5f] hover:text-[#ffd700] transition-colors font-medium cursor-pointer py-2 px-4 rounded-md hover:bg-gray-50"
          >
            Testimonios
          </a>
          <a
            href="#contacto"
            onClick={(e) => handleNavClick(e, "contacto")}
            className="text-[#1e3a5f] hover:text-[#ffd700] transition-colors font-medium cursor-pointer py-2 px-4 rounded-md hover:bg-gray-50"
          >
            Contacto
          </a>
        </nav>
      </div>
    )}
  

  {/* Menú lateral SOLO en pantallas grandes */}
  <div className="hidden md:flex fixed top-1/3 right-0 flex-col items-end space-y-4 z-50">
    <a
      href="#cronograma"
      onClick={(e) => handleNavClick(e, "cronograma")}
      className="bg-[#298ed6] text-white text-lg font-semibold px-6 py-3 w-45 text-right hover:bg-[#163254] transition-all duration-200 rounded-tl-full rounded-tr-none rounded-bl-none rounded-br-none shadow-xl"
    >
      Cronograma
    </a>
    <a
      href="#testimonios"
      onClick={(e) => handleNavClick(e, "testimonios")}
      className="bg-[#298ed6] text-white text-lg font-semibold px-6 py-3 w-45 text-right hover:bg-[#163254] transition-all duration-200 rounded-tl-full rounded-tr-none rounded-bl-none rounded-br-none shadow-xl"
    >
      Testimonios
    </a>
    <a
      href="#contacto"
      onClick={(e) => handleNavClick(e, "contacto")}
      className="bg-[#298ed6] text-white text-lg font-semibold px-6 py-3 w-45 text-right hover:bg-[#163254] transition-all duration-200 rounded-tl-full rounded-tr-none rounded-bl-none rounded-br-none shadow-xl"
    >
      Contacto
    </a>
  </div>
</header>



      <main className="flex-1">
        {/* Hero Section with Banner */}
        <section className="relative overflow-hidden bg-[#1e3a5f]">
          {/* Animated floating dots */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
            <div className="absolute top-20 left-10 w-3 h-3 bg-[#ffd700] rounded-full floating-dot-1"></div>
            <div className="absolute top-40 right-20 w-2 h-2 bg-[#ffd700] rounded-full floating-dot-2"></div>
            <div className="absolute top-60 left-1/4 w-4 h-4 bg-[#ffd700] rounded-full floating-dot-3"></div>
            <div className="absolute bottom-40 right-10 w-3 h-3 bg-[#ffd700] rounded-full floating-dot-4"></div>
            <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-[#ffd700] rounded-full floating-dot-5"></div>
            <div className="absolute top-32 right-1/3 w-3 h-3 bg-[#ffd700] rounded-full floating-dot-6"></div>
            <div className="absolute bottom-60 right-1/4 w-2 h-2 bg-[#ffd700] rounded-full floating-dot-7"></div>
            <div className="absolute top-1/2 left-20 w-5 h-5 bg-[#ffd700] rounded-full floating-dot-8"></div>
            <div className="absolute top-80 right-40 w-2 h-2 bg-[#ffd700] rounded-full floating-dot-1"></div>
            <div className="absolute bottom-80 left-40 w-3 h-3 bg-[#ffd700] rounded-full floating-dot-2"></div>
            <div className="absolute top-1/3 right-1/5 w-4 h-4 bg-[#ffd700] rounded-full floating-dot-3"></div>
            <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-[#ffd700] rounded-full floating-dot-4"></div>
          </div>

          {/* Banner Image */}
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px]">
            <Image
              src="/images/Banner.png"
              alt="Preparación para la vida Universitaria - Bienvenido estudiante nuevo"
              fill
              className="object-cover object-center sm:object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </section>

        {/* Cronograma Section */}
        <section id="cronograma" className="py-16 px-4 bg-[#0f172c]">
          <div className="container mx-auto">
            <div className="text-center mb-12 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-6 right-4 sm:top-10 sm:right-10">
                <Star className="h-6 w-6 sm:h-8 sm:w-8 text-[#ffd700] floating-dot-1" />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Bienvenidos
                </h2>
                <p className="text-lg text-white mb-2">Sigue soñando con nosotros. Este viaje apenas comienza.</p>
                <div className="w-16 h-1 bg-[#1e3a5f] mx-auto mb-8"></div>
                <div className="max-w-4xl mx-auto text-center mb-12">
                  <p className="text-lg text-white mb-2">
                    Durante los próximos días, conocerás nuestras facultades, programas y espacios pensados para tu
                    formación integral. Te acompañaremos en este proceso en el que desarrollarás habilidades,
                    conocimientos y vínculos que enriquecerán tu experiencia universitaria. ¡Nos alegra tenerte con
                    nosotros!
                  </p>
                </div>
              </div>
            </div>

            {/* Sede Norte */}
            <div className="max-w-6xl mx-auto mb-12">
              <h3 className="text-3xl font-bold text-white mb-3 text-left">Sede Norte</h3>
              <Accordion type="single" collapsible className="space-y-4">
                {cronogramaNorte.map((dia, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white rounded-lg border border-[#1e3a5f]/20 overflow-hidden shadow-sm"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-[#1e3a5f]/5 transition-colors">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-3">
                            <Clock className="h-6 w-6 text-[#ffd700]" />
                            <div className="text-left">
                              <h3 className="text-lg font-bold text-[#1e3a5f]">{dia.fecha}</h3>
                              <p className="text-sm text-[#1e3a5f]/70 font-medium">{dia.titulo}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 pt-2">
                      <div className="bg-[#1e3a5f]/5 rounded-lg p-4 mt-2">
                        <h4 className="font-semibold text-[#1e3a5f] mb-4 flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          Programación del día
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="bg-[#1e3a5f] text-white">
                                <th className="px-3 py-2 text-left font-medium">Facultades</th>
                                <th className="px-3 py-2 text-left font-medium">Hora</th>
                                <th className="px-3 py-2 text-left font-medium">Actividad</th>
                                <th className="px-3 py-2 text-left font-medium">Área</th>
                                <th className="px-3 py-2 text-left font-medium">Lugar</th>
                                <th className="px-3 py-2 text-left font-medium">Modalidad</th>
                              </tr>
                            </thead>
                            <tbody>
                              {dia.actividades.map((actividad, actIndex) => (
                                <tr key={actIndex} className={actIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                  <td className="px-3 py-2 text-[#1e3a5f] font-medium">{actividad.facultad}</td>
                                  <td className="px-3 py-2 text-gray-700">{actividad.horario}</td>
                                  <td className="px-3 py-2 text-[#1e3a5f] font-medium">{actividad.actividad}</td>
                                  <td className="px-3 py-2 text-gray-700">{actividad.area}</td>
                                  <td className="px-3 py-2 text-gray-700">{actividad.lugar}</td>
                                  <td className="px-3 py-2">
                                    <div className="flex items-center gap-2">
                                      <Badge
                                        className={
                                          actividad.tipo === "Presencial"
                                            ? "bg-[#1e3a5f] text-white"
                                            : actividad.tipo === "Virtual"
                                              ? "bg-[#ffd700] text-[#1e3a5f]"
                                              : "bg-green-500 text-white"
                                        }
                                      >
                                        {actividad.tipo}
                                      </Badge>
                                      {(actividad.tipo === "Virtual" || actividad.tipo === "Híbrido") &&
                                        actividad.link && (
                                          <a
                                            href={actividad.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center w-6 h-6 bg-[#1e3a5f] hover:bg-[#1e3a5f]/80 text-white rounded-full transition-colors duration-200"
                                            title="Unirse a la sesión virtual"
                                          >
                                            <ExternalLink className="w-3 h-3" />
                                          </a>
                                        )}
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Sede Sur */}
            <div className="max-w-6xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4 text-left mt-8">Sede Sur</h3>
              <Accordion type="single" collapsible className="space-y-4">
                {cronogramaSur.map((dia, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white rounded-lg border border-[#1e3a5f]/20 overflow-hidden shadow-sm"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-[#1e3a5f]/5 transition-colors">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-3">
                            <Clock className="h-6 w-6 text-[#ffd700]" />
                            <div className="text-left">
                              <h3 className="text-lg font-bold text-[#1e3a5f]">{dia.fecha}</h3>
                              <p className="text-sm text-[#1e3a5f]/70 font-medium">{dia.titulo}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 pt-2">
                      <div className="bg-[#1e3a5f]/5 rounded-lg p-4 mt-2">
                        <h4 className="font-semibold text-[#1e3a5f] mb-4 flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          Programación del día
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="bg-[#1e3a5f] text-white">
                                <th className="px-3 py-2 text-left font-medium">Facultades</th>
                                <th className="px-3 py-2 text-left font-medium">Hora</th>
                                <th className="px-3 py-2 text-left font-medium">Actividad</th>
                                <th className="px-3 py-2 text-left font-medium">Área</th>
                                <th className="px-3 py-2 text-left font-medium">Lugar</th>
                                <th className="px-3 py-2 text-left font-medium">Modalidad</th>
                              </tr>
                            </thead>
                            <tbody>
                              {dia.actividades.map((actividad, actIndex) => (
                                <tr key={actIndex} className={actIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                  <td className="px-3 py-2 text-[#1e3a5f] font-medium">{actividad.facultad}</td>
                                  <td className="px-3 py-2 text-gray-700">{actividad.horario}</td>
                                  <td className="px-3 py-2 text-[#1e3a5f] font-medium">{actividad.actividad}</td>
                                  <td className="px-3 py-2 text-gray-700">{actividad.area}</td>
                                  <td className="px-3 py-2 text-gray-700">{actividad.lugar}</td>
                                  <td className="px-3 py-2">
                                    <div className="flex items-center gap-2">
                                      <Badge
                                        className={
                                          actividad.tipo === "Presencial"
                                            ? "bg-[#1e3a5f] text-white"
                                            : actividad.tipo === "Virtual"
                                              ? "bg-[#ffd700] text-[#1e3a5f]"
                                              : "bg-green-500 text-white"
                                        }
                                      >
                                        {actividad.tipo}
                                      </Badge>
                                      {(actividad.tipo === "Virtual" || actividad.tipo === "Híbrido") &&
                                        actividad.link && (
                                          <a
                                            href={actividad.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center w-6 h-6 bg-[#1e3a5f] hover:bg-[#1e3a5f]/80 text-white rounded-full transition-colors duration-200"
                                            title="Unirse a la sesión virtual"
                                          >
                                            <ExternalLink className="w-3 h-3" />
                                          </a>
                                        )}
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Testimonios Section */}
        <section id="testimonios" className="py-16 px-4 bg-[#1e3a5f]">
          <div className="container mx-auto">
            {/* Nuestros egresados dicen */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Nuestros egresados dicen</h2>
            </div>

            {/* Testimonios Slider */}
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Navigation Arrows */}
                <button
                  onClick={prevTestimonioSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                  aria-label="Testimonio anterior"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>

                <button
                  onClick={nextTestimonioSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                  aria-label="Siguiente testimonio"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>

                {/* Slides Container */}
                <div className="overflow-hidden rounded-lg bg-white shadow-sm">
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentTestimonioSlide * 100}%)` }}
                  >
                    {testimonios.map((testimonio, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <div className="flex flex-col md:flex-row items-center gap-8 p-8">
                          <div className="flex-shrink-0 text-center">
                            <div className="w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                              <img
                                src={testimonio.imagen || "/placeholder.svg"}
                                alt={testimonio.nombre}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-lg font-semibold text-[#3c5d99] mb-2">{testimonio.nombre}</p>
                            <p className="text-sm text-gray-600 mb-4">{testimonio.titulo}</p>
                            <div className="text-gray-700 leading-relaxed">
                              <p>{testimonio.testimonio}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center mt-6 space-x-2">
                  {testimonios.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonioSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                        currentTestimonioSlide === index ? "bg-white" : "bg-white/50 hover:bg-white/70"
                      }`}
                      aria-label={`Ir al testimonio ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestros Organizadores Section */}
        <section id="aliados" className="py-12 px-4 bg-gray-100">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-8">Nuestros Organizadores</h2>
            </div>

            {/* Carousel Container */}
            <div className="relative max-w-6xl mx-auto">
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>

              {/* Slides Container */}
              <div className="overflow-hidden rounded-lg bg-white shadow-sm">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {aliados.map((slide, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-12">
                        {slide.map((aliado, index) => (
                          <div key={index} className="flex items-center justify-center">
                            <img
                              src={aliado.src || "/placeholder.svg"}
                              alt={aliado.alt}
                              title={aliado.title}
                              className="h-16 w-auto object-contain max-w-full hover:scale-105 transition-transform duration-200"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {aliados.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      currentSlide === index ? "bg-[#1e3a5f]" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Ir a la diapositiva ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contacto" className="bg-[#0f172c] text-white py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Nuestras Oficinas */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-center mb-12 bg-[#0f172c]">Nuestras oficinas</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Columna 1 */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 bg-[#0f172c]">
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">mercadeo@admon.uniajc.edu.co</span>
                  </div>
                  <div className="bg-[#0f172c] text-sm">PBX: +57 (2) 665 2828 Opc1</div>
                  <div className="bg-[#0f172c] text-sm">Fax PBX: +57 (2) 688 2828 Ext. 108</div>
                </div>

                <hr className="border-gray-400" />

                <div className="space-y-3">
                  <div className="flex items-center space-x-2 bg-[#0f172c]">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">Ubicación Norte: Av.6N # 28N – 102</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-[#0f172c]">
                    <Calendar className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">Lunes a Viernes 8:00 a.m a 9:00 p.m</span>
                  </div>
                  <div className="bg-[#0f172c] text-sm">Sábados 8:00 a.m a 5:00 p.m</div>
                </div>
              </div>

              {/* Columna 2 */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 bg-[#0f172c]">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">Ubicación Sur: Calle 25 No. 127 – 220</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-[#0f172c]">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">+57 2 555 4471</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-[#0f172c]">
                    <Calendar className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">Lunes a Viernes 8:00 a.m a 6:00 p.m</span>
                  </div>
                  <div className="bg-[#0f172c] text-sm">Sábados 8:00 a.m a 1:00 p.m</div>
                </div>

                <hr className="border-gray-400" />

                <div className="space-y-3">
                  <div className="flex items-center space-x-2 bg-[#0f172c]">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">Ubicación Estación 1: Av.3A # 23CN – 84</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-[#0f172c]">
                    <Calendar className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">Lunes a Viernes 8:00 a.m a 12:00 m</span>
                  </div>
                  <div className="bg-[#0f172c] text-sm">2:00 p.m a 6:00 p.m</div>
                </div>
              </div>

              {/* Columna 3 */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 bg-[#0f172c]">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">Ubicación Estación 2: Av.3AN # 23D – 34</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-[#0f172c]">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">+57 2 667 3571 – 72</span>
                  </div>
                </div>

                <hr className="border-gray-400" />

                <div className="space-y-3">
                  <div className="flex items-center space-x-2 bg-[#0f172c]">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">Ubicación Estación 3: Av.3N # 52N – 102</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-[#0f172c]">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">+57 2 653 6703</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-[#0f172c]">
                    <Calendar className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">Lunes a Viernes 8:00 a.m a 9:30 p.m</span>
                  </div>
                  <div className="bg-[#0f172c] text-sm">Sábados 8:00 a.m a 12:30 p.m</div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t bg-[#0f172c] pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center">
                <Image
                  src="/images/uniajc-footer-logo.png"
                  alt="UNIAJC Logo"
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>

              <div className="text-center text-sm text-white">
                <p>Institución de Educación Superior sujeta a inspección y vigilancia por el MEN</p>
                <p>Santiago de Cali, Colombia | Todos los derechos reservados © 2019</p>
              </div>

              <div className="flex space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                  <span className="text-[#1e3a5f] font-bold text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                  <span className="text-[#1e3a5f] font-bold text-sm">t</span>
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                  <span className="text-[#1e3a5f] font-bold text-sm">y</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
