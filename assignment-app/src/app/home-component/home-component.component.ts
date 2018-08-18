import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../friends.service';
import { FormGroup, FormControl, FormBuilder, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponent implements OnInit {

  isUsernameEntered: boolean = false;
  username: string = '';
  newFriend: boolean = false;
  friendsLength;
  friendFrom: FormGroup;
  friends: Array<Object> = [];
  constructor(private friendService: FriendsService, private fromBuilder: FormBuilder) { 
    this.createFriendForm();
  }

  createFriendForm(){
    this.friendFrom = this.fromBuilder.group({
      id: [''],
      name: ['']
    });
  }

  ngOnInit() {
    if(localStorage.getItem('friends')) {
      this.friends = JSON.parse(localStorage.getItem('friends'));
      this.isUsernameEntered = JSON.parse(localStorage.getItem('isUsernameEntered'));
    }
     else
       this.friends = this.friendService.getFriends();
  }

  onSubmit() {
    const friendsLength = this.friends.length;
    const friend = {
      id: this.friends[friendsLength-1]['id'] +1,
      name: this.friendFrom.get('name').value
    }
    this.friendService.addFriend(friend);
    this.friends = JSON.parse(localStorage.getItem('friends'));
  }

  removeFriend(id) {
    this.friendService.removeFriend(id);
    this.friends = JSON.parse(localStorage.getItem('friends'));
  }

  userAfterLogin() {
    this.isUsernameEntered = true;
    localStorage.setItem('isUsernameEntered', 'true');
    this.friendService.addUsername(this.username);
    if(localStorage.getItem('friends')) {
      this.friends = JSON.parse(localStorage.getItem('friends'));
      this.isUsernameEntered = true;
    }
    else
      this.friends = this.friendService.getFriends();
  }
}
