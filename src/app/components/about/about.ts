import { Component } from '@angular/core';

/*
  CONCEPTO: Interfaces en TypeScript

  Una interface define la "forma" de un objeto: qué propiedades tiene
  y de qué tipo son. TypeScript las usa para VERIFICAR en tiempo
  de desarrollo que no te equivoques (por ejemplo, que no escribas
  "tite" en vez de "title").

  NO generan código JavaScript — solo existen en tiempo de compilación.
*/
interface Competence {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  /*
    Array tipado: competences es un array donde cada elemento
    DEBE cumplir con la interface Competence.
    Si intentas agregar un objeto sin icon, title o description,
    TypeScript te dará un error ANTES de ejecutar.
  */
  competences: Competence[] = [
    {
      icon: '🏗️',
      title: 'Arquitectura Web Moderna',
      description: 'Aplicaciones escalables, seguras y mantenibles con arquitectura limpia y patrones de diseño industry-proven.',
    },
    {
      icon: '👥',
      title: 'Liderazgo Técnico',
      description: 'Colaboración con stakeholders y equipos multidisciplinarios para traducir requerimientos en soluciones óptimas.',
    },
    {
      icon: '🎨',
      title: 'Diseño UX-Céntrico',
      description: 'Desarrollo con enfoque en experiencia de usuario, performance y accesibilidad.',
    },
    {
      icon: '🔄',
      title: 'Transformación Digital',
      description: 'Modernización de procesos empresariales y sistemas legacy para organizaciones corporativas.',
    },
  ];
}
