import { Component } from '@angular/core';

@Component({
  selector : 'pm-root',
  template : `
  <nav class='navbar navbar-expand navbar-light bg-light'>
      <a class='navbar-brand'>{{pageTitle}}</a>
      <ul class='nav nav-pills'>
        <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/users']">User List</a></li>
      </ul>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  <div class='header'>
    <pm-pm-hedear></pm-pm-hedear>
  </div>
  `
})
export class AppComponent {
  pageTitle: string ='be the qa FE';
}