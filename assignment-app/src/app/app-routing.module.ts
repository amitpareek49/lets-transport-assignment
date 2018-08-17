import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component.component';
import { BillComponent } from './bill/bill.component';
import { BalancesComponent } from './balances/balances.component';

const appRoutes: Routes = [
  { 
    path: '', 
    component: HomeComponent
  },
  { 
    path: 'bill', 
    component: BillComponent
  },
  { 
    path: 'balances', 
    component: BalancesComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
