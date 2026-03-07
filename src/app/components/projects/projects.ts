import { Component, computed, signal } from '@angular/core';

/*
  CONCEPTO: computed() — Valores derivados reactivos

  Un "computed" es un signal que se calcula automáticamente
  a partir de OTROS signals. Cuando un signal del que depende
  cambia, el computed se recalcula solo.

  Ejemplo:
    const precio = signal(100);
    const iva = computed(() => precio() * 0.21);  // Se recalcula si precio cambia

  En este componente:
    - activeFilter es un signal (el filtro seleccionado)
    - filteredProjects es un computed (se recalcula cuando activeFilter cambia)

  CONCEPTO: signal.set() vs signal.update()
    - .set(valor)  → Asigna un valor directamente
    - .update(fn)  → Calcula el nuevo valor basado en el anterior
    Aquí usamos .set() porque estamos poniendo un valor específico.
*/

interface Project {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];  // Array de strings: cada punto destacado
  stack: string[];       // Array de tecnologías
  category: string;      // Para el filtro: 'Arquitectura', 'DevOps', etc.
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  // El filtro activo. Por defecto, muestra todos.
  activeFilter = signal('Todos');

  // Las categorías disponibles para filtrar
  categories = ['Todos', 'Arquitectura', 'DevOps', 'Full Stack'];

  // Datos de los proyectos
  projects: Project[] = [
    {
      title: 'Plataforma Ouropouche',
      subtitle: 'Arquitectura Hexagonal con Spring Boot',
      description: 'Implementación de Arquitectura Hexagonal con dominios desacoplados mediante interfaces claras (ports) y adaptadores específicos.',
      highlights: [
        'Capa de Dominio Puro: Entidades y lógica de negocio independientes de frameworks',
        'Adaptadores Primarios: Controladores REST con Spring MVC y componentes Angular',
        'Adaptadores Secundarios: Repositorios JPA/Hibernate, clientes para servicios externos',
        'Inversión de Dependencias con Spring Framework',
      ],
      stack: ['Spring Boot', 'Angular', 'JPA', 'Hibernate', 'Docker'],
      category: 'Arquitectura',
    },
    {
      title: 'Ecosistema DevOps Integrado',
      subtitle: 'Pipeline de Entrega Continua',
      description: 'Diseño de adaptadores para conexión con APIs externas y sistemas legacy con gestión de configuración multi-entorno.',
      highlights: [
        'Perfiles Spring para development, staging y production',
        'Infraestructura como Código con contenedores Docker',
        'Workflows CI/CD en GitLab CI/GitHub Actions',
        'Análisis estático con SonarQube y pruebas automatizadas',
      ],
      stack: ['Docker', 'CI/CD', 'SonarQube', 'GitHub Actions', 'Maven'],
      category: 'DevOps',
    },
    {
      title: 'Gestión Museológica Digital',
      subtitle: 'Plataforma MEAN Stack',
      description: 'Transformación digital completa de ecosistema museístico con sistema centralizado escalable para instituciones culturales.',
      highlights: [
        'Frontend con Angular.js y Tailwind CSS con diseño responsivo',
        'Backend con Node.js/Express con APIs REST optimizadas',
        'Autenticación JWT con control de sesiones avanzado',
        'MongoDB Atlas con integridad referencial y alto rendimiento',
      ],
      stack: ['MongoDB', 'Express', 'Angular', 'Node.js', 'Tailwind', 'JWT'],
      category: 'Full Stack',
    },
    {
      title: 'Soluciones de Salud Pública',
      subtitle: 'REICOS & PCRCalc',
      description: 'Plataforma para gestión centralizada de colaboradores y optimización de flujos de procesamiento de pruebas PCR.',
      highlights: [
        'Reducción del 40% en tiempos de procesamiento médico',
        'Interfaz intuitiva con React para personal médico',
        'Sistema robusto con Java Spring MVC',
        'Integración con bases de datos MySQL optimizadas',
      ],
      stack: ['React', 'MySQL', 'Java Spring MVC', 'JavaScript'],
      category: 'Full Stack',
    },
  ];

  /*
    computed() → Se recalcula automáticamente cuando activeFilter() cambia.
    Es como un "getter inteligente" que Angular sabe cuándo actualizar.

    Dentro del computed, leemos activeFilter() (con paréntesis).
    Angular detecta esta lectura y sabe: "si activeFilter cambia,
    debo recalcular filteredProjects".
  */
  filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'Todos') return this.projects;
    return this.projects.filter(p => p.category === filter);
  });
}
