import { Component, signal } from '@angular/core';

/*
  CONCEPTOS DE ESTE COMPONENTE:

  1. signal() → Estado reactivo de Angular. Cuando su valor cambia,
     Angular re-renderiza automáticamente solo lo que depende de él.
     Aquí lo usamos para abrir/cerrar el menú móvil.

  2. El array menuItems define los enlaces de navegación.
     Cada uno tiene un "label" (texto visible) y un "href" (hacia dónde navega).
     Los href usan "#" (anclas) para hacer scroll a secciones de la misma página.
*/

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  // signal<boolean>(false) → Crea un "signal" con valor inicial false
  // .set(valor) para asignar, .update(fn) para cambiar basado en valor anterior
  // En el template se lee como isMenuOpen() ← con paréntesis
  isMenuOpen = signal(false);

  // Array de objetos que define los ítems del menú
  menuItems = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Sobre Mí', href: '#about' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Educación', href: '#education' },
    { label: 'Contacto', href: '#contact' },
  ];

  // .update(v => !v) → Invierte el valor actual: true→false, false→true
  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  printPDF() {
    window.print();
  }
}
