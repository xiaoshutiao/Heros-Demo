import { Component, OnInit } from '@angular/core';
import { Hero } from '../../entity/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  /* 英雄的集合 */
  private heroes: Hero[] = [];
  /* 点击的英雄 */
  private selectedHero: Hero;

  constructor(
    public heroService: HeroService
  ) {}

  ngOnInit() {
    this.asyncGetHeroes();
  }

  /*
    获取英雄列表 请求接口
  */
  asyncGetHeroes(): void{
    this.heroService.asyncGetHeroes()
      .subscribe((heroes) => {
        this.heroes = heroes;
      });
  }

  /*
    添加英雄 请求接口
    @param name
  */
  asyncAddHero(name: string): void{
    name = name.trim();
    if (!name) { return; }
    this.heroService.asyncAddHero({name} as Hero)
      .subscribe((hero) => {
        this.heroes.push(hero);
      });
  }

  /*
    删除英雄 请求接口 
  */
  asyncDeleteHero(hero: Hero): void{
    //无刷新删除
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.asyncDeleteHero(hero).subscribe();

    //删除后再调用获取列表接口
    // this.heroService.asyncDeleteHero(hero)
    //   .subscribe((hero)=>{
    //     this.asyncGetHeroes();
    // });
  }

  /*
    点击事件
    @param hero
  */
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
