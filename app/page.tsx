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
  const handleNavClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  id: string
) => {
  e.preventDefault();

  const element = document.getElementById(id);
  const headerOffset = 80; // Cambia este valor si tu header es más alto o más bajo

  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    // Cierra el menú móvil después de hacer clic
    setIsMobileMenuOpen(false);
  }
};


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
      imagen: "/images/girl.jpg",
      nombre: "Brenda Yolime Valencia Perea",
      titulo: "Estudiante de Administración en Seguridad y Salud en el Trabajo",
      testimonio:
        "Al principio estaba toda nerviosa por entrar a la U, pero el PVU me bajó la ansiedad full. Me explicaron todo súper claro y me sentí acompañada desde el primer día. Ahora sí voy con toda.",
    },
    {
      imagen: "/images/jampy.jpg",
      nombre: "Juan Pablo Ocoró Torres",
      titulo: "Estudiante de Diseño Visual",
      testimonio:
        "Lo mejor del PVU fue que conocí gente de otras carreras, parchamos en los talleres y ahora ya no me siento tan perdido en la U. Hasta armamos combo pa’ los descansos.",
    },
    {
      imagen: "/images/Karen.jpg",
      nombre: "Karen Tatiana Suarez Arroyave",
      titulo: "Estudiante de Ingeniería de Sistemas",
      testimonio:
        "Conocí los beneficios que la U puede brindarme. En el PVU me di cuenta de todo lo que tiene la U: apoyo en salud, talleres, cultura, deporte... hasta cosas que ni sabía que existían. Ahora sé a dónde ir si necesito ayuda o quiero hacer algo más que estudiar.",
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
      fecha: "MIÉRCOLES 13 DE AGOSTO 2025",
      titulo: "Viví y aprendí de los tontos y los sabios",
      actividades: [
          {
          facultad: "FI - FCE - FEDV - FCSH (533)",
          horaInicio: "8:00 am",
          horaFin: "10:00 am",
          actividad: "Alfabetización",
          areaEncargada: "UVI",
          lugar: "",
          tipo: "Virtual",
          link: null,
        },
        {
          facultad: "FI - FEDV (385)",
          horaInicio: "9:00 am",
          horaFin: "12:00 pm",
          actividad: "Encuentro con Facultades",
          areaEncargada: "FI - FEDV",
          lugar: "Lugares Asignados (PMA) En la sede Norte",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "FCE - FCSH (335)",
          horaInicio: "2:00 pm",
          horaFin: "5:00 pm",
          actividad: "Encuentro con Facultades",
          areaEncargada: "FCE - FCSH",
          lugar: "Lugares Asignados (PMA) En la sede Norte",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "FI - FCE - FCSH (207)",
          horaInicio: "6:30 pm",
          horaFin: "8:30 pm",
          actividad: "Alfabetización",
          areaEncargada: "UVI",
          lugar: "",
          tipo: "Virtual",
          link: null,
        },
        {
          facultad: "FI - FCE - FEDV (518)",
          horaInicio: "6:30 pm",
          horaFin: "9:30 pm",
          actividad: "Encuentro con Facultades",
          areaEncargada: "FI - FCE - FEDV",
          lugar: "Lugares Asignados (PMA) En la sede Norte",
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
          facultad: "FI - FEDV (385)",
          horaInicio: "9:00 am",
          horaFin: "12:00 pm",
          actividad: "Matemáticas, Comunicación, Lenguaje",
          areaEncargada: "FI - FEDV",
          lugar: "Lugares Asignados (PMA) En la sede Norte",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "FCE - FCSH (335)",
          horaInicio: "2:00 pm",
          horaFin: "5:00 pm",
          actividad: "Matemáticas, Comunicación, Lenguaje",
          areaEncargada: "FCE - FCSH",
          lugar: "Lugares Asignados (PMA) En la sede Norte",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "FI - FCE - FEDV (518)",
          horaInicio: "6:30 pm",
          horaFin: "9:30 pm",
          actividad: "Matemáticas, Comunicación, Lenguaje",
          areaEncargada: "FI - FCE - FEDV",
          lugar: "Lugares Asignados (PMA) En la sede Norte",
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
          facultad: "FI -FCE (247)",
          horaInicio: "6:00 am",
          horaFin: "7:00 am",
          actividad: "Registro de Asistentes",
          areaEncargada: "Mercadeo",
          lugar: "Entrada Aula Máxima",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "FI -FCE (247)",
          horaInicio: "7:00 am",
          horaFin: "9:00 am",
          actividad: "Dream On",
          areaEncargada: "Rector",
          lugar: "Aula Máxima",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "FEDV -FCSH (286)",
          horaInicio: "9:00 am",
          horaFin: "10:00 am",
          actividad: "Registro de Asistentes",
          areaEncargada: "Mercadeo",
          lugar: "Entrada Aula Máxima",
          tipo: "Presencial",
          link: null,
        },
         {
          facultad: "FEDV -FCSH (286)",
          horaInicio: "10:00 am",
          horaFin: "12:00 pm",
          actividad: "Dream On",
          areaEncargada: "Rector",
          lugar: "Aula Máxima",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "FI - FEDV (385)",
          horaInicio: "12:00 pm",
          horaFin: "1:00 pm",
          actividad: "Registro de Asistentes",
          areaEncargada: "Mercadeo",
          lugar: "Entrada Aula Máxima",
          tipo: "Presencial",
          link: null,
        },
         {
          facultad: "FI - FEDV (385)",
          horaInicio: "1:00 pm",
          horaFin: "3:00 pm",
          actividad: "Dream On",
          areaEncargada: "Rector",
          lugar: "Aula Máxima",
          tipo: "Presencial",
          link: null,
        },
          {
          facultad: "FCE - FCSH (335)",
          horaInicio: "2:30 pm",
          horaFin: "3:30 pm",
          actividad: "Registro de Asistentes",
          areaEncargada: "Mercadeo",
          lugar: "Entrada Aula Máxima",
          tipo: "Presencial",
          link: null,
        },
          {
          facultad: "FCE - FCSH (335)",
          horaInicio: "3:30 pm",
          horaFin: "5:30 pm",
          actividad: "Dream On",
          areaEncargada: "Rector",
          lugar: "Aula Máxima",
          tipo: "Presencial",
          link: null,
        },
           {
          facultad: "FCE - FEDV - FCSH (360)",
          horaInicio: "5:00 pm",
          horaFin: "6:00 pm",
          actividad: "Registro de Asistentes",
          areaEncargada: "Mercadeo",
          lugar: "Entrada Aula Máxima",
          tipo: "Presencial",
          link: null,
        },
          {
          facultad: "FCE - FEDV - FCSH (360)",
          horaInicio: "6:00 pm",
          horaFin: "7:30 pm",
          actividad: "Dream On",
          areaEncargada: "Rector",
          lugar: "Aula Máxima",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "FI (365)",
          horaInicio: "7:00 pm",
          horaFin: "8:00 pm",
          actividad: "Registro de Asistentes",
          areaEncargada: "Mercadeo",
          lugar: "Entrada Aula Máxima",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "FI (365)",
          horaInicio: "8:00 pm",
          horaFin: "9:30 pm",
          actividad: "Dream On",
          areaEncargada: "Rector",
          lugar: "Aula Máxima",
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
          facultad: "FI - FCE (247)",
          horaInicio: "9:00 am",
          horaFin: "12:00 pm",
          actividad: "Encuentro con Facultades",
          areaEncargada: "FI - FCE",
          lugar: "Lugares Asignados (PMA) En la sede Sur",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "FCSH - FEDV (286)",
          horaInicio: "2:00 pm",
          horaFin: "5:00 pm",
          actividad: "Encuentro con Facultades",
          areaEncargada: "FCSH - FEDV ",
          lugar: "Lugares Asignados (PMA) En la sede Sur",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "FI - FCE - FEDV - FCSH (720)",
          horaInicio: "8:00 am",
          horaFin: "10:00 am",
          actividad: "Alfabetización",
          areaEncargada: "UVI",
          lugar: "",
          tipo: "Virtual",
          link: null,
        },
        {
          facultad: "FI - FCE - FCSH (207)",
          horaInicio: "6:30 pm",
          horaFin: "9:30 pm",
          actividad: "Encuentro con Facultades",
          areaEncargada: "FI - FCE - FCSH",
          lugar: "Lugares Asignados (PMA) En la sede Sur",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "FI - FCE - FEDV (518)",
          horaInicio: "6:30 pm",
          horaFin: "8:30 pm",
          actividad: "Alfabetización",
          areaEncargada: "UVI",
          lugar: "",
          tipo: "Virtual",
          link: null,
        },
      ],
      estado: "completado",
    },
    {
      fecha: "VIERNES 15 DE AGOSTO 2025",
      titulo: "Sueña hasta que tus sueños se hagan realidad",
      actividades: [
         {
          facultad: "FI - FCE (247)",
          horaInicio: "9:00 am",
          horaFin: "12:00 pm",
          actividad: "Matemáticas, Comunicación, Lenguaje",
          areaEncargada: "FI - FCE",
          lugar: "Lugares Asignados (PMA) En la sede Sur",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "FEDV - FCSH (286)",
          horaInicio: "2:00 pm",
          horaFin: "5:00 pm",
          actividad: "Matemáticas, Comunicación, Lenguaje",
          areaEncargada: "FI - FCE",
          lugar: "Lugares Asignados (PMA) En la sede Sur",
          tipo: "Presencial",
          link: null,
        },
         {
          facultad: "FI - FCE - FCSH (207)",
          horaInicio: "6:30 pm",
          horaFin: "9:30 pm",
          actividad: "Matemáticas, Comunicación, Lenguaje",
          areaEncargada: "FI - FCE - FCSH",
          lugar: "Lugares Asignados (PMA) En la sede Sur",
          tipo: "Presencial",
          link: null,
        },
      ],
      estado: "pendiente",
    },
  ]


