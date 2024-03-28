import { Injectable } from '@angular/core';
import { Intern } from '../types/intern.type';
import { IService } from '../../core/interfaces/i-service';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

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

  //injection du service httpClient dans InternService
  constructor(private _httpClient: HttpClient) {}

  add(item: Intern): Observable<Intern> {
    // avant on avait add(item: Intern) void{
    //  this._interns.push(item); permet d'ajouter des interns temporairement quand on n'avait pas encore de fichier db.json
    // }
    // POST retourne un observable de la réponse
    return this._httpClient.post<Intern>('http://localhost:3000/interns', item);
  }

  // on implémente la méthode findAll : retourne un objet qui observe une liste d'intern et qui notifie quand cette liste sera modifiée
  // L'opérateur map permet de créer un nouvel Observable à partir de l'Observable d'origine en transformant simplement chacune de ses valeurs.
  findAll(): Observable<Intern[]> {
    return this._httpClient.get<Intern[]>('http://localhost:3000/interns') // on récupère interns en vrac
    .pipe( // on pipe pour ajouter un maillon/une étape
      map((interns: Intern[]) => { 
        return interns.sort((i1: Intern, i2: Intern) => {
          return i1.lastname.localeCompare(i2.lastname);
        });
      })
    );
  }

  // le getter permet d'avoir accès au tableau interns qui est privé
  // après les ' : ' indique le type de données attendues
  // this fait référence à l'instance de cet attribut
  get interns(): Array<Intern> {
    return this._interns;
  }
}
