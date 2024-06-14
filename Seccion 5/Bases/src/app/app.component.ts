import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Mi primera app de Angular';

  /* counter: number = 0;
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
  } */
}
