import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any;
  message: any;
  user: any;
  id: number;

  constructor(private us: UserService, private ar: ActivatedRoute) {
    console.log("UserList Component created ....");
  }

  ngOnInit() {
    console.log("UserList Component initialized ....");

    this.ar.params.subscribe(
      params => this.id = +params['id']
    );

    if (this.id)
      this.getUser();
    else
      this.getAllUsers();
  }

  getAllUsers() {
    this.us.getAllUsers()
      .subscribe(response => this.users = response, error => this.message = error);
  }

  getUser() {
    this.us.getUser(this.id)
      .subscribe(response => this.user = response, error => this.message = error);
  }

}
