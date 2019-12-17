import {Injectable, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import {Observable, of} from 'rxjs';
import {USERS} from './mock-users';
import {User} from './user';
import {MessageService} from './message.service';

/*const routes: Routes = [
  { path: 'users', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export class UserService {
}*/
@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private messageService: MessageService) {
  }

  getUsers(): Observable<User[]> {
    this.messageService.add('UserService: fetched users');
    return of(USERS);
  }

  getUser(id: number) {
   this.messageService.add('user: fetched user id={}');
   return of (USERS.find(user => user.id));
  }
}

