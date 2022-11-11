import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CharacterService} from "../service/character.service";
import {MatDialogRef} from "@angular/material/dialog";
import {Character} from "../model/character";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  characterForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private characterService: CharacterService,
    private dialog: MatDialogRef<DialogComponent>) {
  }

  ngOnInit(): void {
    this.characterForm = this.formBuilder.group({
      name: ['', Validators.required],
      characterClass: ['', Validators.required],
      race: ['', Validators.required],
      lifePoints: ['', Validators.required],
      magicPoints: ['', Validators.required],
      attackPoints: ['', Validators.required],
      defensePoints: ['', Validators.required],
      expertisePoints: ['', Validators.required],
    })
  }

  createCharacter() {
    if (this.characterForm.valid) {
      this.characterService.createCharacter(this.characterForm.value).subscribe({
        next: (res) => {
          // this.getCharacters();
          this.characterForm.reset();
          this.dialog.close();
        },
        error: () => {
          alert("Erro ao cadastrar personagem");
        }
      })
    }
  }
}
//https://youtu.be/jGbP620NahE?t=3845
