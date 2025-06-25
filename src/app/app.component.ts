import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { GamesComponent } from "./games/games.component";

// Componente principal de la aplicación Angular que envuelve la estructura básica de la aplicación
// Este componente se utiliza para definir la estructura y el estilo de la aplicación

@Component({
  // @Component es un decorador que define un componente Angular, afecta clase de abajo AppComponent

  selector: 'app-root', // Selector utilizado para identificar este componente en la plantilla HTML (app-root)

  standalone: true, // Indica que este componente es independiente y no necesita un módulo Angular para funcionar

  imports: [CommonModule, RouterOutlet, UserComponent, GamesComponent], // Importa módulos comunes de Angular y el RouterOutlet para la navegación

  templateUrl: './app.component.html',

  styleUrl: './app.component.css', // Ruta al archivo de estilos CSS que define el estilo visual del componente
})
export class AppComponent {
  title = 'angular-17-app';
  city = 'Ciudad de Panamá';
}
