import { Component } from '@angular/core';
import { Poe } from '../poe_types/poe_types';
import { PoeService } from '../services/poe.service';

@Component({
  selector: 'app-poe',
  templateUrl: './poe.component.html',
  styleUrl: './poe.component.scss',
})
export class PoeComponent {
  poes: Array<Poe> = [];
  constructor(private _service: PoeService) {}

  ngOnInit(): void {
    this.poes = this._service.poe;
  }
}
