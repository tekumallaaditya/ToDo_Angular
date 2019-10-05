import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ApiService} from '../api.service';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';

interface TokenObj {
  token: string;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private api: ApiService, private cookieService: CookieService, private router:Router ) { }

  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  ngOnInit() {
    const userToken = this.cookieService.get('user-token');
    if ('user-token') {
      //this.router.navigate(['/todofeed']);
    }
    else {
      this.router.navigate(['/auth']);
    }
  }

  login(){
    this.api.userLogin(this.authForm.value).subscribe(
      (response:TokenObj) => {
        this.cookieService.set('user-token', response.token);
        this.router.navigate(['/todofeed']);
        console.log(response);

      },
      error => console.log(error)
    )
    console.log(this.authForm.value.username);
  }

}
