import { Component, OnInit } from '@angular/core';
import { VillainCacheService } from '../../services/villain-cache.service';

@Component({
  selector: 'app-villain-bios-and-contacts',
  templateUrl: './villain-bios-and-contacts.component.html',
  styleUrls: ['./villain-bios-and-contacts.component.scss'],
  providers: [VillainCacheService]
})
export class VillainBiosAndContactsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
