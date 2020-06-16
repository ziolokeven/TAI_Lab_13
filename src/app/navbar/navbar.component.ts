import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) {
  }


  ngOnInit() {
  }
  logOut() {
    return this.authService.logout().subscribe((response) => {
      this.router.navigate(['/']);
    });
  }
}
