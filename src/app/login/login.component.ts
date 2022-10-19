import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) { }

  @Output() submitEM = new EventEmitter();

  login() {
    this.router.navigate(['/character']);
  }
}