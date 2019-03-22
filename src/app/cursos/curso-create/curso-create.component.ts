import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { TextField } from "tns-core-modules/ui/text-field";


@Component({
  selector: 'app-curso-create',
  templateUrl: './curso-create.component.html',
  styleUrls: ['./curso-create.component.scss']
})
export class CursoCreateComponent implements OnInit {

  public title= 'Crear ';

  constructor(
    private cursosService : CursosService
  ) { }

  ngOnInit() {
  }





  public firstTx: string = "";

  public onTextChange(args) {
      let textField = <TextField>args.object;

      console.log("onTextChange");
      this.firstTx = textField.text;
  }

  public onReturn(args) {
      let textField = <TextField>args.object;

      console.log("onReturn");
      this.firstTx = textField.text;
  }

  public showAlert(result) {
      alert("Text: " + result);
  }

  public submit(result) {
      alert("Text: " + result);
  }








  onTap(){
    return this.cursosService.addCurso()
  }

}
