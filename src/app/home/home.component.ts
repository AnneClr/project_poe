import { Component } from '@angular/core';
import { Intern } from './types/intern.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  // interns => variable de classe car dépendante de la classe ou attribut
  //<Intern> : import du type déclaré dans le fichier intern.type
  interns: Array<Intern> = [
    {
      lastname: 'de BOÜARD',
      firstname: 'Anne-Claire',
    },
    {
      lastname: 'YOFFIDAL',
      firstname: 'Yann',
    },
    {
      lastname: 'THURTIS',
      firstname: 'Thomas',
    },
    {
      lastname: 'BONNET',
      firstname: 'Fabien',
    },
    {
      lastname: 'BERTON',
      firstname: 'Dorine',
    },
  ];
}
