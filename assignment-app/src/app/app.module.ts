import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home-component/home-component.component';
import { BillComponent } from './bill/bill.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BalancesComponent } from './balances/balances.component';
import { BalanceService } from './balance.service';
import { FriendsService } from './friends.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BillComponent,
    NavbarComponent,
    BalancesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [BalanceService, FriendsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
