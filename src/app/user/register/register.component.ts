import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  submitBtnDisabled = false;
  constructor(private auth: AngularFireAuth) {
  }

  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  age = new FormControl('', [
    Validators.required,
    Validators.min(18),
    Validators.max(120)
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ]);
  confirmPassword = new FormControl('', [
    Validators.required
  ]);
  phoneNumber = new FormControl('', [
    Validators.required
  ]);
  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirmPassword: this.confirmPassword,
    phoneNumber: this.phoneNumber,
  })
  alertColor = '';
  alertMsg = '';
  alertShown = false;

  async register() {
    this.submitBtnDisabled = true;
    this.alertShown = true;
    this.alertMsg = 'Please wait, your account is being created.';
    this.alertColor = 'blue';
    try {
      const {email, password} = this.registerForm.value;
      const credentials = await this.auth.createUserWithEmailAndPassword(email!, password!)
      this.alertColor = 'green';
      this.alertMsg = 'Success!';
      console.log(credentials);
    } catch (e: any) {
      console.error(e);
      this.alertColor = 'red';
      this.alertMsg = 'Registering failed, try again later';
    }
    this.submitBtnDisabled = false;
  }
}
