import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../services/logger.service';
@Component({
  selector: 'app-villain-bios',
  templateUrl: './villain-bios.component.html',
  styleUrls: ['./villain-bios.component.scss']
})
export class VillainBiosComponent implements OnInit {

  constructor(logger: LoggerService) {
    logger.logInfo('Creating VillainBiosComponent');
  }

  ngOnInit() {
  }

}
