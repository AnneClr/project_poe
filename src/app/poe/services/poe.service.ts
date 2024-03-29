import { Injectable } from '@angular/core';
import { IService } from '../../core/interfaces/i-service';
import { Poe } from '../poe_types/poe_types';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PoeService implements IService<Poe> {
  private _poe: Array<Poe> = [
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

  constructor() {}
  add(item: Poe): void {
    throw new Error('Method not implemented.');
  }
  findAll(): Observable<Poe[]> {
    throw new Error('Method not implemented.');
  }

  get poe(): Array<Poe> {
    return this._poe;
  }
}
