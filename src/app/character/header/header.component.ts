import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../login/service/login.service";
import {Login} from "../../login/model/login.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: string;

  constructor(
    private loginService: LoginService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    let id = localStorage.getItem('token') || '';
    this.loginService.getUser(id).subscribe((login: Login) => {
      this.user = login.name;
    });
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
