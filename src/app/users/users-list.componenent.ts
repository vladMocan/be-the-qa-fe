import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { IUser } from './user';
import { UserService} from './user.service';


@Component({
  templateUrl: './users-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UsersListComponent implements OnInit {
  pageTitle: string = 'User list';
  errorMessage: string;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
 set listFilter(value: string) {
    this._listFilter = value;
    this.filteredUsers = this.listFilter ? this.performFilter(this.listFilter) : this.users;
  }

  filteredUsers: IUser[];
  users: IUser[] =[];

   constructor(private userService: UserService) {
      this.listFilter = "";
   }

   deleteUser(userID: number): void{
     this.userService.deleteUser(userID)
     .subscribe(
     (data: void) => {
         let index: number = this.users.findIndex(user => user.id === userID);
         this.users.splice(index,1);
       },
     )
   }

   updateActiveProprietyUser(userID: number, active: boolean):void{
    const body = { active : !active };
    this.userService.updateActive(body, userID).
    subscribe(
      error => console.log('error ', error)
    )
   }

   performFilter(filterBy: string): IUser[] {
     filterBy = filterBy.toLocaleLowerCase();
     return this.users.filter((user: IUser) =>
          user.username.toLocaleLowerCase().indexOf(filterBy)!==-1)
   }

   ngOnInit(): void {
     this.userService.getUsers().subscribe({
       next : users =>{
        this.users = users,
        this.filteredUsers = this.users;
       } ,
       error: err => this.errorMessage = err
     });
     
   }
}