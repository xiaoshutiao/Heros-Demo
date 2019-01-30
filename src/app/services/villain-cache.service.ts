import { Injectable } from '@angular/core';
import { Villain }  from '../entity/villain';
import { VillainService }  from './villain.service';

@Injectable({
  providedIn: 'root'
})
export class VillainCacheService {
  villain : Villain;

  constructor(
    private villainService: VillainService
  ) { }

  fetchCachedVillain(id: number) {
    if (!this.villain) {
      this.villain = this.villainService.getVillainById(id);
    }
    return this.villain;
  }
}
