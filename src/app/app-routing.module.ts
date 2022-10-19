import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    )
  },
  {
    path: '**', 
    redirectTo: 'character'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
