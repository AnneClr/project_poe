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

  constructor(private _httpClient: HttpClient) {}

  add(item: Intern): Observable<Intern> {
    return this._httpClient.post<Intern>('http://localhost:3000/interns', item);
  }

  findAll(): Observable<Intern[]> {
    return this._httpClient.get<Intern[]>('http://localhost:3000/interns').pipe(
      map((interns: Intern[]) => {
        return interns.sort((i1: Intern, i2: Intern) => {
          return i1.lastname.localeCompare(i2.lastname);
        });
      })
    );
  }

  get interns(): Array<Intern> {
    return this._interns;
  }
}
