import { Injectable } from '@angular/core';
import { Intern } from '../types/intern.type';
import { IService } from '../../core/interfaces/i-service';
import { HttpClient } from '@angular/common/http';

// @Injectable indique que c'est un singleton
@Injectable({
  providedIn: 'root',
})
export class InternService implements IService<Intern> {
  // interns => variable de classe car dépendante de la classe ou attribut
  //<Intern> : import du type déclaré dans le fichier intern.type
  // private = pas accessible à l'extérieur de la classe, on ENCAPSULE l'attribut
  private _interns: Array<Intern> = [
    {
      lastname: 'ARNAUD',
      firstname: 'Manon',
    },
    {
      lastname: 'BERNARDIN',
      firstname: 'Bruno',
    },
    {
      lastname: 'BERTON',
      firstname: 'Dorine',
    },
    {
      lastname: 'BETTAN',
      firstname: 'Frédéric',
    },
    {
      lastname: 'BONNET',
      firstname: 'Fabien',
    },
    {
      lastname: 'CHENU',
      firstname: 'Guillaume',
    },
    {
      lastname: 'DE BOUARD',
      firstname: 'Anne-claire',
    },
    {
      lastname: 'DUMONET',
      firstname: 'Vincent',
    },
    {
      lastname: 'EL HACHIMI ALAOUI',
      firstname: 'Imane',
    },
    {
      lastname: 'GORMAND',
      firstname: 'Loïc',
    },
    {
      lastname: 'PROVO',
      firstname: 'Sabine',
    },
    {
      lastname: 'ROCK',
      firstname: 'Bertrand',
    },
    {
      lastname: 'ROFFIDAL',
      firstname: 'Yann',
    },
    {
      lastname: 'TROUCHE',
      firstname: 'Boris',
    },
    {
      lastname: 'TURTI',
      firstname: 'Thomas',
    },
  ];

  //injection de httpClient dans InternService
  constructor(
    private _httpClient: HttpClient
  ) {}

  add(item: Intern): void {
    this._interns.push(item);
  }

  // on implémente la méthode findAll
  findAll(): Intern[] {
    return [];
  }

  // le getter permet d'avoir accès au tableau interns qui est privé
  // après les ' : ' indique le type de données attendues
  // this fait référence à l'instance de cet attribut
  get interns(): Array<Intern> {
    return this._interns;
  }
}
