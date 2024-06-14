import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public nombre : string = 'spiderman';
  public edad :number = 13;
  public metodo : string = '';
  public capitalizado : string = '';

  get capitalizedName():string{
    return this.nombre.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.capitalizedName} - ${this.edad}`;
  }


  public cambiaNombre(nvoNom: string):void{

    this.nombre = nvoNom;

  }

  public cambiaEdad(nvoEdad:number):void{

    this.edad = nvoEdad;

  }

  public resetForm():void{

    this.nombre = 'spiderman';
    this.edad = 13;
  }

}
