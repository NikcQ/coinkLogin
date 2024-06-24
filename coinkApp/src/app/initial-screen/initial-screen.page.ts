import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial-screen',
  templateUrl: './initial-screen.page.html',
  styleUrls: ['./initial-screen.page.scss'],
})
export class InitialScreenPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['landing']);
    }, 1000);
  }
}
