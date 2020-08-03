import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderFormComponent } from './order-form/order-form.component';
 
const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'addproduct', component: ProductFormComponent },
  { path: 'orders', component: OrderListComponent },
  { path: 'addorder', component: OrderFormComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }