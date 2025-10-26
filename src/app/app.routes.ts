import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/error/not-found.component';

export const routes: Routes = [
  // Wildcard route for 404 page - must be last
  { path: '**', component: NotFoundComponent }
];
