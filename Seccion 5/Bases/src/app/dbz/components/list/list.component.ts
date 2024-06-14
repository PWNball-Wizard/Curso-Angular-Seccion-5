import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() public personajes: Character[] = [];

  @Output() public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  public deleteCharacter(index?:string):void{
    if(!index){
      return;
    }
    
    this.onDeleteCharacter.emit(index);
  }

}
