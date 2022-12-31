import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    email: new FormControl(''),
    age: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    phoneNumber: new FormControl(''),
  })

  get name() {
    return this.registerForm.get('name')!
  }

  get email() {
    return this.registerForm.get('email')!
  }

  get age() {
    return this.registerForm.get('age')!
  }

  get password() {
    return this.registerForm.get('password')!
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword')!
  }

  get phoneNumber() {
    return this.registerForm.get('phoneNumber')!
  }
}
