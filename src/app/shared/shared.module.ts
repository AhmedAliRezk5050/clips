import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModalComponent} from './modal/modal.component';
import {TabsContainerComponent} from './tabs-container/tabs-container.component';
import {TabComponent} from './tab/tab.component';
import {InputComponent} from './input/input.component';
import {AlertComponent} from './alert/alert.component';

@NgModule({
  declarations: [ModalComponent, TabsContainerComponent, TabComponent, InputComponent, AlertComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CommonModule, FormsModule, ModalComponent, TabsContainerComponent, TabComponent, InputComponent, AlertComponent],
})
export class SharedModule {
}
