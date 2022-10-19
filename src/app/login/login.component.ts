import { Input, Component, Output, EventEmitter } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
import { Login } from './model/login.model'
import { LoginService } from './service/login.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private readonly service: LoginService,
    private readonly toastrService: ToastrService,
  ) { }

  public login: Login;

  form: UntypedFormGroup = new UntypedFormGroup({
    username: new UntypedFormControl(''),
    password: new UntypedFormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }

  private getAnalysisStatus(): void {
    this.service
      .getAuth(login, password)
      .subscribe(
        login => {
          this.login = login
        },
        err => {
          const errors: any[] = err?.error?.errors ?? null
          const error: string = errors?.length
            ? errors[0]?.message || null
            : null

          const text = error ?? 'Login ou senha incorretos'
          this.toastrService.error(text, 'Atenção!')
        },
      )
  }


  @Output() submitEM = new EventEmitter();
}