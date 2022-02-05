import { Component } from '@angular/core';
import { CEP } from './cep';
import { CepService } from './cep.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-spring';
  cep = '';
  cepConsultado?: CEP;

  constructor(private CepService: CepService){}

  onGetEndereco(): void {
    this.CepService.getEndereco(this.cep).subscribe({
      next: (cep: CEP) => this.cepConsultado = cep,
      error: (erro) => console.log(erro)

    })

  }


}
