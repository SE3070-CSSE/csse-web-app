import { Component, OnInit } from '@angular/core';
import { ApplicationUser } from '../../models/ApplicationUser';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  User: ApplicationUser = new ApplicationUser(null, null, null, null, null, null, null, null, null, null);
  model: ApplicationUser = new ApplicationUser(null, null, null, null, null, null, null, null, null, null);
  modalOpened = false;

  constructor() { }

  ngOnInit() {
  }

  onEdit() {

  }

  onSubmitEdited() {

  }

}
