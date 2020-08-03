import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../model/order';
import { OrderDetail } from '../model/order-detail';
import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class OrderService {
 
  private ordersDetailUrl: string;
  private orderAddUrl: string;

 
  constructor(private http: HttpClient) {
    this.ordersDetailUrl = 'https://sales-cloudforall-back.herokuapp.com/api/v1/order/getAll';
    this.orderAddUrl = 'https://sales-cloudforall-back.herokuapp.com/api/v1/order/add';
  }
 
  public findAll(): Observable<OrderDetail[]> {
    return this.http.get<OrderDetail[]>(this.ordersDetailUrl);
  }
 
  public save(order: Order) {
    return this.http.post<Order>(this.orderAddUrl, order);
  }
}
