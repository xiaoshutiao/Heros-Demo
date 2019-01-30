import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {}

  /*
    请求登录接口 获取token
  */
  asyncLogin(){
    this.loginService.asyncLogin();
  }

  asyncHistorys(){
    this.loginService.asyncGetHistorys();
  }

}
