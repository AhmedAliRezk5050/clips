import { Component, OnInit } from '@angular/core';
import {ModalService} from "../services/modal.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
  }

  startAuth(event: MouseEvent) {
    event.preventDefault();
    this.modalService.toggleModal(true);
  }
}
