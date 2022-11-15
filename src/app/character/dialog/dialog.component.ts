import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CharacterService} from "../service/character.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  characterForm: FormGroup;
  actionBtn: string = "Salvar"

  constructor(
    private formBuilder: FormBuilder,
    private characterService: CharacterService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialog: MatDialogRef<DialogComponent>) {
  }

  ngOnInit(): void {
    this.characterForm = this.formBuilder.group({
      name: ['', Validators.required],
      characterClass: ['', Validators.required],
      race: ['', Validators.required],
      level: ['', Validators.required],
      lifePoints: ['', Validators.required],
      magicPoints: ['', Validators.required],
      attackPoints: ['', Validators.required],
      defensePoints: ['', Validators.required],
      expertisePoints: ['', Validators.required],
    })

    if (this.editData) {

      this.actionBtn = "Atualizar";
      this.characterForm.controls['name'].setValue(this.editData.name);
      this.characterForm.controls['characterClass'].setValue(this.editData.characterClass);
      this.characterForm.controls['race'].setValue(this.editData.race);
      this.characterForm.controls['level'].setValue(this.editData.level);
      this.characterForm.controls['lifePoints'].setValue(this.editData.lifePoints);
      this.characterForm.controls['magicPoints'].setValue(this.editData.magicPoints);
      this.characterForm.controls['attackPoints'].setValue(this.editData.attackPoints);
      this.characterForm.controls['defensePoints'].setValue(this.editData.defensePoints);
      this.characterForm.controls['expertisePoints'].setValue(this.editData.expertisePoints);
    }
  }

  createCharacter() {
    if (!this.editData) {
      if (this.characterForm.valid) {
        this.characterService.createCharacter(this.characterForm.value).subscribe({
          next: (res) => {
            this.characterForm.reset();
            this.dialog.close('save');
          },
          error: () => {
            alert("Erro ao cadastrar personagem");
          }
        })
      }
    } else {
      this.updateCharacter()
    }
  }

  updateCharacter() {
    this.characterService.updateCharacter(this.characterForm.value, this.editData.id).subscribe({
      next: (res) => {
        this.characterForm.reset();
        this.dialog.close('update');
      },
      error: () => {
        alert("Erro ao atualizar personagem");
      }
    })
  }


}

//https://youtu.be/jGbP620NahE?t=3845
