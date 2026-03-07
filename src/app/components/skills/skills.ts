import { Component } from '@angular/core';

/*
  CONCEPTO: Interfaces anidadas / composición de tipos

  SkillCategory tiene un campo "skills" que es un ARRAY de objetos
  {name, level}. No necesitamos crear una interface separada para
  esto — TypeScript permite definir tipos inline:
    skills: { name: string; level: number }[]

  Esto dice: "skills es un array de objetos donde cada uno
  tiene name (string) y level (number)"

  Podríamos también hacer:
    interface Skill { name: string; level: number; }
    interface SkillCategory { ...; skills: Skill[]; }

  Ambas formas son válidas. El inline es más conciso cuando
  el tipo solo se usa en un lugar.
*/
interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: number }[];
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skillCategories: SkillCategory[] = [
    {
      title: 'Frontend & Modern Web',
      icon: '🎨',
      skills: [
        { name: 'Angular / TypeScript', level: 95 },
        { name: 'React.js / Next.js', level: 85 },
        { name: 'JavaScript (ES6+)', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML5 / CSS3', level: 95 },
      ],
    },
    {
      title: 'Backend & APIs',
      icon: '⚙️',
      skills: [
        { name: 'Node.js / Express', level: 90 },
        { name: 'Java Spring Boot', level: 90 },
        { name: 'Spring MVC / Security', level: 85 },
        { name: 'RESTful API Design', level: 95 },
        { name: 'JWT / Auth Systems', level: 90 },
      ],
    },
    {
      title: 'Bases de Datos',
      icon: '🗄️',
      skills: [
        { name: 'MongoDB / Atlas', level: 90 },
        { name: 'MySQL / PostgreSQL', level: 90 },
        { name: 'Oracle 11g', level: 80 },
        { name: 'SQL Server', level: 80 },
        { name: 'Spring Data JPA', level: 85 },
      ],
    },
    {
      title: 'DevOps & Cloud',
      icon: '☁️',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'CI/CD Pipelines', level: 85 },
        { name: 'Git / GitHub', level: 95 },
        { name: 'Cloud (AWS/Azure)', level: 75 },
        { name: 'Linux / Shell', level: 80 },
      ],
    },
    {
      title: 'Arquitectura',
      icon: '🏛️',
      skills: [
        { name: 'Clean Architecture', level: 90 },
        { name: 'Hexagonal (Ports & Adapters)', level: 90 },
        { name: 'Microservicios', level: 85 },
        { name: 'SOLID / Design Patterns', level: 95 },
        { name: 'Agile / Scrum', level: 90 },
      ],
    },
    {
      title: 'Seguridad',
      icon: '🔒',
      skills: [
        { name: 'OWASP Guidelines', level: 85 },
        { name: 'Auth & Authorization', level: 90 },
        { name: 'Data Validation', level: 90 },
        { name: 'Security Headers', level: 80 },
        { name: 'Privacy by Design', level: 85 },
      ],
    },
  ];
}
