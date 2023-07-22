import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { CartComponent } from './pages/cart/cart.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProductComponent } from './pages/product/product.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import { ThanksComponent } from './pages/thanks/thanks.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { SnackComponent } from './components/snack/snack.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSnackBar} from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardProductComponent,
    CartComponent,
    ProductComponent,
    MenuHeaderComponent,
    ThanksComponent,
    SnackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	MatToolbarModule,
	BrowserAnimationsModule,
	MatCardModule,
	MatButtonModule,
	MatGridListModule,
	MatMenuModule,
	MatBadgeModule,
	MatSelectModule,
	MatFormFieldModule,
	FormsModule,
	MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
