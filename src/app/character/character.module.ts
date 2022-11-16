import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CharacterRoutingModule} from './character-routing.module';
import {CharacterComponent} from './character.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from "@angular/material/table";
import {FlexModule} from "@angular/flex-layout";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {DialogComponent} from "./dialog/dialog.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  declarations: [CharacterComponent,
    DialogComponent,
    CharacterDetailComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    MatTableModule,
    FormsModule,
    FlexModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule
  ]
})
export class CharacterModule {
}
