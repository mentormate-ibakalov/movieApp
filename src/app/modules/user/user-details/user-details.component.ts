import { Component, OnInit } from '@angular/core';
import { User } from '@shared/interfaces/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userDetails:User;

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
  }

}
