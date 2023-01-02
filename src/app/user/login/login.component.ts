import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {FirebaseAuthService} from "../../services/auth/firebase-auth.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    email: '',
    password: ''
  }

  constructor(private  firebaseAuth: FirebaseAuthService, private modalService: ModalService) {
  }

  ngOnInit(): void {
  }

  alertColor = '';
  alertMsg = '';
  alertShown = false;
  submitBtnDisabled = false;
  async login() {
    this.submitBtnDisabled = true;
    try {
      this.alertShown = true;
      this.alertMsg = 'Please wait, you are being logged in.';
      this.alertColor = 'blue';

      await this.firebaseAuth.login(this.credentials.email, this.credentials.password)

      this.alertColor = 'green';
      this.alertMsg = 'Success!';

      this.modalService.toggleModal('auth', false)
    } catch (e: any) {
      this.alertMsg = 'Invalid credentials.';
      this.alertColor = 'red';
    }
    this.submitBtnDisabled = false;
  }
}
