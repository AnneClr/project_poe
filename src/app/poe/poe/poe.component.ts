import { Component } from '@angular/core';
import { Poe } from '../poe_types/poe_types';
import { PoeService } from '../services/poe.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-poe',
  templateUrl: './poe.component.html',
  styleUrl: './poe.component.scss',
})
export class PoeComponent {
  poes: Array<Poe> = [];
  constructor(private _service: PoeService) {}

  ngOnInit(): void {
    this._service
      .findAll()
      .pipe(take(1))
      .subscribe((poes: Poe[]) => (this.poes = poes));
  }
}
