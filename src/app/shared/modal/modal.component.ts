import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() modalId!: string

  constructor(public modalService: ModalService, public elementRef: ElementRef) {

  }

  ngOnInit(): void {
    document.body.appendChild(this.elementRef.nativeElement)
  }

  toggleModal = (status: boolean) => {
    this.modalService.toggleModal(this.modalId, status)
  }
}
