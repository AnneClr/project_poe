import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoeComponent } from './poe/poe.component';
import { AddPoeComponent } from './add-poe/add-poe.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PoeComponent, AddPoeComponent],
  imports: [CommonModule, HttpClientModule, RouterModule, ReactiveFormsModule],
})
export class PoeModule {}
