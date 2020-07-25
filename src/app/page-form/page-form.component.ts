import { Component } from '@angular/core';

@Component({
  selector: 'app-page-form',
  templateUrl: './page-form.component.html',
  styleUrls: ['./page-form.component.css']
})
export class PageFormComponent {

  curso: string;

  adicionarCurso (cursoInput) : void {
    console.log(cursoInput.value);
  }

}
