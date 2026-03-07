import { Component } from '@angular/core';

/*
  CONCEPTO: Componentes sin lógica

  No todos los componentes necesitan TypeScript complejo.
  Este componente es puro HTML/Tailwind. Pero sigue siendo
  un componente porque:
  1. Es reutilizable
  2. Tiene su propio scope de CSS
  3. Se puede testear independientemente
  4. Mantiene separación de responsabilidades

  NOTA: Actualiza los enlaces con tus URLs reales de
  LinkedIn, GitHub y tu email verdadero.
*/

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {}
