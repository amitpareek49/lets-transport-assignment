import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  friends: Array<Object>= [
    {id: 0, name: 'Amit'},
    {id: 1, name: 'Sumit'},
    {id: 2, name: 'Vikas'},
    {id: 3, name: 'Manan'}
  ];
  
  userBalance: Object = {};

  constructor() { 
    this.modifyLocalStorage();
  }

  getFriends() {
    return JSON.parse(localStorage.getItem('friends'));
  }

  addFriend(friend){
    this.friends = this.readFromLocalStorage();
    this.friends.push(friend);
    this.modifyLocalStorage();
  }

  removeFriend(id){
    this.friends = this.friends.filter((value) => {
      return id !== value['id'];
    });
    this.modifyLocalStorage();
  }

  readFromLocalStorage() {
    return JSON.parse(localStorage.getItem('friends'));
  }

  modifyLocalStorage() {
    localStorage.setItem('friends', JSON.stringify(this.friends));
  }

  addUsername(username) {
    this.userBalance['name'] = username;
    this.userBalance['owe'] = 0;
    this.userBalance['get'] = 0;
    localStorage.setItem('userBalance', JSON.stringify(this.userBalance));
  }

  getUsername() {
    return JSON.parse(localStorage.getItem('userBalance'));
  }
}
