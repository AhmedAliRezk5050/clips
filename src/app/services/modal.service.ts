import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: string[] = []

  constructor() {
  }

  isModalVisible = (id: string): boolean => !!this.modals.find(m => m === id)

  toggleModal = (id: string, status: boolean) => {
    if (status) {
      this.modals.push(id)
    } else {
      this.modals = this.modals.filter(m => m !== id);
    }
  }
}
