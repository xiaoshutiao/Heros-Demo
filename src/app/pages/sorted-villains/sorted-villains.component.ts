import { Component } from '@angular/core';
import { VillainService }  from '../../services/villain.service';
import { VillainsBaseComponent } from '../villains-base/villains-base.component';

@Component({
  selector: 'app-sorted-villains',
  templateUrl: './sorted-villains.component.html',
  styleUrls: ['./sorted-villains.component.scss']
})
export class SortedVillainsComponent extends VillainsBaseComponent {

  constructor(heroService: VillainService) { 
    //父类 用父类创建的实例 这个类里面也可以用父类的变量 还可以重写方法
    super(heroService);
  }

  protected afterGetVillains() {
    this.villains = this.villains.sort((h1, h2) => {
      return h1.name < h2.name ? -1 :
            (h1.name > h2.name ? 1 : 0);
    });
  }

}
