import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class LoginPageForm {
  private formBuilder: FormBuilder;

  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      document: ['', [Validators.required]],
      idNumber: ['', [Validators.required]],
      expeditionDate: [''],
      gender: [''],
      birthDay: [''],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }
}
