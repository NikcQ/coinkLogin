import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-succes',
  templateUrl: './succes.page.html',
  styleUrls: ['./succes.page.scss'],
})
export class SuccesPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  reset() {
    this.router.navigate(['']);
  }
}
