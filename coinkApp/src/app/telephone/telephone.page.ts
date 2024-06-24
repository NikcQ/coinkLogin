import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TelephoneForm } from './telephoneForm';

@Component({
  selector: 'app-telephone',
  templateUrl: './telephone.page.html',
  styleUrls: ['./telephone.page.scss'],
})
export class TelephonePage implements OnInit {
  
  form: FormGroup;
  
  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = new TelephoneForm(this.formBuilder).createForm();
  }

  login() {
    this.router.navigate(['login']);
  }
}