const cronogramaSameco = [
{
      fecha: "JUEVES 14 DE AGOSTO 2025",
      titulo: "Canta conmigo aunque sea por hoy",
      actividades: [
          {
          facultad: "FI - FCE (247)",
          horaInicio: "8:00 am",
          horaFin: "12:00 pm",
          actividad: "Yincana de servicios",
          areaEncargada: "Mercadeo Dependencias Asociadas",
          lugar: "Sede SMART CAMPUS",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "FEDV - FCSH (286)",
          horaInicio: "2:00 pm",
          horaFin: "6:00 pm",
          actividad: "Yincana de servicios",
          areaEncargada: "Mercadeo Dependencias Asociadas",
          lugar: "Sede SMART CAMPUS",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "FI - FCE - FCSH (207)",
          horaInicio: "6:30 pm",
          horaFin: "9:30 pm",
          actividad: "Yincana de servicios",
          areaEncargada: "Mercadeo Dependencias Asociadas",
          lugar: "Sede SMART CAMPUS",
          tipo: "Presencial",
          link: null,
        },
      ],
      estado: "pendiente",
    },
     {
      fecha: "VIERNES 15 DE AGOSTO 2025",
      titulo: "Sueña hasta que tus sueños se hagan realidad",
      actividades: [
        {
          facultad: "FI - FEDV (385)",
          horaInicio: "8:00 am",
          horaFin: "12:00 pm",
          actividad: "Yincana de Servicios",
          areaEncargada: "Mercadeo Dependencias Asociadas",
          lugar: "Sede SMART CAMPUS",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "FCE - FCSH (335)",
          horaInicio: "2:00 pm",
          horaFin: "6:00 pm",
          actividad: "Yincana de Servicios",
          areaEncargada: "Mercadeo Dependencias Asociadas",
          lugar: "Sede SMART CAMPUS",
          tipo: "Presencial",
          link: null,
        },
         {
          facultad: "FI - FCE - FEDV (518)",
          horaInicio: "6:30 pm",
          horaFin: "9:30 pm",
          actividad: "Yincana de Servicios",
          areaEncargada: "Mercadeo Dependencias Asociadas",
          lugar: "Sede SMART CAMPUS",
          tipo: "Presencial",
          link: null,
        },
      ],
      estado: "pendiente",
    },
    {
      fecha: "SÁBADO 16 DE AGOSTO 2025 - GRUPO A",
      titulo: "Sigue soñando, sigue soñando, sigue soñando",
      actividades: [
        {
          facultad: "FEDV (115) ADM.SALUD VIRTUAL (120)  ",
          horaInicio: "7:00 am",
          horaFin: "8:00 am",
          actividad: "Registro de Asistentes",
          areaEncargada: "Mercadeo",
          lugar: "Entrada SMART CAMPUS",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "FEDV (115) ADM.SALUD VIRTUAL (120)  ",
          horaInicio: "8:00 am",
          horaFin: "8:40 am",
          actividad: "Dream On",
          areaEncargada: "Rector",
          lugar: "Auditorio F.Tenorio",
          tipo: "Presencial",
          link: null,
        },
         {
          facultad: "FEDV (115) ADM.SALUD VIRTUAL (120)  ",
          horaInicio: "8:40 am",
          horaFin: "10:05 am",
          actividad: "Encuentro con Facultades",
          areaEncargada: "FEDV",
          lugar: "Auditorio F.Tenorio",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "FEDV (115) ADM.SALUD VIRTUAL (120)  ",
          horaInicio: "10:05 am",
          horaFin: "10:35 am",
          actividad: "BREAK",
          areaEncargada: "Bienestar Universitario",
          lugar: "Terraza 2do Piso",
          tipo: "Presencial",
          link: null,
        },
         {
          facultad: "FEDV (115) ADM.SALUD VIRTUAL (120)  ",
          horaInicio: "10:35 am",
          horaFin: "12:00 pm",
          actividad: "Matemáticas, Comunicación, Lenguaje",
          areaEncargada: "PMA",
          lugar: "Auditorio F.Tenorio",
          tipo: "Presencial",
          link: null,
        },
         {
          facultad: "FEDV (115) ADM.SALUD VIRTUAL (120)  ",
          horaInicio: "12:00 pm",
          horaFin: "1:00 pm",
          actividad: "Almuerzo",
          areaEncargada: "Bienestar Universitario",
          lugar: "Terraza 2do Piso",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "FEDV (115) ADM.SALUD VIRTUAL (120)  ",
          horaInicio: "1:00 pm",
          horaFin: "5:00 pm",
          actividad: "Yincana de Servicios",
          areaEncargada: "Mercadeo Dependencias Asociadas",
          lugar: "Lugares Asignados (SMART CAMPUS)",
          tipo: "Presencial",
          link: null,
        },
      ],
      estado: "pendiente",
    },
    {
      fecha: "SÁBADO 16 DE AGOSTO 2025 - GRUPO B",
      titulo: "Sigue soñando, sigue soñando, sigue soñando",
      actividades: [
        {
          facultad: "FEDV (115) ",
          horaInicio: "7:00 am",
          horaFin: "8:00 am",
          actividad: "Registro de Asistentes",
          areaEncargada: "Mercadeo",
          lugar: "Entrada SMART CAMPUS",
          tipo: "Presencial",
          link: null,
        },
         {
          facultad: "FEDV (115) ",
          horaInicio: "8:00 am",
          horaFin: "12:00 pm",
          actividad: "Yincana de Servicios",
          areaEncargada: "Mercadeo Dependencias Asociadas",
          lugar: "Lugares Asignados (SMART CAMPUS)",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "FEDV (115) ",
          horaInicio: "12:00 pm",
          horaFin: "1:00 pm",
          actividad: "Almuerzo",
          areaEncargada: "Bienestar Universitario",
          lugar: "Terraza 2do Piso",
          tipo: "Presencial",
          link: null,
        },
         {
          facultad: "FEDV (115) ",
          horaInicio: "1:00 pm",
          horaFin: "1:40 pm",
          actividad: "Dream On",
          areaEncargada: "Rector",
          lugar: "Auditorio F.Tenorio",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "FEDV (115) ",
          horaInicio: "1:40 pm",
          horaFin: "3:05 pm",
          actividad: "Encuentro con Facultades",
          areaEncargada: "FEDV",
          lugar: "Auditorio F.Tenorio",
          tipo: "Presencial",
          link: null,
        },
        {
          facultad: "FEDV (115) ",
          horaInicio: "3:05 pm",
          horaFin: "3:35 pm",
          actividad: "Break",
          areaEncargada: "Bienestar Universitario",
          lugar: "Terraza 2do Piso",
          tipo: "Presencial",
          link: null,
        },
         {
          facultad: "FEDV (115) ",
          horaInicio: "3:35 pm",
          horaFin: "5:00 pm",
          actividad: "Matemáticas, Comunicación y Lenguaje",
          areaEncargada: "PMA",
          lugar: "Auditorio F.Tenorio",
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

<header className="fixed top-0 w-full bg-white shadow-sm border-b border-gray-200 z-50">
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
            href="#vive-tu-campus"
            onClick={(e) => handleNavClick(e, "vive-tu-campus")}
            className="text-[#1e3a5f] hover:text-[#ffd700] transition-colors font-medium cursor-pointer py-2 px-4 rounded-md hover:bg-gray-50"
          >
            Vive tu campus
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
      href="#vive-tu-campus"
      onClick={(e) => handleNavClick(e, "vive-tu-campus")}
      className="bg-[#298ed6] text-white text-lg font-semibold px-6 py-3 w-50 text-right hover:bg-[#163254] transition-all duration-200 rounded-tl-full rounded-tr-none rounded-bl-none rounded-br-none shadow-xl"
    >
      Vive tu campus
    </a>
    <a
      href="#contacto"
      onClick={(e) => handleNavClick(e, "contacto")}
      className="bg-[#298ed6] text-white text-lg font-semibold px-6 py-3 w-50 text-right hover:bg-[#163254] transition-all duration-200 rounded-tl-full rounded-tr-none rounded-bl-none rounded-br-none shadow-xl"
    >
      Contacto
    </a>
  </div>
</header>



      <main className="flex-1">
        {/* Hero Section with Banner */}
        <section className="relative overflow-hidden bg-[#0f172c]">
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
         
      
  {/* PRESENTACION GENIALLY*/}
        <section id="vive-tu-campus" className="py-2 px-2 bg-[#0f172c]">
        {/* Imagen*/}
               <img
                src="images/ViveTuCampus.png"
                alt="Imagen de vive tu campus"
                className="w-full h-auto mb-8"
              />

    {/* Genially embed centrado y responsivo */}
  <div className="max-w-6xl mx-auto">
    <div className="relative pb-[56.25%] h-0">
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-md shadow-lg"
        title="PVU- A la U llego con toda"
        src="https://view.genially.com/688a49a57ff1a3947733db19"
        width="1200"
        height="675"
        frameBorder="0"
        scrolling="yes"
        allowFullScreen
      ></iframe>
    </div>
  </div>
        </section>


  {/* TESTIMONIOS */}
<section id="testimonios" className="py-16 px-4 bg-[#0f172c]">
  <div className="container mx-auto">
    {/* Título */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white">Experiencia PVU</h2>
    </div>

    {/* Testimonio con flechas laterales */}
    <div className="relative max-w-2xl mx-auto flex items-stretch">
      {/* Flecha izquierda */}
      <button
        onClick={prevTestimonioSlide}
        className="absolute left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
        aria-label="Testimonio anterior"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>

      {/* Bloque del testimonio */}
      <div
        className="relative w-full bg-[#4b9ddf] text-white pt-8 pb-8 pr-6 pl-6 md:pl-40 transition-all duration-300 ease-in-out min-h-[385px] md:min-h-[250px]"
        style={{
          borderTopLeftRadius: '2rem',
          borderTopRightRadius: '2rem',
          borderBottomLeftRadius: '2rem',
          borderBottomRightRadius: '0',
        }}
      >
        {/* Imagen circular */}
        <div className="absolute -top-10 left-6 w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white overflow-hidden z-10 bg-white">
          <img
            src={testimonios[currentTestimonioSlide].imagen || "/placeholder.svg"}
            alt={testimonios[currentTestimonioSlide].nombre}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contenido */}
        <div className="mt-16 md:mt-4">
          <p className="text-xl font-bold text-[#1e3a5f]">
            {testimonios[currentTestimonioSlide].nombre}
          </p>
           <p className="text-sm font-bold text-white">
            {testimonios[currentTestimonioSlide].titulo}
          </p>
          <p className="text-base text-white mt-2 leading-relaxed">
            {testimonios[currentTestimonioSlide].testimonio}
          </p>
        </div>
      </div>

      {/* Flecha derecha */}
      <button
        onClick={nextTestimonioSlide}
        className="absolute right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
        aria-label="Siguiente testimonio"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>
    </div>

    {/* Dots de paginación */}
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
                  <span className="text-[#0f172c] font-bold text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                  <span className="text-[#0f172c] font-bold text-sm">t</span>
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                  <span className="text-[#0f172c] font-bold text-sm">y</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
