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
  // internForm nous permettra de manipuler les champs du formulaire
  public internForm: FormGroup = new FormGroup({});

  // injection du formBuilder, du InternService et du Router dans le composant
  constructor(
    private _formBuilder: FormBuilder,
    private _internService: InternService,
    private _router: Router
  ) {}

  // ngOnInit permet d'appliquer une méthode à tous les composants qui est exécutée immédiatement après le constructor de la classe
  ngOnInit(): void {
    // normalement comme c'est un controller, ce qu'on crée ici devrait être dans un service car on construit un formulaire
    // On aura de la duplication de code lorsqu'on fera le form pour modifier les données d'où l'intérêt de mettre ça dans un service
    // group() pour grouper, on fait passer en arguments un objet
    // dans cet objet : on fait passer les contrôles qu'on nomme souvent par le nom de l'input
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
