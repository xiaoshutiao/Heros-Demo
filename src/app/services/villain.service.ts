import { Injectable } from '@angular/core';
import { Villain }  from '../entity/villain';

@Injectable({
  providedIn: 'root'
})
export class VillainService {

  constructor() { }

  private villains: Array<Villain> = [
    new Villain(1, 'RubberMan', 'Hero of many talents', '123-456-7899'),
    new Villain(2, 'Magma', 'Hero of all trades', '555-555-5555'),
    new Villain(3, 'Mr. Nice', 'The name says it all', '111-222-3333')
 ];

  getVillainById(id: number): Villain {
    return this.villains.find(hero => hero.id === id);
  }

  getAllVillains(): Array<Villain> {
    return this.villains;
  }
}
