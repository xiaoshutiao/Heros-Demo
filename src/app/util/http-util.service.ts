import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { MessagesService } from '../services/messages.service';
import { catchError, delay, tap, mapTo, concatMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilService {
  public testArr = [];

  constructor(
    private http: HttpClient
  ) { }

  /**
   * 统一发送请求
   * @param params
   * @returns {Promise<{success: boolean, msg: string}>|Promise<R>}
   */
  public request(params: any): any {
    // POST请求（参数、返回值类型都是任意类型）
    console.log("##请求的url##",params['url']);
    console.log("##请求的参数##",params['data']);

    const access_token = localStorage.getItem("access_token");
    let headers = {
      headers: new HttpHeaders({
        'Authorization': 'Token' + ' ' + access_token
      })
    };

    if (params['method'] == 'post' || params['method'] == 'POST') {
      //post请求
      return this.post(params['url'], params['data'], headers);
    } else if(params['method'] == 'patch' || params['method'] == 'PATCH'){
      //patch请求
      return this.patch(params['url'], params['data'], headers);
    }else{
      //get请求
      return this.get(params['url'], params['data'], headers);
    }
  }

  /**
   * get请求
   * @param url 接口地址
   * @param params 参数
   * @returns {Promise<R>|Promise<U>}
   */
  public get(url: string, params: any, headers: any): any {
    return this.http.get(url,headers)
      .pipe(
        tap(_ => console.log("get请求",_)),
        catchError(this.handleError("##请求失败的接口##"+'\n'+url))
      );
  }

  /**
   * post请求
   * @param url 接口地址
   * @param params 参数
   * @returns {Promise<R>|Promise<U>}
   */
  public post(url: string, params: any, headers: any){
    return this.http.post(url,params,headers)
    .pipe(
      tap(_ => console.log("post请求",_)),
      catchError(this.handleError("##请求失败的接口##"+'\n'+url))
    );
  }

  /**
   * patch请求
   * @param url 接口地址
   * @param params 参数
   * @returns {Promise<R>|Promise<U>}
   */
  public patch(url: string, params: any, headers: any) {
    return this.http.patch(url,params,headers)
    .pipe(
      tap(_ => console.log("patch请求",_)),
      catchError(this.handleError("##请求失败的接口##"+'\n'+url))
    );
  }

  /**
   * 处理请求错误
   * @param error
   * @returns {void|Promise<string>|Promise<T>|any}
   */
  public handleError<T>(tag,result?: T) {
    return (error: any): Observable<T> => {
      console.log("请求错误",error);
      this.addLogs(tag,error.message);
      return of(result as T);
    };
  }

  /*
    打印日志 通过MessageService
  */
  public addLogs(message: string,error: any) {
    this.testArr.push(message+'\n'+error);
    console.log("##testArr:",this.testArr);
  }
}
