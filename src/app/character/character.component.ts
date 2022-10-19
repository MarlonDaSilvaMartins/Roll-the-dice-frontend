import { Component, OnInit } from '@angular/core';
import { CharacterService } from './service/character.service';
import { Character } from './model/character';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  character = {} as Character;
  characters: Character[];

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.characterService.getCharacter().subscribe((characters: Character[]) => {
      this.characters = characters;
    });
  }

  cleanForm(form: NgForm) {
    this.getCharacters();
    form.resetForm();
    this.character = {} as Character;
  }
}
