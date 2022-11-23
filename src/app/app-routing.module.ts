import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthService} from "./login/service/auth.service";
import {AuthGuard} from "./login/service/auth.guard";

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(
      m => m.LoginModule
    )
  },
  {
    path: 'character',
    loadChildren: () => import('./character/character.module').then(
      m => m.CharacterModule
    ),
    canActivate:[AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
