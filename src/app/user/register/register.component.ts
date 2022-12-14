import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {FirebaseAuthService} from "../../services/auth/firebase-auth.service";
import IUser from "../../models/user.model";
import {ModalService} from "../../services/modal.service";
import {RegisterValidators} from "../validators/register-validators";
import {EmailTaken} from "../validators/email-taken";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  submitBtnDisabled = false;

  constructor(
    private firebaseAuth: FirebaseAuthService,
    private modalService: ModalService,
    private emailTaken: EmailTaken
    ) {
  }

  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ], [this.emailTaken.validate]);
  age = new FormControl<number | null>(null, [
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
  }, [RegisterValidators.match('password', 'confirmPassword')])
  alertColor = '';
  alertMsg = '';
  alertShown = false;

  async register() {
    this.submitBtnDisabled = true;
    this.alertShown = true;
    this.alertMsg = 'Please wait, your account is being created.';
    this.alertColor = 'blue';
    try {
      await this.firebaseAuth.createUser(this.registerForm.value as IUser);
      this.alertColor = 'green';
      this.alertMsg = 'Success!';

      this.modalService.toggleModal('auth', false)

      setTimeout(() => {
        this.modalService.toggleModal('auth', false)
      }, 1000);

    } catch (e: any) {
      console.error(e);
      this.alertColor = 'red';
      this.alertMsg = 'Registering failed, try again later';
      this.submitBtnDisabled = false;
    }

  }
}
