import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user!: User;
  constructor(private userService: UserService, private router: Router) {

    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
  }

  ngOnInit(): void {
  }

  logout() {
    this.userService.logout();
    this.router.navigateByUrl('login');
  }

  get isAuth() {
    return this.user.token;
  }
}
