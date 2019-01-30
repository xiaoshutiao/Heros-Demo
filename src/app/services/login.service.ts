import { Injectable } from '@angular/core';
import { HttpUtilService } from '../util/http-util.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    public httpUtil: HttpUtilService
  ) { }

  /*
    登录 获取token
  */
  asyncLogin(){
    console.log("asyncLogin");
    this.httpUtil.request({
      method: 'POST',
      url: 'https://tcarls-int.bba-app.com/rest-api/v1/tokens',
      data: {
        account:'admin',
        password:'admin@123'
      },
    }).subscribe((res) => {
      console.log("返回的结果",res);
      if(res && res.access){
        localStorage.setItem("access_token",res.access);
      }
    });
  } 

  asyncGetHistorys(){
    this.httpUtil.request({
      method: 'GET',
      url: 'https://tcarls-int.bba-app.com/rest-api/v1/questions?limit=10&offset=0',
      data: {},
    }).subscribe((res) => {
      console.log("返回的结果",res);
    });
  }
}
