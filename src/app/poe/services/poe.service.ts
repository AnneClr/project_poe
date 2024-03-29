import { Injectable } from '@angular/core';
import { IService } from '../../core/interfaces/i-service';
import { Poe } from '../poe_types/poe_types';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PoeService implements IService<Poe> {
  private _poes: Array<Poe> = [
    {
      label: 'Développeur en cybersécurité',
      duration: 457,
    },
    {
      label: 'Développeur web',
      duration: 457,
    },
    {
      label: 'Management',
      duration: 80,
    },
    {
      label: 'Git',
      duration: 35,
    },
  ];

  constructor(private _httpClient: HttpClient) {}
  add(item: Poe): Observable<Poe> {
    return this._httpClient.post<Poe>('http://localhost:3000/poes', item);
  }

  findAll(): Observable<Poe[]> {
    return this._httpClient.get<Poe[]>('http://localhost:3000/poes').pipe(
      map((poes: Poe[]) => {
        return poes.sort((p1: Poe, p2: Poe) => {
          return p1.label.localeCompare(p2.label);
        });
      })
    );
  }

  get poe(): Array<Poe> {
    return this._poes.sort((p1: Poe, p2: Poe) => {
      return p1.label.localeCompare(p2.label);
    });
  }
}
