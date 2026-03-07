import { Component } from '@angular/core';
/*
  CONCEPTO: imports en @Component

  En Angular standalone, cada componente DEBE declarar explícitamente
  qué otros componentes usa en su template mediante el array "imports".

  Sin esto, Angular no sabe que <app-navbar> existe y dará error:
  "'app-navbar' is not a known element"

  Esto es diferente a los imports de TypeScript (las líneas "import {...}")
  que traen las clases al archivo. Los imports de @Component registran
  los componentes para el template HTML.

  ARQUITECTURA:
  App es el componente RAÍZ. Su template define el layout general:
  - <app-navbar /> arriba de todo (navegación fija)
  - <main> contiene todas las secciones del portafolio
  - <app-footer /> al final

  Cada <app-xxx /> se reemplaza por el template de ese componente.
  Esto es COMPOSICIÓN: construir interfaces complejas combinando
  piezas simples e independientes.
*/
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Education } from './components/education/education';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    // Cada componente que uses en el template DEBE estar aquí
    Navbar,
    Hero,
    About,
    Experience,
    Projects,
    Skills,
    Education,
    Contact,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  /*
    Ya no necesitamos el title signal.
    El componente App es solo un "contenedor" que organiza
    la composición de los componentes hijos.
  */
}
