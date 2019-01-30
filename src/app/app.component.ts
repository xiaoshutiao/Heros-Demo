import { Component } from '@angular/core';

import { LoggerService }      from './services/logger.service';
import { UserContextService } from './services/user-context.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes';
  private userId = 1;
  
  constructor(
    public logger: LoggerService, 
    public userContext: UserContextService
  ) {
    userContext.loadUser(this.userId);
    logger.logInfo('AppComponent initialized');
  }
}
