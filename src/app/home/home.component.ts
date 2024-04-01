import { Component } from '@angular/core';
import { InternService } from './services/intern.service';
import { Intern } from './types/intern.type';
import { take } from 'rxjs';

import { Poe } from '../poe/poe_types/poe_types';
import { PoeService } from '../poe/services/poe.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  /**
   * @var Array<Intern>
   * Array of Intern to be displayed
   */

  interns: Array<Intern> = [];
  poes: Array<Poe> = [];

  constructor(
    private _service: InternService,
    private _poeService: PoeService
  ) {}

  ngOnInit(): void {
    this._service
      .findAll()
      .pipe(take(1))
      .subscribe((interns: Intern[]) => (this.interns = interns));

    this._poeService
      .findAll()
      .pipe(take(1))
      .subscribe((poes: Poe[]) => (this.poes = poes));
  }
}
