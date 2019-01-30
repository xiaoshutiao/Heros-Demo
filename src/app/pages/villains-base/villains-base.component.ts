import { Component, OnInit } from '@angular/core';
import { VillainService }  from '../../services/villain.service';
import { Villain } from '../../entity/villain';

@Component({
  selector: 'app-unsorted-villains',
  templateUrl: './villains-base.component.html',
  styleUrls: ['./villains-base.component.scss'],
  providers: [ VillainService ]
})
export class VillainsBaseComponent implements OnInit {
  villains: Array<Villain>;

  constructor(
    private villainService: VillainService
  ) {}

  ngOnInit() {
    this.villains = this.villainService.getAllVillains();
    this.afterGetVillains();
  }

  //等着别人来继承这个类 然后重写这个方法
  protected afterGetVillains(){
    console.log("测试3",this.villains);
  }

}
