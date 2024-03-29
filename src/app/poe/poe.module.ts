import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoeComponent } from './poe/poe.component';
import { AddPoeComponent } from './add-poe/add-poe.component';



@NgModule({
  declarations: [
    PoeComponent,
    AddPoeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PoeModule { }
