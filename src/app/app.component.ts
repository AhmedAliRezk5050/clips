import { Component } from '@angular/core';
import {FirebaseAuthService} from "./services/auth/firebase-auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clips';

  constructor(public firebaseAuth: FirebaseAuthService) {
  }
}
