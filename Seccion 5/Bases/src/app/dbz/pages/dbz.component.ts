import { v4 } from './../../../../../../node_modules/@types/uuid/index.d';
import { Component, EventEmitter } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz',
  templateUrl: './dbz.component.html',
  styleUrl: './dbz.component.css'
})
export class DbzComponent {

  constructor(private dbzService: DbzService){

  }

  get personajes(): Character[]{
    return [...this.dbzService.personajes];//esto es para que no se pueda modificar el array original desde afuera
    //al agregar el spread operator se crea un nuevo array con los mismos elementos del original
  }

  public addCharacter(character: Character):void{
    this.dbzService.nuevoPersonaje(character);
  }

  public deleteCharacter(index:string):void{
    this.dbzService.eliminarPersonaje(index);
  }


}
