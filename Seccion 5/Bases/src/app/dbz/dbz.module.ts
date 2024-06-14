import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzComponent } from './pages/dbz.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DbzComponent,
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DbzComponent
  ]
})
export class DbzModule { }
