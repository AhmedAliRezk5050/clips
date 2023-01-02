import {Component, OnInit} from '@angular/core';
import {ModalService} from "../services/modal.service";
import {FirebaseAuthService} from "../services/auth/firebase-auth.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public modalService: ModalService, public firebaseAuth: FirebaseAuthService) {
  }

  ngOnInit(): void {
    this.firebaseAuth.isAuthenticated$.subscribe(console.log)
  }

  startAuth(event: MouseEvent) {
    event.preventDefault();
    this.modalService.toggleModal('auth', true)
  }

  async logout(event: MouseEvent) {
    event.preventDefault()
    await this.firebaseAuth.logout()
  }
}
