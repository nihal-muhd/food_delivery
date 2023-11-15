import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { RestaurantItemsComponent } from './views/restaurant-items/restaurant-items.component';
import { CreateOrderComponent } from './views/create-order/create-order.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
  },
  {
    path: 'Login',
    component: LoginComponent,
  },
  {
    path: 'foodCategory',
    component: CategoriesComponent,
  },
  {
    path: 'restaurant-item',
    component: RestaurantItemsComponent,
  },
  {
    path: 'foodCategory',
    component: CreateOrderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
