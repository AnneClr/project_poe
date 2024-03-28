import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// RouterModule permet le routage en interne
import { RouterModule } from '@angular/router';
// ReactiveFormsModule pour la gestion des formulaires
import { ReactiveFormsModule } from '@angular/forms';
// Module pour requêtes client
import { HttpClientModule } from '@angular/common/http';

// Import composants
import { HomeComponent } from './home.component';
import { InternFormComponent } from './intern-form/intern-form.component';



@NgModule({
  declarations: [
    HomeComponent,
    InternFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class HomeModule { }
