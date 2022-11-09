import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from "@angular/material/table";
import {FlexModule} from "@angular/flex-layout";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [CharacterComponent],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    MatTableModule,
    FormsModule,
    FlexModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class CharacterModule { }
