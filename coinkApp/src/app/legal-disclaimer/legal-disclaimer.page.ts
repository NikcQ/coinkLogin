import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-legal-disclaimer',
  templateUrl: './legal-disclaimer.page.html',
  styleUrls: ['./legal-disclaimer.page.scss'],
})
export class LegalDisclaimerPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  login() {
    this.router.navigate(['succes']);
  }
}
