import { Component } from "@angular/core";

@Component(
  {
    selector: "app-counter", //es el nombre de la etiqueta que se va a usar en el html
    templateUrl: "./counter.component.html"// es el archivo html que se va a usar para este componente
  }
)
export class CounterComponent {

  counter: number = 0;
  increment_decrementBy: number = 10;

  public incremento(value:number):void
  {
    this.counter += value;
  }

  public decremento(value: number):void
  {
    this.counter -= value;
  }

  public restablecer ():void
  {
    this.counter = 0;
  }
  
}
