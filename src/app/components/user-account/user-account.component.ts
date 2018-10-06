import { Component, OnInit } from '@angular/core';
import { ApplicationUser } from '../../models/ApplicationUser';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

user: ApplicationUser;
  
  User: ApplicationUser = new ApplicationUser(null, null, null, null, null, null, null, null, null, null);
  model: ApplicationUser = new ApplicationUser(null, null, null, null, null, null, null, null, null, null);
  modalOpened = false;

  constructor(private toastr: ToastrService, private userService: UserService) { }

  ngOnInit() {
    this.getDetails()
  }

  getDetails():void{
    this.userService.getDetails()
    .subscribe(user =>{
      this.user = user;
      console.log('this.user'+ this.user);
    })
  }

  onEdit() {

  }

  onSubmitEdited() {

  }


}
