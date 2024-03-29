// controller

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InternService } from '../services/intern.service';
import { Router } from '@angular/router';
import { Intern } from '../types/intern.type';

@Component({
  selector: 'app-intern-form',
  templateUrl: './intern-form.component.html',
  styleUrl: './intern-form.component.scss',
})
export class InternFormComponent {
  public internForm: FormGroup = new FormGroup({});

  constructor(
    private _formBuilder: FormBuilder,
    private _internService: InternService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.internForm = this._formBuilder.group({
      lastname: [
        '', //default value
        [Validators.required, Validators.minLength(3)], //les Validators permettent de contrôler l'input lastname
      ],
      firstname: ['', [Validators.required]],
    });
  }
  // méthode pour la soumission du form, on ajoute la saisie dans intern.service et on redirige vers la page home
  //en ajoutant la méthode .subscribe permet d'avoir la persistance des données en local
  onSubmit(): void {
    this._internService
      .add(this.internForm.value)
      .subscribe((intern: Intern) => this._router.navigate(['/home']));
  }
}
