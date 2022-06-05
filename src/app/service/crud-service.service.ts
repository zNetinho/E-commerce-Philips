import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  baseUrl = 'https://docs.google.com/spreadsheets/d/1Uj4f8mIlcHkl9c1aW-Wp1YF3SeS-87AihtdvntoK450/edit?usp=sharing'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private http: HttpClient) { }

  listarProdutos():Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }

  criarProduto(produto: Product) {
      return this.http.post<Product>(this.baseUrl, produto, this.httpOptions)
  }
}
