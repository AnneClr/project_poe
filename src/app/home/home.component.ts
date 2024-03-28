import { Component } from '@angular/core';
import { InternService } from './services/intern.service';
import { Intern } from './types/intern.type';
import { take } from 'rxjs';

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

  //on redéclare interns car _interns est private
  interns: Array<Intern> = [];

  // Initialisation de l'objet avec le constructor
  //construction de l'objet par instance de InternService
  constructor(private _service: InternService) {}

  // ngOnInit que dans composant, méthode qui permet de lancer une exécution de code
  // injection des données dans l'objet
  // la méthode subscribe permet d'avoir un souscripteur et s'exécute autant de fois que interns change
  ngOnInit(): void {
    // this.interns = this._service.interns => on affichait la liste des interns directement comme ça avant de mettre en place findAll
    // methode .pipe() permet la transformation de l'information
    // opérateur take de rxjs. take(1) pour le premier élément qui arrive (le tableau). Avec take permet d'arrêter d'émettre
    this._service
      .findAll()
      .pipe(take(1))
      .subscribe((interns: Intern[]) => (this.interns = interns));
  }
}
