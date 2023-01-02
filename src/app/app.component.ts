import {Component, OnInit} from '@angular/core';
import {FirebaseAuthService} from "./services/auth/firebase-auth.service";
import {delay, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'clips';
  isAuthenticatedWithDelay$: Observable<boolean>
  constructor(public firebaseAuth: FirebaseAuthService) {
    this.isAuthenticatedWithDelay$ = this.firebaseAuth.isAuthenticated$.pipe(delay(1000))
  }

  ngOnInit(): void {

  }

}
