import {Component, Input, OnInit} from '@angular/core';
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-modal[modalId]',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() modalId!: string

  constructor(public modalService: ModalService) {

  }

  ngOnInit(): void {
    this.modalService.registerModal(this.modalId)
  }

}
