import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CEP } from './cep';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }

  getEndereco(cep: string): Observable<CEP> {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    return this.http.get<CEP>(url);
  }
}
