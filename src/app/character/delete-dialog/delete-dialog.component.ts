import {Component, Inject, OnInit} from '@angular/core';
import {CharacterService} from "../service/character.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  id: string
  characterName: string

  constructor(
    @Inject(MAT_DIALOG_DATA) public characterData: any,
    private characterService: CharacterService,
    private dialog: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.id = this.characterData.id;
    this.characterName = this.characterData.name;
  }

  deleteCharacter(id: string) {
    this.characterService.deleteCharacter(id).subscribe({
      next: (res) => {
        console.log(this.id);
        console.log(this.characterName);
        this.dialog.close('delete');
      },
      error: () => {
        alert("Erro ao deletar personagem");
      }
    });
  }

}
