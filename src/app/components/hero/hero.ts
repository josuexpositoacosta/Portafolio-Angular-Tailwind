import { Component } from '@angular/core';

/*
  Este componente es simple: solo HTML + Tailwind, sin lógica TypeScript.
  No necesita signals ni métodos porque es contenido estático.

  Concepto: No todos los componentes necesitan lógica compleja.
  A veces un componente es solo una "pieza de UI" reutilizable.
*/

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {}
