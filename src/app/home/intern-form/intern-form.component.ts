// controller

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InternService } from '../services/intern.service';
import { Router } from '@angular/router';
import { Intern } from '../types/intern.type';
import { PoeService } from '../../poe/services/poe.service';
import { take } from 'rxjs';
import { Poe } from '../../poe/poe_types/poe_types';

@Component({
  selector: 'app-intern-form',
  templateUrl: './intern-form.component.html',
  styleUrl: './intern-form.component.scss',
})
export class InternFormComponent {
  public internForm: FormGroup = new FormGroup({});
  intern: Array<Intern> = [];
  poes: Array<Poe> = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _internService: InternService,
    private _poeService: PoeService,
    private _router: Router
  ) {}

   ngOnInit(): void {
    this.internForm = this._formBuilder.group({
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      firstname: ['', [Validators.required]],
      poe: ['', Validators.required],
    });

    this._poeService
      .findAll()
      .pipe(take(1))
      .subscribe((poes: Poe[]) => (this.poes = poes));
  }

  onSubmit(): void {
    this._internService
      .add(this.internForm.value)
      .subscribe((intern: Intern) => this._router.navigate(['/interns']));
  }

}
