import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductComponent } from './pages/product/product.component';
import { ThanksComponent } from './pages/thanks/thanks.component';
const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'cart', component: CartComponent },
	{ path: 'product/:id', component: ProductComponent },
	{ path: 'thanks', component: ThanksComponent }
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
