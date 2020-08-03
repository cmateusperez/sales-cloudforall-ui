import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../model/product';
import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class ProductService {
 
  private productsUrl: string;
  private productAddUrl: string;

 
  constructor(private http: HttpClient) {
    this.productsUrl = 'https://sales-cloudforall-back.herokuapp.com/api/v1/product/getAll';
    this.productAddUrl = 'https://sales-cloudforall-back.herokuapp.com/api/v1/product/add';
  }
 
  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }
 
  public save(product: Product) {
    return this.http.post<Product>(this.productAddUrl, product);
  }
}