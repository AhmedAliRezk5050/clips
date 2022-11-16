import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private visible = false;

  constructor() {
  }

  isModalVisible = () => this.visible

  toggleModal = () => this.visible = !this.visible

  openModal = () => this.visible = true

  closeModal = () => this.visible = false
}
