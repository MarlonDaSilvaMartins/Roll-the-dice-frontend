import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  characterName: string
  characterClass: string
  race: string
  level: number
  lifePoints: number
  magicPoints: number
  attackPoints: number
  defensePoints: number
  expertisePoints: number

  constructor(@Inject(MAT_DIALOG_DATA) public characterData: any) {
  }

  ngOnInit(): void {
    this.characterName = this.characterData.name
    this.characterClass = this.characterData.characterClass
    this.race = this.characterData.race
    this.level = this.characterData.level
    this.lifePoints = this.characterData.lifePoints
    this.magicPoints = this.characterData.magicPoints
    this.attackPoints = this.characterData.attackPoints
    this.defensePoints = this.characterData.defensePoints
    this.expertisePoints = this.characterData.expertisePoints
  }
}
