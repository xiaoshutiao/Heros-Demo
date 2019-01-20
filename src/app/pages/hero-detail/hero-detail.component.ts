import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../../entity/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  /*
    获取单个英雄
  */
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.asyncGetHero(id)
      .subscribe(hero => this.hero = hero);
  }

  /*
    返回上一页
  */
  goBack(): void {
    this.location.back();
  }

  /*
    保存修改
  */
  save(): void {
    this.heroService.asyncUpdateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
