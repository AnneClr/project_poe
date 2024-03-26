import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-intern-form',
  templateUrl: './intern-form.component.html',
  styleUrl: './intern-form.component.scss',
})
export class InternFormComponent {
  // internForm nous permettra de manipuler les champs du formulaire
  public internForm: FormGroup = new FormGroup({});

  // injection du formBuilder dans le composant
  constructor(private _formBuilder: FormBuilder) {}

  // méthode appliquée à tous les composants exécutée immédiatement après le constructor de la classe
  ngOnInit(): void {
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
// méthode pour la soumission du form
  onSubmit(): void {

  }
}
