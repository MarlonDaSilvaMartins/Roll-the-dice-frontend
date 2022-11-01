import {Component, OnInit} from '@angular/core';
import { CharacterService } from './service/character.service';
import { Character } from './model/character';
import { MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  displayedColumns: string[] = ['name', 'characterClass', 'race', 'level'];
  dataSource: MatTableDataSource<any>;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.characterService.getCharacter().subscribe((characters: Character[]) => {
      this.dataSource = new MatTableDataSource(characters);
    });
  }
}
