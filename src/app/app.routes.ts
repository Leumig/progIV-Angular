import { Routes } from '@angular/router';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'bienvenido', pathMatch:'full' },
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorComponent }
];

// '' Significa sin path. El 'redirectTo' es una redirección, te manda directamente al path 'bienvenido.'
// El 'pathMatch' es para que funcione correctamente con las '' simples.

// Angular siempre lee cada ruta en orden. Y a la primera que entra, ya deja de analizar las demás.
// El ** es un comodín. Siempre que llegue ahí, va a entrar.