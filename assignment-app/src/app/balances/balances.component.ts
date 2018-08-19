import { Component, OnInit } from '@angular/core';
import { BalanceService } from './../balance.service';

@Component({
  selector: 'app-balances',
  templateUrl: './balances.component.html',
  styleUrls: ['./balances.component.css']
})
export class BalancesComponent implements OnInit {


  balances: Array<Object> = [];
  userBalance: Object = [];

  constructor(private balanceService: BalanceService) { }

  ngOnInit() {
    this.balances = JSON.parse(localStorage.getItem('balances'));
    this.userBalance = JSON.parse(localStorage.getItem('userBalance'));
  }


  
}
