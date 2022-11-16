import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private visible = false;

  constructor() {
  }

  isModalVisible = () => this.visible

  toggleModal = (status: boolean) => this.visible = status
}
