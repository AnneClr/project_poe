import { Component } from '@angular/core';
import { InternService } from './services/intern.service';
import { Intern } from './types/intern.type';

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
  interns: Array<Intern> = []

  // Initialisation de l'objet avec le constructor
  //construction de l'objet par instance de InternService
  constructor(private _service: InternService) { }

  // ngOnInit que dans composant
  // injection des données dans l'objet
  ngOnInit(): void {
    this.interns = this._service.interns
  }
}
