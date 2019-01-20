import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessagesService } from './messages.service';
import { Hero } from '../entity/hero';

/* header 设置 */
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';

  constructor(
    private http: HttpClient,
    private messagesService: MessagesService
  ) {}

  /*
    获取英雄列表
  */
  public asyncGetHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log("获取英雄列表")),
        catchError(this.handleError('getHeroes', []))
      );
  }

  /*
    根据id获取单个英雄
  */
  public asyncGetHero(id: number): Observable<Hero>{
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`查询:id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  public searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`搜索 key="${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  /*
    更改英雄
  */
  public asyncUpdateHero (hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`更新:id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /*
    添加英雄
  */
  public asyncAddHero (hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap((hero: Hero) => this.log(`添加:id=${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  /*
    删除英雄
  */
  public asyncDeleteHero (hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap(_ => this.log(`删除:id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  /*
    处理错误 然后往日志里面写
  */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  /*
    打印HeroService的日志 通过MessageService
  */
  private log(message: string) {
    this.messagesService.add(`HeroService: ${message}`);
  }
}
