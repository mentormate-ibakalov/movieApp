import { Component, OnInit } from '@angular/core';
import { userObject } from '@shared/interfaces/userObject';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userDetails:userObject;

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
  }

}
