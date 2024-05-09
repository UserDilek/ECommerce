import { Routes } from '@angular/router';
import { LayoutComponent } from './Components/Dashboard/layout/layout.component';
import { DashboardComponent } from './Components/Dashboard/dashboard/dashboard.component';
import { OrderComponent } from './Components/Dashboard/order/order.component';
import { HomeComponent } from './Components/UI/home/home.component';
import { ProductsComponent } from './Components/UI/products/products.component';
import { CartComponent } from './Components/UI/cart/cart.component';

export const routes: Routes = [
  {path:" ",redirectTo:"home",pathMatch:"full"},
  {path:"admin",component:LayoutComponent,children:[
    {path:"home",component:DashboardComponent},
    {path:"order",component:OrderComponent},
  ]},
  {path:"home",component:HomeComponent},
  {path:"products",component:ProductsComponent},
  {path:"cart",component:CartComponent}
];
