import { Component } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  user!: User;
  constructor(private userService: UserService) {

    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
  }
}
