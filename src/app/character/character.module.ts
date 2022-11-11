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

@NgModule({
  declarations: [CharacterComponent,
    DialogComponent,
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
    FormsModule
  ]
})
export class CharacterModule {
}
