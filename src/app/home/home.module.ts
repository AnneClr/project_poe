import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { InternFormComponent } from './intern-form/intern-form.component';
// RouterModule permet le routage en interne
import { RouterModule } from '@angular/router';
// ReactiveFormsModule pour la gestion des formulaires
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    InternFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
