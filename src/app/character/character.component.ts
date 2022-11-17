import {Component, OnInit} from '@angular/core';
import {CharacterService} from './service/character.service';
import {Character} from './model/character';
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "./dialog/dialog.component";
import {CharacterDetailComponent} from "./character-detail/character-detail.component";
import {DeleteDialogComponent} from "./delete-dialog/delete-dialog.component";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  displayedColumns: string[] = ['name', 'characterClass', 'race', 'level', 'action'];
  dataSource: MatTableDataSource<any>;

  constructor(private dialog: MatDialog, private characterService: CharacterService) {
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    }).afterClosed().subscribe(value => {
      if (value === 'save') {
        this.getCharacters();
      }
    });
  }

  getCharacters() {
    this.characterService.getCharacters().subscribe((characters: Character[]) => {
      this.dataSource = new MatTableDataSource(characters);
    });
  }

  viewCharacter(row: any) {
    this.dialog.open(CharacterDetailComponent, {
      width: '20%',
      data: row
    })
  }

  editCharacter(row: any) {
    this.dialog.open(DialogComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(value => {
      if (value === 'update') {
        this.getCharacters();
      }
    });
  }

  deleteCharacter(row: any) {
    this.dialog.open(DeleteDialogComponent, {
      width: '20%',
      data: row
    }).afterClosed().subscribe(value => {
      if (value === 'delete') {
        this.getCharacters();
      }
    });
  }
}
