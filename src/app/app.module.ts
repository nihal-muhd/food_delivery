import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './views/login/login.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { RestaurantItemsComponent } from './views/restaurant-items/restaurant-items.component';
import { CreateOrderComponent } from './views/create-order/create-order.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategoriesComponent,
    RestaurantItemsComponent,
    CreateOrderComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
