import { Component, OnInit } from '@angular/core';
import {ModalService} from "../services/modal.service";
import {FirebaseAuthService} from "../services/auth/firebase-auth.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public modalService: ModalService, public firebaseAuth: FirebaseAuthService) { }

  ngOnInit(): void {
  }

  startAuth(event: MouseEvent) {
    event.preventDefault();
    this.modalService.toggleModal('auth',true)
  }
}
