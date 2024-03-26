import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InternFormComponent } from './home/intern-form/intern-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'intern-add',
    component: InternFormComponent,
    pathMatch: 'full',
  },
  /**
   * Route wild card ** : pour s'assurer que si l'URL est modifiée par l'utilisateur,
   * il soit redirigé vers la page home
   * Il faut qu'elle soit la dernière des routes
   * Pour des raisons de sécurité, il faut redirectTo vers une page 404
   */
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
