import {Component, OnInit} from '@angular/core';
import {CharacterService} from './service/character.service';
import {Character} from './model/character';
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "./dialog/dialog.component";

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
    });
  }

  getCharacters() {
    this.characterService.getCharacters().subscribe((characters: Character[]) => {
      this.dataSource = new MatTableDataSource(characters);
    });
  }

  deleteCharacter(id: string) {
    this.characterService.deleteCharacter(id).subscribe({
      next: (res) => {
        this.getCharacters();
      },
      error: () => {
        alert("Erro ao deletar personagem");
      }
    });
  }
}
