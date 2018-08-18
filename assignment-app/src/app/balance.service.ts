import { Injectable } from '@angular/core';
import { FriendsService } from './friends.service';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  bills: Array<Object> =[];
  balances: Array<Object>;
  constructor(private friendService: FriendsService) { 
    console.log(JSON.stringify(friendService.getFriends()));
    this.balances = friendService.getFriends().map((friend) => {   
        var balance= {};
        balance['id'] = friend['id'];
        balance['name'] = friend['name'];
        balance['owe'] = 0;
        balance['get'] = 0;
        return balance;
    });
    localStorage.setItem('balances', JSON.stringify(this.balances));
  }

  getAllBills() {
    return this.readBillsFromLocalStorage();
  }
  
  addBills(bill: Object) {
      this.bills.push(bill);
      this.updateBillsInLocalStorage();
      this.updateBalances(bill);
  }

  updateBillsInLocalStorage() {
    localStorage.setItem('bills', JSON.stringify(this.bills));
  }

  readBillsFromLocalStorage(){
    return JSON.parse(localStorage.getItem('bills'));
  }

  getUserBalances(){
    return JSON.parse(localStorage.getItem('userBalance'));
  }

  updateBalances(bill: Object) {
    const amount= bill['amount'];
    let balance= [];
    const userBalance = this.getUserBalances();
    const totalFriend = this.friendService.getFriends().length + 1;
    const splitAmount = amount/totalFriend;
    if(bill['paidBy'] === userBalance['name']){
      userBalance['get'] += amount;
      this.balances = this.balances.map((balance) => {
        balance['name'] = balance['name'];
        balance['owe'] = balance['owe'] + splitAmount;
        balance['get'] = balance['get'];
        return balance;
      });
    } else {
      userBalance['owe'] += splitAmount;
      this.balances = this.balances.map((balance) => {
        if(bill['paidBy'] === balance['name']) {
          balance['name'] = balance['name'];
          balance['get'] = balance['get'] + amount;
        } else {
          balance['name'] = balance['name'];
          balance['owe'] += splitAmount;
        }
        return balance;
      });
    }

    localStorage.setItem('userBalance', JSON.stringify(userBalance));
    localStorage.setItem('balances', JSON.stringify(this.balances));

  }
}
