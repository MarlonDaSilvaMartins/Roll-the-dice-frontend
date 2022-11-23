import {Input, Component, Output, EventEmitter, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CharacterService} from "../character/service/character.service";
import {LoginService} from "./service/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  loginError: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService) {
  }

  @Output() submitEM = new EventEmitter();

  ngOnInit(): void {
    document.body.style.backgroundColor = "grey";

    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    if (!this.loginForm.valid) {
      for (var a in this.loginForm.controls) {
        this.loginForm.controls[a].markAsDirty();
        this.loginForm.controls[a].updateValueAndValidity();
      }
    }
    if (this.loginForm.valid) {
      this.loginService.getAuth(this.loginForm.value).subscribe({
        next: (res) => {
          localStorage.setItem('token', res.id);

          this.router.navigate(['character']);
        },
        error: () => {
          this.loginError = true;
        }
      })
    }
  }
}
