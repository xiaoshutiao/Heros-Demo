import { Component, OnInit, Input} from '@angular/core';
import { LoggerService } from '../../services/logger.service';
import { VillainCacheService } from '../../services/villain-cache.service';

@Component({
  selector: 'app-villain-bio',
  templateUrl: './villain-bio.component.html',
  styleUrls: ['./villain-bio.component.scss']
})
export class VillainBioComponent implements OnInit {
  @Input() villainId: number;

  constructor(
    private villainCache: VillainCacheService
  ) { }

  ngOnInit() { 
    this.villainCache.fetchCachedVillain(this.villainId); 
  }

  get villain() { 
    return this.villainCache.villain; 
  }

}
