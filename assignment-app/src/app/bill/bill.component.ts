import { Component, OnInit } from '@angular/core';
import { BalanceService } from '../balance.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { FriendsService } from '../friends.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  billForm: FormGroup;
  bills: Array<Object> = [];
  constructor(private balanceService: BalanceService, private fromBuilder: FormBuilder, private friendService: FriendsService) { 
    this.createBillForm();
  }

  newFriend: boolean = false;
  friendsLength;

  createBillForm(){
    this.billForm = this.fromBuilder.group({
      id: [''],
      desc: [''],
      amount:[''],
      paidBy: ['']
    });
  }

  ngOnInit() {
    if(localStorage.getItem('bills')){
      this.bills = JSON.parse(localStorage.getItem('bills'));
    }
  }

  onSubmit() {
    let billLength = this.bills.length;
    const bill = {
      id: billLength,
      desc: this.billForm.get('desc').value,
      amount: this.billForm.get('amount').value,
      paidBy: this.billForm.get('paidBy').value

    }
    this.balanceService.addBills(bill);
    this.bills = JSON.parse(localStorage.getItem('bills'));
  }

}
