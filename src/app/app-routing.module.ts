import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InternFormComponent } from './home/intern-form/intern-form.component';
import { PoeComponent } from './poe/poe/poe.component';
import { AddPoeComponent } from './poe/add-poe/add-poe.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'interns',
    pathMatch: 'full',
  },
  {
    path: 'interns',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'intern-add',
    component: InternFormComponent,
    pathMatch: 'full',
  },
  { path: 'poe', component: PoeComponent, pathMatch: 'full' },

  { path: 'poe-add', component: AddPoeComponent, pathMatch: 'full' },
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
