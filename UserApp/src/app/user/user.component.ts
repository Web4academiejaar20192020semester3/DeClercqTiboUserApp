import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { USERS} from '../mock-users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users = USERS;

  constructor() { }

  ngOnInit() {
  }

}
