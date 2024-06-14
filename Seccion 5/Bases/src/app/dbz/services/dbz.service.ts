import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public personajes: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 15000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    },
    {
      id: uuid(),
      name: 'Trunks',
      power: 5000
    },
    {
      id: uuid(),
      name: 'Gohan',
      power: 10000
    }
  ];

  public nuevoPersonaje(character: Character):void{

    const newCharacter = {id: uuid(),...character};
    

    this.personajes.push(newCharacter);
    
    console.log(this.personajes);
  }

  public eliminarPersonaje(index:string):void{
    this.personajes = this.personajes.filter((character) => character.id !== index);
  }

  constructor() { }
}
