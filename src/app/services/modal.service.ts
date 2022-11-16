import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals = new Map<string, boolean>()

  constructor() {
  }

  registerModal = (id: string) => this.modals.set(id, false);

  isModalVisible = (id: string) => this.modals.get(id)

  toggleModal = (id: string, status: boolean) =>this.modals.set(id, status)
}
