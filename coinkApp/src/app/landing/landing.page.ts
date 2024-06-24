import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  constructor(private router: Router) {}
  constructor(private router: Router) {}

  ngOnInit() {}

  login() {
    this.router.navigate(['telephone']);
  }

  register() {
    this.router.navigate(['telephone']);
  }
}
