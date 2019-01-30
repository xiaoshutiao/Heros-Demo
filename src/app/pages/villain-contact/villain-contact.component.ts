import { Component, OnInit, Host, Optional } from '@angular/core';
import { LoggerService } from '../../services/logger.service';
import { VillainCacheService } from '../../services/villain-cache.service';

@Component({
  selector: 'app-villain-contact',
  templateUrl: './villain-contact.component.html',
  styleUrls: ['./villain-contact.component.scss']
})
export class VillainContactComponent implements OnInit {
  hasLogger = false;

  constructor(
    //禁止在宿主组件以上的搜索
    @Host()
    private villainCacheService: VillainCacheService,

    @Host()     //禁止在宿主组件以上的搜索
    @Optional() // 属性装饰器告诉 Angular 当找不到依赖时就返回 null
    private loggerService: LoggerService
  ) { 
    if (loggerService) {
      this.hasLogger = true;
      loggerService.logInfo('VillainContactComponent can log!');
    }
  }

  get phoneNumber() { 
    return this.villainCacheService.villain.phone; 
  }

  ngOnInit() {
  }

}
