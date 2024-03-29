import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoeComponent } from './poe/poe.component';
import { AddPoeComponent } from './add-poe/add-poe.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PoeComponent, AddPoeComponent],
  imports: [CommonModule, HttpClientModule],
})
export class PoeModule {}
