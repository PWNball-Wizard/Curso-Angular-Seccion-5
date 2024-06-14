import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroes:string[] = ['Hulk', 'Black Widow', 'Spiderman', 'She Hulk', 'Ironman', 'Seaman']
  public heroeBorrado?:string;

  borrarUltimoHeroe():void{
    this.heroeBorrado = this.heroes.pop();
  }

  //la negcion en typescript es con el signo de admiracion ejem: !variable

}
