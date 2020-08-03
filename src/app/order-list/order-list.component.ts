import { Component, OnInit } from '@angular/core';
import { OrderDetail } from '../model/order-detail';
import { OrderService } from '../service/order-service.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  ordersDetail: OrderDetail[];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.findAll().subscribe(data => {
      this.ordersDetail = data;
    });
  }

}

