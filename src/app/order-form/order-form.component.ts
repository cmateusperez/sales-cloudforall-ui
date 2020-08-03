import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../service/order-service.service';
import { Order } from '../model/order';
 
@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent {
 
  order: Order;
 
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private orderService: OrderService) {
    this.order = new Order();
  }
 
  onSubmit() {
    this.orderService.save(this.order).subscribe(result => this.gotoOrderList());
  }
 
  gotoOrderList() {
    this.router.navigate(['/orders']);
  }
}
