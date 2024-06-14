import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Output()
  public onNewcharacter: EventEmitter<Character> = new EventEmitter();

  public newCharacter: Character = {
    name: '',
    power: 0
  };

  public saveCharacter(): void {
    if (this.newCharacter.name.length === 0) {
      return;
    }

    this.onNewcharacter.emit(this.newCharacter);

    this.newCharacter = {
      name: '',
      power: 0
    };
  }

}
