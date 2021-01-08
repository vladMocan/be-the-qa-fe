import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'


import { IUser } from '../user'
import { UserService } from '../user.service';

@Component({
  selector: 'pm-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  pageTitle: string = 'User Details';
  SelectedUser: IUser;
  allUsers: IUser[];
  

  constructor(private route: ActivatedRoute, 
    private userService: UserService,
    private router: Router) { 

  }

  getUserById(userID: number): void{
    this.userService.getUSerById(userID)
    .subscribe (
    (data:IUser) => this.SelectedUser = data,
    (err: any) => this.router.navigate(['/404']))
    
  }

  getUSers(): void {
    this.userService.getUsers
  }

  deleteUser(userID: number): void {
    this.userService.deleteUser(userID)
      .subscribe(
        (data: void) => {
        let index: number = this.allUsers.findIndex(user=> user.id === userID);
        this.allUsers.splice(index,1);
      }
      );
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id')
    this.pageTitle += ': ${id}';
    this.getUserById(id);
  }

  updateUser(formValues: any, id: number): void {
    let newUSer : IUser = <IUser>formValues;
    this.userService.updateUser(newUSer, id)
    .subscribe(
     result => this.router.navigate(['/users']))
     error => console.log('error ', error);
  }

  onSubmit(form: NgForm, id: number){
    (form.valid) ? this.updateUser(form.value,id) : console.log("Field required")
    }
}