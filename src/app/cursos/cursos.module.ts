import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoCreateComponent } from './curso-create/curso-create.component';
import { CursoEditComponent } from './curso-edit/curso-edit.component';
import { CursoListComponent } from './curso-list/curso-list.component';

@NgModule({
  declarations: [CursoCreateComponent, CursoEditComponent, CursoListComponent],
  imports: [
    CommonModule
  ]
})
export class CursosModule { }
