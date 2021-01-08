import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'

import { IUser } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'pm-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  constructor(private router: Router, 
    private userService: UserService) { }

  ngOnInit(): void {
  }

  saveUser(formValues: any): void {
    let newUSer : IUser = <IUser>formValues;
    this.userService.addUser(newUSer)
    .subscribe(
     result => this.router.navigate(['/users']))
     error => console.log('error ', error);
  }

  onSubmit(form: NgForm){
  (form.valid) ? this.saveUser(form.value) : console.log("Field required")
  }

}
