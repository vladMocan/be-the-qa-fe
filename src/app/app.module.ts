import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { UsersListComponent } from './users/users-list.componenent';
import { UserDetailComponent } from './users/user-details/user-detail.component';
import { NotFondComponent} from './home/404.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { PmHedearComponent } from './header/pm-hedear/pm-hedear.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserDetailComponent,
    UserCreateComponent,
    PmHedearComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'users', component: UsersListComponent },
      { path: 'users/:id', component:UserDetailComponent },
      { path: '404', component:NotFondComponent },
      { path: 'user/create', component:UserCreateComponent },
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: '**', redirectTo: '404', pathMatch: 'full' }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
