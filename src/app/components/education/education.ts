import { Component } from '@angular/core';

/*
  Este componente es straightforward: dos arrays de datos
  que se renderizan en dos columnas.

  CONCEPTO: Tipado inline vs Interface
  Aquí no creamos interfaces separadas porque los tipos son
  simples y solo se usan aquí. TypeScript infiere el tipo
  automáticamente del array, pero ser explícito ayuda a la
  legibilidad y al autocompletado del IDE.
*/

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  education = [
    {
      title: 'Licenciado en Ciencia de la Computación',
      institution: 'Universidad de Oriente (UO) | Santiago de Cuba, Cuba',
      period: '2002 - 2008',
    },
    {
      title: 'Técnico Medio en Informática',
      institution: 'Politécnico Marina Grajales | Santiago de Cuba, Cuba',
      period: '1996 - 1998',
    },
    {
      title: 'Profesor Instructor',
      institution: 'Universidad de Oriente',
      period: '2003 - 2008',
    },
  ];

  certifications = [
    {
      title: 'Node.js, Express, MongoDB & More: The Complete Bootcamp',
      institution: 'Certificación Online',
      year: '2023 - 2024',
    },
    {
      title: 'Microservicios con Spring Cloud y Angular',
      institution: 'Universidad de Oriente, Santiago de Cuba',
      year: '2020',
    },
    {
      title: 'Curso de Oracle 11G',
      institution: 'ONAT Habana',
      year: '2009',
    },
    {
      title: 'Diseño de BD Relacionales',
      institution: 'Universidad de Oriente, Santiago de Cuba',
      year: '2006',
    },
  ];
}
