import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-data';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user-data',
  imports: [],
  templateUrl: './user-data.html',
  styleUrl: './user-data.css',
})
export class UserData {
  selectedUser = this.getRandUser();

  getRandUser() {
    const randIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    return DUMMY_USERS[randIndex];
  }

  randomizeUser() {
    this.selectedUser = this.getRandUser();
  }

  get imgPath(){
    return 'users/' + this.selectedUser.avatar;
  }
}
