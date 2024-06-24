import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class TelephoneForm {
  private formBuilder: FormBuilder;

  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    });
  }
}

