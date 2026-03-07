import { Component } from '@angular/core';

/*
  CONCEPTO: Propiedades calculadas simples

  currentYear se calcula UNA VEZ cuando se crea el componente.
  No es un signal porque no necesita ser reactivo — el año
  no cambia durante una sesión de uso.

  No todo necesita ser reactivo. Usa signal/computed solo
  cuando el valor PUEDE cambiar y necesitas que el UI se actualice.
*/

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  // new Date().getFullYear() retorna el año actual (ej: 2026)
  // Así nunca tienes que actualizar el copyright manualmente.
  currentYear = new Date().getFullYear();
}
