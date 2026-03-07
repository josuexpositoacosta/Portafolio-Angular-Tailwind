import { Component } from '@angular/core';

/*
  CONCEPTO: Interfaces como "contratos de datos"

  ExperienceItem define exactamente qué campos tiene cada experiencia.
  Nota cómo stack es un string[] (array de strings) — esto nos permite
  iterar sobre las tecnologías individuales en el template.
*/
interface ExperienceItem {
  title: string;       // Cargo
  company: string;     // Empresa/proyecto
  period: string;      // Período ("2019 - 2021")
  description: string; // Descripción del trabajo
  stack: string[];     // Tecnologías usadas
  achievement: string; // Logro destacado
}

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  /*
    Array de experiencias. Cada objeto cumple con ExperienceItem.
    El orden importa: el primero aparece arriba (más reciente).
  */
  experiences: ExperienceItem[] = [
    {
      title: 'Desarrollador Full Stack',
      company: 'Ouropouche y Sistema de Conferencias',
      period: '2022 - Presente',
      description: 'Lideré el desarrollo completo (end-to-end) de una plataforma web, gestionando todo el ciclo desde análisis de requerimientos hasta despliegue en producción. Integraciones con servicios externos, gestión multi-stage y preparación para infraestructura cloud.',
      stack: ['Angular', 'Spring Boot', 'Docker', 'CI/CD', 'Git'],
      achievement: 'Arquitectura hexagonal con desacoplamiento total entre capas',
    },
    {
      title: 'Desarrollador Full Stack',
      company: 'Proyecto Integral de Gestión Museológica',
      period: '2022',
      description: 'Arquitectura y desarrollo de plataforma web comprehensiva para digitalización de procesos museísticos. Sistema completo de autenticación/autorización con JWT.',
      stack: ['MongoDB', 'React', 'AngularJS', 'Node.js', 'Express', 'Tailwind CSS'],
      achievement: 'Transformación digital completa del ecosistema museístico con sistema centralizado escalable',
    },
    {
      title: 'Desarrollador Full Stack',
      company: 'SIUM Santiago de Cuba - Sistema de Control',
      period: '2021',
      description: 'Desarrollo de software crítico para sistema de mando unificado con visualización en tiempo real.',
      stack: ['MySQL', 'Spring MVC', 'Hibernate', 'JPA', 'AngularJS', 'Bootstrap'],
      achievement: 'Implementación de sistema de alta disponibilidad para gestión de emergencias',
    },
    {
      title: 'Desarrollador Full Stack',
      company: 'Soluciones Digitales de Salud Pública',
      period: '2019 - 2021',
      description: 'REICOS: Plataforma para gestión centralizada de colaboradores. Sistema PCRCalc: Optimización de flujos de trabajo médico para procesamiento de pruebas PCR.',
      stack: ['React', 'MySQL', 'Java Spring MVC', 'JavaScript', 'AngularJS'],
      achievement: 'Reducción del 40% en tiempos de procesamiento médico',
    },
    {
      title: 'Desarrollador Full Stack',
      company: 'Plataformas de Gestión Gubernamental - ONAT',
      period: '2004 - 2018',
      description: 'Sistema de Gestión de Problemas: Arquitectura de data warehouse para análisis predictivo. Monitoreo de Indicadores: Automatización de sistemas de respaldo y métricas de desempeño.',
      stack: ['Oracle 11g', 'SQL', 'TypeScript', 'AngularJS', 'Java Spring MVC', 'JPA'],
      achievement: 'Modernización completa de procesos administrativos gubernamentales',
    },
    {
      title: 'Desarrollador Full Stack',
      company: 'Sistema Jurídico CONJURI / Sistema Comercial',
      period: '2001 - 2004',
      description: 'Desarrollo pionero de sistemas de gestión para consultorías jurídicas y punto de venta con control de inventario en tiempo real.',
      stack: ['C', 'C++', 'Java', 'SQL Server', 'HTML', 'JavaScript'],
      achievement: 'Implementación de soluciones automatizadas en fase temprana de la industria',
    },
  ];
}
