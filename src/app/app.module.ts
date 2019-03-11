import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

// Routting
import { AppRoutingModule } from './app-routing.module';

// COmponents
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { HomeComponent } from './components/home/home.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductComponent } from './components/product/product.component';

// Services
import { ProductService } from './services/product.service';

// Redcers
import { shoppingCartReducer } from './reducers/shopping-cart.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    HomeComponent,
    ShoppingCartComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      tutorial: shoppingCartReducer
    })
  ],
  providers: [
    ProductService
  ],
  bootstrap: [
    AppComponent]
})
export class AppModule { }
