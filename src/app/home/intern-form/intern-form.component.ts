import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InternService } from '../services/intern.service';
import { Router } from '@angular/router';

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
  // méthode pour la soumission du form, on ajoute la saie dans intern.service et on redirige vers la page home
  onSubmit(): void {
    this._internService.add(this.internForm.value);
    this._router.navigate(['/home']);
  }
}
