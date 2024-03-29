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
      poe: { label: 'Développeur en cybersécurité', duration: 457 },
    },
    {
      lastname: 'BERNARDIN',
      firstname: 'Bruno',
      poe: { label: 'Développeur en cybersécurité', duration: 457 },
    },
    {
      lastname: 'BERTON',
      firstname: 'Dorine',
      poe: { label: 'Développeur en cybersécurité', duration: 457 },
    },
    {
      lastname: 'BETTAN',
      firstname: 'Frédéric',
      poe: { label: 'Développeur en cybersécurité', duration: 457 },
    },
    {
      lastname: 'BONNET',
      firstname: 'Fabien',
      poe: { label: 'Développeur en cybersécurité', duration: 457 },
    },
    {
      lastname: 'CHENU',
      firstname: 'Guillaume',
      poe: { label: 'Développeur en cybersécurité', duration: 457 },
    },
    {
      lastname: 'DE BOUARD',
      firstname: 'Anne-claire',
      poe: { label: 'Développeur en cybersécurité', duration: 457 },
    },
    {
      lastname: 'DUMONET',
      firstname: 'Vincent',
      poe: { label: 'Développeur en cybersécurité', duration: 457 },
    },
    {
      lastname: 'EL HACHIMI ALAOUI',
      firstname: 'Imane',
      poe: { label: 'Développeur en cybersécurité', duration: 457 },
    },
    {
      lastname: 'GORMAND',
      firstname: 'Loïc',
      poe: { label: 'Développeur en cybersécurité', duration: 457 },
    },
    {
      lastname: 'PROVO',
      firstname: 'Sabine',
      poe: { label: 'Développeur en cybersécurité', duration: 457 },
    },
    {
      lastname: 'ROCK',
      firstname: 'Bertrand',
      poe: { label: 'Développeur en cybersécurité', duration: 457 },
    },
    {
      lastname: 'ROFFIDAL',
      firstname: 'Yann',
      poe: { label: 'Développeur en cybersécurité', duration: 457 },
    },
    {
      lastname: 'TROUCHE',
      firstname: 'Boris',
      poe: { label: 'Développeur en cybersécurité', duration: 457 },
    },
    {
      lastname: 'TURTI',
      firstname: 'Thomas',
      poe: { label: 'Développeur en cybersécurité', duration: 457 },
    },
  ];

  constructor(private _httpClient: HttpClient) {}

  add(item: Intern): Observable<Intern> {
    return this._httpClient.post<Intern>('http://localhost:3000/interns', item);
    console.log(item);
  }

  findAll(): Observable<Intern[]> {
    return this._httpClient.get<Intern[]>('http://localhost:3000/interns').pipe(
      map((interns: Intern[]) => {
        return interns.sort((i1: Intern, i2: Intern) => {
          return i1.lastname.localeCompare(i2.lastname);
          console.log(interns);
        });
      })
    );
  }

  get interns(): Array<Intern> {
    return this._interns;
  }
}
