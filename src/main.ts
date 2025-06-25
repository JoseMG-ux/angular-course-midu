import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

//  Punto de entrada principal de la aplicación Angular
// Aquí se importa el módulo principal de la aplicación y se inicia el proceso de arranque
